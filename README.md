# DeviceFinder 官网

This is a code bundle for DeviceFinder 官网.
The original project is available at https://www.figma.com/design/N3N9lfevS9QgvqMWqj0aot/DeviceFinder-%E5%AE%98%E7%BD%91.

## Running the code

Run `npm i` to install dependencies.

Run `npm run dev` to start the development server.

## GitHub Pages 配置

仓库已经包含自动部署工作流：`.github/workflows/deploy-pages.yml`。

你只需要在 GitHub 仓库设置里启用：

1. `Settings` -> `Pages`
2. `Build and deployment` 的 `Source` 选择 `GitHub Actions`
3. 推送到 `main` 或 `master` 分支后，等待 `Deploy GitHub Pages` workflow 完成
4. 访问地址：`https://<你的用户名>.github.io/<仓库名>/`

备注：
- 当前仓库使用了自定义域名 `device.podslink.net`，工作流会设置 `VITE_BASE_PATH=/`。
- 自定义域名写在 `public/CNAME`，构建时会自动带到发布产物里。
- 工作流会复制 `build/index.html` 到 `build/404.html`，用于 SPA 路由刷新回退。
