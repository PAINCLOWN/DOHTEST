# DoH Speed Test

DNS-over-HTTPS 延迟测速工具

## 功能

- 🚀 快速测试多个 DoH 服务器响应延迟
- 🌍 覆盖全球多个区域的 DNS 服务
- 📊 实时统计成功/失败数量与平均延迟
- 📜 自动保存测试历史记录
- 🌐 支持中英双语切换

## 使用步骤

### 1. 安装 CORS 插件

由于浏览器同源策略限制，需安装 Allow CORS 插件：
- **Chrome**: [Allow CORS Access-Control](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
- **Firefox**: [Access Control Allow Origin](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)
- **Edge**: [Allow CORS](https://microsoftedge.microsoft.com/addons/detail/bhjepjpgngghppolkjdhckmnfphffdag)

安装后点击插件图标开启（图标变橙色即开启）。

### 2. 运行项目

```bash
# 使用 Python
python -m http.server 8080

# 或 Node.js
npx serve -l 8080
```

访问 `http://localhost:8080`

### 3. 开始测试

1. 选择 DNS 分组（全部/中国/美国/欧洲/亚洲/其他）
2. 输入测试域名（默认：example.com）
3. 设置测试次数和记录类型
4. 点击「开始测试」

## 技术栈

- HTML5 + CSS3
- JavaScript (ES6+)

## 文件结构

```
DOHTEST/
├── index.html    # 主页面
├── style.css     # 样式
├── script.js     # 核心逻辑
└── cors.png      # 插件配置说明图
```

## 许可证

MIT License