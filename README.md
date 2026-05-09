# DoH Speed Test

DNS-over-HTTPS 延迟测速工具，用于测试不同 DNS-over-HTTPS 服务器的响应速度。

## 功能特性

- 🚀 **快速测速**：同时测试多个 DNS 服务器的响应时间
- 🌍 **多区域覆盖**：包含中国国内、国际知名、欧洲、亚洲及其他地区的 DNS 服务器
- 📊 **实时统计**：显示成功/失败数量、平均延迟等统计信息
- 📜 **测试历史**：自动保存测试记录
- 🎨 **现代化界面**：深色主题，响应式设计

## 使用方法

### 前置条件

由于浏览器的同源策略限制，需要安装 CORS Unblock 插件：

1. 在 Chrome/Edge 浏览器中安装 [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino)
2. 点击浏览器右上角的插件图标，打开配置面板
3. 勾选以下选项：
   - Access-Control-Allow-Headers
   - Access-Control-Request-Headers
   - Overwrite 4xx status codes with 200
4. 点击 Start 按钮启动插件

### 运行项目

```bash
# 使用任意 HTTP 服务器运行
python -m http.server 3000
# 或使用 Node.js
npx serve -l 3000
```

然后在浏览器中访问 `http://localhost:3000`

### 测试步骤

1. 选择 DNS 服务器分组（中国国内/国际知名/欧洲DNS/亚洲其他/其他服务）
2. 输入要测试的域名（默认：example.com）
3. 点击「开始测试」按钮
4. 等待测试完成，查看结果

## DNS 服务器分类

| 分类 | 数量 | 说明 |
|------|------|------|
| 🇨🇳 中国国内 | 8个 | 360、阿里、腾讯等国内服务商 |
| 🌎 国际知名 | 17个 | Cloudflare、Google、Quad9、OpenDNS 等 |
| 🇪🇺 欧洲DNS | 24个 | CleanBrowsing、DNS4EU、Mullvad 等 |
| 🇦🇺 亚洲其他 | 11个 | Yandex、IIJ.JP、BebasDNS 等 |
| 🔧 其他服务 | 20个 | NextDNS、ControlD、LibreDNS 等 |

## 技术栈

- HTML5 + CSS3
- JavaScript (ES6+)
- Font Awesome (图标)
- Google Fonts (字体)

## 文件结构

```
DOHTEST/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 核心逻辑
├── cors.png            # CORS 配置说明图片
└── README.md           # 项目说明
```

## 许可证

MIT License

## 数据来源

DNS 服务器列表参考自 [AdGuard DNS Providers](https://adguard-dns.io/kb/zh-CN/general/dns-providers/)
