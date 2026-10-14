# CATS: Course Application and Training System

English | [中文](README.zh-CN.md)

CATS is a Spring Boot web application that handles employee training from application to reimbursement. An employee applies for a course, their manager approves or rejects it, the employee marks it complete once it ends, and then claims the fee. Administrators maintain the users, course categories, public holidays, and yearly allowances that these rules depend on.

## Login accounts

Once CATS is running (see [Running CATS locally](#running-cats-locally)), sign in with any of these accounts:

| Role | Username | Password | Login page |
| --- | --- | --- | --- |
| Employee | `emp1` | `password123` | <http://localhost:8080/login> |
| Employee | `emp2` | `password123` | <http://localhost:8080/login> |
| Manager | `manager` | `password123` | <http://localhost:8080/login> |
| Administrator | `admin` | `password123` | <http://localhost:8080/admin/login> |

`manager` approves requests from both `emp1` and `emp2`. CATS creates these accounts automatically on the first run against an empty database. Change the passwords before you deploy CATS anywhere other people can reach.

## Request lifecycle

| Status | Meaning | What can happen next |
| --- | --- | --- |
| Applied | The employee has submitted the request | The employee edits or deletes it; the manager approves or rejects it |
| Updated | The employee has edited a pending request | Same as Applied |
| Approved | The manager approved it, with a comment | The employee cancels it, or marks it completed after the end date |
| Rejected | The manager rejected it, with a comment | Nothing; the request is closed |
| Cancelled | The employee withdrew an approved request | Nothing; the request is closed |
| Completed | The course has ended and the employee confirmed it | The employee claims the fee |

A fee claim goes from Submitted to Approved or Rejected, and the manager must leave a comment either way. Each application allows one claim, for an amount above zero and no higher than the course fee. Internal Training is free, so it has no claim.

CATS simulates email notifications. It prints each one to the server console and saves it in the notification log instead of sending real mail.

## Checks on submission

CATS rejects an application when:

| Check | Rejected when |
| --- | --- |
| Dates | The start date is today or earlier, or the end date comes before the start date |
| Working days | The start or end date falls on a weekend or a public holiday |
| Allowance | The training days exceed the year's quota, or the fee exceeds the remaining budget |
| Overlap | The dates overlap another of the employee's Applied, Updated, or Approved requests |
| Half day | The employee picks half day for a category that doesn't allow it (only Internal Training does) |

Training days exclude weekends and the public holidays an administrator has configured.

## Pages by role

| Role | Main pages |
| --- | --- |
| Employee | `/employee/applications` (list and new application), `/employee/claims` |
| Manager | `/manager/pending`, `/manager/history`, `/manager/approved-overlapping`, `/manager/claims`, `/manager/report` (attendance and budget reports with CSV export) |
| Administrator | `/admin/users` (accounts, roles, reporting lines, yearly entitlements), `/admin/categories`, `/admin/holidays` |

Any signed-in user can open `/training-calendar`, a monthly view of approved courses. Users can also keep personal calendar events, which go through a separate REST API at `/api/calendar` that requires a signed-in session.

Every signed-in user also has a read-only assistant panel that suggests next steps from the pages they can already open. [CATS-Assistant-Update-EN.docx](CATS-Assistant-Update-EN.docx) describes it in detail.

## Technology

| Area | Technology |
| --- | --- |
| Backend | Java 21, Spring Boot 4.1.1, Spring MVC |
| Data | Spring Data JPA, MySQL (H2 in-memory for tests) |
| Security | Spring Security with role-based URL rules, BCrypt password hashing, CSRF protection |
| Pages | Thymeleaf, HTML, CSS, JavaScript |
| Interactive components | React 19, TypeScript, Vite, Tailwind CSS |
| Build and tests | Maven Wrapper, JUnit, Node test runner |

## Running CATS locally

Requirements: JDK 21 and MySQL 8. You only need Node.js 22.12 or later to rebuild the React components, because the built files are already committed.

**1. Get the code.**

```bash
git clone https://github.com/sunnysky-cell/CATS.git
cd CATS/CATS
```

**2. Create a database.**

```sql
CREATE DATABASE cats CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**3. Tell CATS how to connect.** Set these variables in the terminal you will start CATS from, with your own MySQL password. Without them, CATS uses `src/main/resources/application.properties`, which expects a database called `sa63demo_test` and a user called `sa63`.

Windows PowerShell:

```powershell
$env:SPRING_DATASOURCE_URL = "jdbc:mysql://localhost:3306/cats"
$env:SPRING_DATASOURCE_USERNAME = "root"
$env:SPRING_DATASOURCE_PASSWORD = "your_mysql_password"
```

macOS or Linux:

```bash
export SPRING_DATASOURCE_URL="jdbc:mysql://localhost:3306/cats"
export SPRING_DATASOURCE_USERNAME="root"
export SPRING_DATASOURCE_PASSWORD="your_mysql_password"
```

**4. Start the application.** Hibernate creates the tables on the first run.

```powershell
.\mvnw.cmd spring-boot:run
```

On macOS or Linux, run `sh mvnw spring-boot:run`. In Spring Tool Suite, import the `CATS/CATS` folder as an existing Maven project and run `CatsApplication` as a Spring Boot App.

**5. Sign in** at <http://localhost:8080/login> with one of the [login accounts](#login-accounts). Administrators use <http://localhost:8080/admin/login>.

## Starter data

Along with the [login accounts](#login-accounts), the first run against an empty database creates three course categories (Internal Training, External Course, Professional Certification), a New Year holiday on 1 January 2026, and a S$2,000 training budget for the current year for `manager`, `emp1`, and `emp2`.

## Tests

The backend tests use an in-memory H2 database, so they run without MySQL. From the `CATS` folder:

```powershell
.\mvnw.cmd test
```

On macOS or Linux, run `sh mvnw test`. After changing the React source, check and rebuild it from `CATS/frontend-source`:

```bash
npm ci
npm test
npm run typecheck
npm run build
```

`npm run build` writes the bundles to `src/main/resources/static/assets`.

## Code map

```text
.
├── CATS/                      # The Spring Boot application
│   ├── src/main/java/         # Java source (sg.edu.iss.demo)
│   ├── src/main/resources/    # Thymeleaf templates, static assets, application.properties
│   ├── src/test/              # Backend tests
│   ├── frontend-source/       # React and TypeScript source
│   ├── mvnw, mvnw.cmd         # Maven Wrapper
│   └── pom.xml
├── CATS-Assistant-Update-EN.docx
├── README.md
└── README.zh-CN.md
```

| Location | Contents |
| --- | --- |
| `config/` | Spring Security setup and the starter data loader |
| `controller/` | Login, employee, manager, admin, report, and calendar pages |
| `service/` | Business rules: applications, claims, allowances, day counting, reports, notifications |
| `model/`, `repo/` | JPA entities and Spring Data repositories |
| `calendar/` | Personal calendar REST API (`/api/calendar`) and the assistant page |
| `src/main/resources/templates/` | Thymeleaf pages |
| `frontend-source/` | React and TypeScript source for the course, calendar, and assistant pages |

Java packages sit under `CATS/src/main/java/sg/edu/iss/demo/`.

## More documentation

| File | Contents |
| --- | --- |
| `CATS/CHANGELOG_EN.txt` | Change history with test results (a Chinese version is in `CHANGELOG.txt`) |
| `CATS/THIRD-PARTY-LICENSES.txt` | Licences for third-party software |
| `CATS/frontend-source/README.txt` | Where the React source came from and which built file each page produces |
| `CATS/frontend-source/agentREADME.txt` | Notes on the assistant page source |
| `CATS-Assistant-Update-EN.docx` | The assistant's features, review rules, and limitations |
