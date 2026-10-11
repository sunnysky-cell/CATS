# 官方组件来源与本地适配

本目录保存 2026-10-10 实际取得的官方 registry JSON、实际 CLI 安装输出源码、上游 MIT 文本及依赖许可清单。`component-sources.json` 记录每份原件与交付源码的 SHA-256、地址、锁定版本。仓库页面观察到的 commit 只是分支快照；不能据此声称 CDN registry 一定由同一 commit 生成。

实际运行的是已安装 `shadcn@4.21.4` 的本地 CLI（退出码 0）：

```sh
node node_modules/shadcn/dist/index.js add --yes --overwrite button card input checkbox select tabs sheet dialog hover-card skeleton tooltip https://motion-primitives.com/c/morphing-dialog.json https://motion-primitives.com/c/animated-background.json https://motion-primitives.com/c/sliding-number.json
```

正式源码使用 `src/components/ui/` 的 11 个 shadcn 组件，以及 `src/components/motion-primitives/` 的 3 个 Motion 组件。`cli-installed/` 保留未做下面适配的安装原件，`registry/` 保留 HTTP 原件。CLI 自身只用于安装，不是运行或编译依赖；其精确安装依赖记录保留在 `installation-package-lock.json`。最终 `package-lock.json` 是重建项目的依据。

本地改动有限且可直接比较：

- 将 registry 的 `cn` 和内部 registry 路径改到本地 `@/lib/utils` 与 `@/components/ui`；没有下载字体或 CDN 运行脚本。
- Dialog、Sheet、Select、HoverCard、Tooltip 及 Morphing Dialog 的 Portal 统一使用 `getWorkspacePortalContainer()`，继承同一纸面蓝色 tokens。
- Morphing Trigger 支持明确的 `aria-label` 并保存真实 trigger ref；弹层有匹配的标题 ID，卡片副本不重复 ID。打开时管理 Tab/Escape、实际 body overflow，关闭或卸载恢复 overflow 和触发器焦点。没有描述组件时不引用不存在的描述 ID。
- Sliding Number 的 spring 类型保持字面量，兼容当前 Motion TypeScript 定义；没有改变原数字滚动算法。
- 使用官方 Tailwind theme/utilities 与 `tw-animate-css`，省略全局 Preflight。编译后为选择器加 `.cats-course-workspace` 范围，重命名动画及 `--tw-*` 注册变量，并仅展平这个隔离产物的 CSS layers，以适配原 Java 页面无 layer 的按钮规则。
- Sonner 还会在运行时注入它自己的 `data-sonner-*` 样式；这些不是 Vite 选择器作用域管线的产物。Toaster 挂载在组件区域并用同一纸面 tokens。
- Vite library mode 默认保留 `process.env.NODE_ENV`，Java 页面没有 Node 全局对象。因此 shared config 显式定义 production，并由 `verify-build.mjs` 拒绝带有残留 Node 环境引用的浏览器产物。

`THIRD-PARTY-LICENSES.txt` 和 `runtime-license-inventory.json` 保存所有非开发 lock 项的完整许可文本/校验值（含可选运行依赖，是实际 bundle 依赖的保守超集）。React、React DOM、Motion/Framer Motion、Radix 全套、Lucide、Sonner、use-measure、clsx/cva/tailwind-merge 及其传递依赖的版权文本都随源文件交付。

唯一 npm 包未自带根 LICENSE 的是 `react-remove-scroll-bar@2.3.8`：包内明确声明 MIT，另保存其官方仓库 master 的 MIT 文本，并明确标注这不是经过验证的 2.3.8 tag。不会把其他资源或原登录图库图片推断为 MIT。

维护时在 `ui/components-source` 执行：

```sh
npm ci
npm run typecheck
npm test
npm run build
node tools/verify-build.mjs course-workspace
node tools/collect-licenses.mjs
node tools/collect-provenance.mjs
```

Java 直接提供 `ui/static/assets` 的构建产物；无需启动 Vite 开发服务器。React 本地打包进 ES module，source map 可用于调试。`emptyOutDir: false` 保证组件构建不会删除 Java 的其他静态资产。Node.js 只用于维护源码；运行 Java 不需要 Node 或 node_modules。
