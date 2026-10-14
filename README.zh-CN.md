# CATS：课程申请与培训系统

[English](README.md) | 中文

CATS 是一个基于 Spring Boot 的 Web 应用，覆盖员工培训从申请到报销的整个流程。员工提交课程申请，经理批准或拒绝，课程结束后员工确认完成，再申请报销费用。管理员负责维护用户、课程类别、公众假期和年度额度，这些数据决定了系统的各项校验规则。

## 登录账号

CATS 启动后（见[本地运行](#本地运行)），可以用以下任一账号登录：

| 角色 | 用户名 | 密码 | 登录页面 |
| --- | --- | --- | --- |
| 员工 | `emp1` | `password123` | <http://localhost:8080/login> |
| 员工 | `emp2` | `password123` | <http://localhost:8080/login> |
| 经理 | `manager` | `password123` | <http://localhost:8080/login> |
| 管理员 | `admin` | `password123` | <http://localhost:8080/admin/login> |

`manager` 负责审批 `emp1` 和 `emp2` 的申请。第一次连接空数据库运行时，CATS 会自动创建这些账号。如果要部署到其他人能访问的环境，请先修改密码。

## 申请的状态流转

| 状态 | 含义 | 接下来可以做什么 |
| --- | --- | --- |
| Applied | 员工已提交申请 | 员工可以修改或删除；经理可以批准或拒绝 |
| Updated | 员工修改过待审申请 | 与 Applied 相同 |
| Approved | 经理已批准，并填写了意见 | 员工可以取消，或在课程结束后标记为完成 |
| Rejected | 经理已拒绝，并填写了意见 | 申请结束 |
| Cancelled | 员工撤回了已批准的申请 | 申请结束 |
| Completed | 课程已结束，员工已确认 | 员工可以申请报销 |

报销申请从 Submitted 变为 Approved 或 Rejected，经理无论批准还是拒绝都必须填写意见。每条申请只能报销一次，金额必须大于零且不超过课程费用。Internal Training 免费，不需要报销。

CATS 用模拟方式发送邮件通知：每条通知会打印到服务器控制台并保存到通知记录表，不会真正发出邮件。

## 提交时的校验

出现以下情况时，CATS 会拒绝提交：

| 校验项 | 拒绝条件 |
| --- | --- |
| 日期 | 开始日期是今天或更早，或结束日期早于开始日期 |
| 工作日 | 开始或结束日期是周末或公众假期 |
| 额度 | 培训天数超过当年配额，或费用超过剩余预算 |
| 日期冲突 | 与本人其他 Applied、Updated 或 Approved 状态的申请日期重叠 |
| 半天 | 所选课程类别不允许半天（只有 Internal Training 允许） |

培训天数的计算会扣除周末和管理员配置的公众假期。

## 各角色的主要页面

| 角色 | 主要页面 |
| --- | --- |
| 员工 | `/employee/applications`（申请列表和新建申请）、`/employee/claims` |
| 经理 | `/manager/pending`、`/manager/history`、`/manager/approved-overlapping`、`/manager/claims`、`/manager/report`（出勤和预算报表，可导出 CSV） |
| 管理员 | `/admin/users`（账号、角色、汇报关系、年度额度）、`/admin/categories`、`/admin/holidays` |

所有登录用户都可以打开 `/training-calendar`，按月查看已批准的课程。用户还可以添加个人日程，这部分通过独立的 REST 接口 `/api/calendar` 读写，需要已登录的会话。

所有登录用户还有一个只读的智能助手面板，它根据用户本来就能打开的页面给出建议。详细说明见 [CATS-Assistant-Update-EN.docx](CATS-Assistant-Update-EN.docx)。

## 技术栈

| 方面 | 技术 |
| --- | --- |
| 后端 | Java 21、Spring Boot 4.1.1、Spring MVC |
| 数据 | Spring Data JPA、MySQL（测试使用 H2 内存数据库） |
| 安全 | Spring Security 按角色控制 URL 访问、BCrypt 密码加密、CSRF 防护 |
| 页面 | Thymeleaf、HTML、CSS、JavaScript |
| 交互组件 | React 19、TypeScript、Vite、Tailwind CSS |
| 构建与测试 | Maven Wrapper、JUnit、Node 测试运行器 |

## 本地运行

需要 JDK 21 和 MySQL 8。编译好的前端文件已经提交在仓库里，只有重新构建 React 组件时才需要 Node.js 22.12 或以上版本。

**1. 获取代码。**

```bash
git clone https://github.com/sunnysky-cell/CATS.git
cd CATS/CATS
```

**2. 创建数据库。**

```sql
CREATE DATABASE cats CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**3. 配置数据库连接。** 在准备启动 CATS 的终端里设置以下变量，密码换成你自己的 MySQL 密码。不设置时，CATS 会读取 `src/main/resources/application.properties`，连接名为 `sa63demo_test` 的数据库，用户名为 `sa63`。

Windows PowerShell：

```powershell
$env:SPRING_DATASOURCE_URL = "jdbc:mysql://localhost:3306/cats"
$env:SPRING_DATASOURCE_USERNAME = "root"
$env:SPRING_DATASOURCE_PASSWORD = "your_mysql_password"
```

macOS 或 Linux：

```bash
export SPRING_DATASOURCE_URL="jdbc:mysql://localhost:3306/cats"
export SPRING_DATASOURCE_USERNAME="root"
export SPRING_DATASOURCE_PASSWORD="your_mysql_password"
```

**4. 启动应用。** 第一次运行时 Hibernate 会自动建表。

```powershell
.\mvnw.cmd spring-boot:run
```

macOS 或 Linux 上运行 `sh mvnw spring-boot:run`。使用 Spring Tool Suite 时，把 `CATS/CATS` 文件夹作为已有 Maven 项目导入，然后以 Spring Boot App 方式运行 `CatsApplication`。

**5. 登录**：打开 <http://localhost:8080/login>，使用上面的[登录账号](#登录账号)。管理员使用 <http://localhost:8080/admin/login>。

## 初始数据

除了上面的[登录账号](#登录账号)，第一次连接空数据库运行时还会创建三个课程类别（Internal Training、External Course、Professional Certification）、2026 年 1 月 1 日元旦假期，并为 `manager`、`emp1` 和 `emp2` 设置当年 S$2,000 的培训预算。

## 测试

后端测试使用内存 H2 数据库，不需要 MySQL。在 `CATS` 目录下运行：

```powershell
.\mvnw.cmd test
```

macOS 或 Linux 上运行 `sh mvnw test`。修改 React 源码后，在 `CATS/frontend-source` 目录下检查并重新构建：

```bash
npm ci
npm test
npm run typecheck
npm run build
```

`npm run build` 会把构建结果写入 `src/main/resources/static/assets`。

## 代码结构

```text
.
├── CATS/                      # Spring Boot 应用
│   ├── src/main/java/         # Java 源码（sg.edu.iss.demo）
│   ├── src/main/resources/    # Thymeleaf 模板、静态资源、application.properties
│   ├── src/test/              # 后端测试
│   ├── frontend-source/       # React 和 TypeScript 源码
│   ├── mvnw, mvnw.cmd         # Maven Wrapper
│   └── pom.xml
├── CATS-Assistant-Update-EN.docx
├── README.md
└── README.zh-CN.md
```

| 位置 | 内容 |
| --- | --- |
| `config/` | Spring Security 配置和初始数据加载 |
| `controller/` | 登录、员工、经理、管理员、报表和日历页面 |
| `service/` | 业务规则：申请、报销、额度、天数计算、报表、通知 |
| `model/`、`repo/` | JPA 实体和 Spring Data 仓库 |
| `calendar/` | 个人日历 REST 接口（`/api/calendar`）和智能助手页面 |
| `src/main/resources/templates/` | Thymeleaf 页面 |
| `frontend-source/` | 课程、日历和智能助手页面的 React 与 TypeScript 源码 |

Java 包都在 `CATS/src/main/java/sg/edu/iss/demo/` 下。

## 其他文档

| 文件 | 内容 |
| --- | --- |
| `CATS/CHANGELOG.txt` | 更新记录和测试结果（英文版为 `CHANGELOG_EN.txt`） |
| `CATS/THIRD-PARTY-LICENSES.txt` | 第三方软件许可 |
| `CATS/frontend-source/README.txt` | React 源码的来源，以及每个页面对应的构建文件 |
| `CATS/frontend-source/agentREADME.txt` | 智能助手页面源码说明 |
| `CATS-Assistant-Update-EN.docx` | 智能助手的功能、审核规则和限制 |
