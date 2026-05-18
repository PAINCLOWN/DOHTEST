const LANG = {
  zh: {
    title: 'DoH Speed Test',
    subtitle: 'DNS-over-HTTPS 延迟测试',
    placeholder: '输入测试域名...',
    btnTest: '开始测试',
    labelCount: '测试次数',
    labelType: '记录类型',
    tabAll: '全选',
    tabChina: '中国',
    tabUsa: '美国',
    tabEurope: '欧洲',
    tabAsia: '亚洲',
    tabOther: '其他',
    selectAll: '已选择全部',
    selectedCount: '已选',
    selectItems: '个',
    clearSelection: '清除选择',
    regionLabel: '选择地区',
    selectAllBtn: '全选',
    clearBtn: '清除',
    corsTitle: '⚠️ 重要提示：安装 Allow CORS 插件',
    corsDesc: '由于浏览器的同源策略限制，直接访问外部 DNS 服务器会被阻止。请安装 Allow CORS 插件以正常使用测速功能。',
    browsersLabel: '点击图标安装：',
    step1: '点击上方图标安装对应浏览器的插件',
    step2: '安装后插件图标显示为<strong style="color:#888">灰色 C</strong>，表示关闭状态',
    step3: '点击插件图标，图标变为<strong style="color:#ff9900">橙色 C</strong>，即开启 CORS',
    step4: '测试完成后建议再次点击图标关闭插件',
    imageCaption: 'Allow CORS 插件状态指示',
    corsNote: '📌 该插件无设置选项，仅有一个开关按钮。图标灰色=关闭，橙色=开启。',
    progressLabel: '测试进度',
    testing: '测试中...',
    pending: '等待测试',
    success: '成功',
    failed: '失败',
    avgLatency: '平均延迟',
    formatJSON: 'JSON',
    formatWire: 'Wire',
    history: '测试历史',
    noHistory: '暂无测试记录',
    historyDomain: '域名',
    historyTab: '分组',
    historyTime: '时间',
    historySuccess: '成功',
    historyAvg: '平均',
    ms: 'ms',
    copy: '复制',
    copied: '已复制',
    statsTotal: '服务器',
    statsSuccess: '成功',
    statsError: '失败',
    statsAvg: '平均延迟(ms)',
    btnClear: '清除'
  },
  en: {
    title: 'DoH Speed Test',
    subtitle: 'DNS-over-HTTPS Latency Tester',
    placeholder: 'Enter test domain...',
    btnTest: 'Start Test',
    labelCount: 'Test Count',
    labelType: 'Record Type',
    tabAll: 'Select All',
    tabChina: 'China',
    tabUsa: 'USA',
    tabEurope: 'Europe',
    tabAsia: 'Asia',
    tabOther: 'Other',
    selectAll: 'All Selected',
    selectedCount: 'Selected',
    selectItems: 'items',
    clearSelection: 'Clear Selection',
    regionLabel: 'Select Region',
    selectAllBtn: 'Select All',
    clearBtn: 'Clear',
    corsTitle: '⚠️ Important: Install Allow CORS Extension',
    corsDesc: 'Due to browser cross-origin policy restrictions, direct access to external DNS servers is blocked. Please install the Allow CORS extension to use the speed test feature.',
    browsersLabel: 'Click to install:',
    step1: 'Click the icon above to install the extension for your browser',
    step2: 'After installation, the extension icon shows <strong style="color:#888">gray C</strong>, indicating it is off',
    step3: 'Click the extension icon, it turns <strong style="color:#ff9900">orange C</strong>, meaning CORS is enabled',
    step4: 'After testing, it is recommended to click the icon again to disable the extension',
    imageCaption: 'Allow CORS Extension Status',
    corsNote: '📌 This extension has no settings, only an on/off button. Gray icon = off, Orange icon = on.',
    progressLabel: 'Test Progress',
    testing: 'Testing...',
    pending: 'Waiting',
    success: 'Success',
    failed: 'Failed',
    avgLatency: 'Avg Latency',
    formatJSON: 'JSON',
    formatWire: 'Wire',
    history: 'History',
    noHistory: 'No test records',
    historyDomain: 'Domain',
    historyTab: 'Group',
    historyTime: 'Time',
    historySuccess: 'Success',
    historyAvg: 'Avg',
    ms: 'ms',
    copy: 'Copy',
    copied: 'Copied',
    statsTotal: 'Servers',
    statsSuccess: 'Success',
    statsError: 'Error',
    statsAvg: 'Avg Latency(ms)',
    btnClear: 'Clear'
  }
};

let currentLang = 'zh';

function setLanguage(lang) {
  currentLang = lang;
  
  const langZhBtn = document.getElementById('lang-zh');
  const langEnBtn = document.getElementById('lang-en');
  if (langZhBtn) langZhBtn.classList.toggle('active', lang === 'zh');
  if (langEnBtn) langEnBtn.classList.toggle('active', lang === 'en');
  
  const texts = LANG[lang];
  
  const setText = (id, text, isHTML = false) => {
    const el = document.getElementById(id);
    if (el) {
      if (isHTML) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  };
  
  const setPlaceholder = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = text;
  };
  
  setText('title', texts.title);
  setText('subtitle', texts.subtitle);
  setPlaceholder('domain-input', texts.placeholder);
  setText('btn-test', texts.btnTest);
  setText('label-count', texts.labelCount);
  setText('label-type', texts.labelType);
  setText('tab-china', texts.tabChina);
  setText('tab-usa', texts.tabUsa);
  setText('tab-europe', texts.tabEurope);
  setText('tab-asia', texts.tabAsia);
  setText('tab-other', texts.tabOther);
  setText('region-label', texts.regionLabel);
  setText('select-all-text', texts.selectAllBtn);
  setText('clear-text', texts.clearBtn);
  setText('cors-title', texts.corsTitle);
  setText('cors-desc', texts.corsDesc, true);
  setText('browsers-label', texts.browsersLabel);
  setText('step-1', texts.step1, true);
  setText('step-2', texts.step2, true);
  setText('step-3', texts.step3, true);
  setText('step-4', texts.step4, true);
  setText('image-caption', texts.imageCaption);
  setText('cors-note', texts.corsNote);
  setText('progress-label', texts.progressLabel);
  
  setText('label-total', texts.statsTotal);
  setText('label-success', texts.statsSuccess);
  setText('label-error', texts.statsError);
  setText('label-avg', texts.statsAvg);
  
  setText('history-title', texts.history);
  setText('btn-clear', texts.btnClear);
  
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  
  updateStats();
  renderHistory();
}

function t(key) {
  return LANG[currentLang][key] || key;
}

const VERSION = {
  current: '2.0.0',
  lastUpdated: '2026-05-11',
  history: [
    {
      version: '2.0.0',
      date: '2026-05-11',
      changes: [
        '完整的DNS服务器数据更新',
        'JSON和Wire格式自动探测',
        '选项卡滑动高亮动画',
        '炭黑灰+青柠绿主题配色',
        '每次测试延迟和平均延迟展示',
        '智能延迟排序功能'
      ]
    }
  ],
  getFullInfo() {
    const latest = this.history[0];
    return `当前版本: ${latest.version} (${latest.date})\n\n更新内容:\n${latest.changes.map(c => '• ' + c).join('\n')}`;
  }
};

// 格式化服务器名称显示
function formatServerName(server) {
  const name = server.name || '';
  const type = server.type || '';
  const addrType = server.addrType || '';
  return `${name}${name && type ? ' - ' : ''}${type}${type && addrType ? ' - ' : ''}${addrType}`;
}

// 复制URL到剪贴板
function copyUrlToClipboard(url, button) {
  navigator.clipboard.writeText(url).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    button.classList.add('copied');
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.classList.remove('copied');
    }, 1500);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

const DNS_SERVERS = {
  'all': [
    // Google (10条) - 美国
    { name: 'Google', type: '默认', addrType: '域名', format: 'JSON', url: 'https://dns.google/resolve', note: 'JSON API（原始）', region: 'usa' },
    { name: 'Google', type: '默认', addrType: '域名', format: 'Wire', url: 'https://dns.google/dns-query', note: 'RFC 8484', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://8.8.8.8/resolve', note: '', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://8.8.8.8/dns-query', note: '', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://8.8.4.4/resolve', note: '', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://8.8.4.4/dns-query', note: '', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IPv6', format: 'JSON', url: 'https://[2001:4860:4860::8888]/resolve', note: 'IPv6', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IPv6', format: 'Wire', url: 'https://[2001:4860:4860::8888]/dns-query', note: 'IPv6', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IPv6', format: 'JSON', url: 'https://[2001:4860:4860::8844]/resolve', note: 'IPv6', region: 'usa' },
    { name: 'Google', type: '默认', addrType: 'IPv6', format: 'Wire', url: 'https://[2001:4860:4860::8844]/dns-query', note: 'IPv6', region: 'usa' },
    
    // Cloudflare (26条) - 美国
    { name: 'Cloudflare', type: '默认', addrType: '域名', format: 'JSON', url: 'https://cloudflare-dns.com/resolve', note: '兼容 Google JSON', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: '域名', format: 'Wire', url: 'https://cloudflare-dns.com/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://1.1.1.1/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://1.1.1.1/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://1.0.0.1/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://1.0.0.1/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IPv6', format: 'JSON', url: 'https://[2606:4700:4700::1111]/resolve', note: 'IPv6', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IPv6', format: 'Wire', url: 'https://[2606:4700:4700::1111]/dns-query', note: 'IPv6', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IPv6', format: 'JSON', url: 'https://[2606:4700:4700::1001]/resolve', note: 'IPv6', region: 'usa' },
    { name: 'Cloudflare', type: '默认', addrType: 'IPv6', format: 'Wire', url: 'https://[2606:4700:4700::1001]/dns-query', note: 'IPv6', region: 'usa' },
    { name: 'Cloudflare', type: '恶意软件', addrType: '域名', format: 'JSON', url: 'https://security.cloudflare-dns.com/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '恶意软件', addrType: '域名', format: 'Wire', url: 'https://security.cloudflare-dns.com/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '恶意软件', addrType: 'IP', format: 'JSON', url: 'https://1.1.1.2/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '恶意软件', addrType: 'IP', format: 'Wire', url: 'https://1.1.1.2/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '恶意软件', addrType: 'IP', format: 'JSON', url: 'https://1.0.0.2/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '恶意软件', addrType: 'IP', format: 'Wire', url: 'https://1.0.0.2/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '家庭', addrType: '域名', format: 'JSON', url: 'https://family.cloudflare-dns.com/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '家庭', addrType: '域名', format: 'Wire', url: 'https://family.cloudflare-dns.com/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '家庭', addrType: 'IP', format: 'JSON', url: 'https://1.1.1.3/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '家庭', addrType: 'IP', format: 'Wire', url: 'https://1.1.1.3/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '家庭', addrType: 'IP', format: 'JSON', url: 'https://1.0.0.3/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: '家庭', addrType: 'IP', format: 'Wire', url: 'https://1.0.0.3/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: 'Mozilla', addrType: '域名', format: 'JSON', url: 'https://mozilla.cloudflare-dns.com/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: 'Mozilla', addrType: '域名', format: 'Wire', url: 'https://mozilla.cloudflare-dns.com/dns-query', note: '', region: 'usa' },
    { name: 'Cloudflare', type: 'DNS64', addrType: '域名', format: 'JSON', url: 'https://dns64.cloudflare-dns.com/resolve', note: '', region: 'usa' },
    { name: 'Cloudflare', type: 'DNS64', addrType: '域名', format: 'Wire', url: 'https://dns64.cloudflare-dns.com/dns-query', note: '', region: 'usa' },
    
    // Quad9 (16条) - 美国
    { name: 'Quad9', type: '安全', addrType: '域名', format: 'JSON', url: 'https://dns.quad9.net/resolve', note: 'DNSSEC；无日志', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: '域名', format: 'Wire', url: 'https://dns.quad9.net/dns-query', note: '', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: '域名', format: 'JSON', url: 'https://dns9.quad9.net/resolve', note: '', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: '域名', format: 'Wire', url: 'https://dns9.quad9.net/dns-query', note: '', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: 'IP', format: 'JSON', url: 'https://9.9.9.9/resolve', note: '', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: 'IP', format: 'Wire', url: 'https://9.9.9.9/dns-query', note: '', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: 'IP', format: 'JSON', url: 'https://149.112.112.112/resolve', note: '', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: 'IP', format: 'Wire', url: 'https://149.112.112.112/dns-query', note: '', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: 'IPv6', format: 'JSON', url: 'https://[2620:fe::fe]/resolve', note: 'IPv6', region: 'usa' },
    { name: 'Quad9', type: '安全', addrType: 'IPv6', format: 'Wire', url: 'https://[2620:fe::fe]/dns-query', note: 'IPv6', region: 'usa' },
    { name: 'Quad9', type: '无阻断', addrType: '域名', format: 'JSON', url: 'https://dns10.quad9.net/resolve', note: '', region: 'usa' },
    { name: 'Quad9', type: '无阻断', addrType: '域名', format: 'Wire', url: 'https://dns10.quad9.net/dns-query', note: '', region: 'usa' },
    { name: 'Quad9', type: '无阻断', addrType: 'IP', format: 'JSON', url: 'https://9.9.9.10/resolve', note: '', region: 'usa' },
    { name: 'Quad9', type: '无阻断', addrType: 'IP', format: 'Wire', url: 'https://9.9.9.10/dns-query', note: '', region: 'usa' },
    { name: 'Quad9', type: '无阻断', addrType: 'IP', format: 'JSON', url: 'https://149.112.112.10/resolve', note: '', region: 'usa' },
    { name: 'Quad9', type: '无阻断', addrType: 'IP', format: 'Wire', url: 'https://149.112.112.10/dns-query', note: '', region: 'usa' },
    
    // AdGuard (10条) - 全球/欧洲
    { name: 'AdGuard', type: '默认', addrType: '域名', format: 'JSON', url: 'https://dns.adguard-dns.com/resolve', note: 'DNSSEC；DoQ', region: 'europe' },
    { name: 'AdGuard', type: '默认', addrType: '域名', format: 'Wire', url: 'https://dns.adguard-dns.com/dns-query', note: '', region: 'europe' },
    { name: 'AdGuard', type: '默认', addrType: '旧域名', format: 'JSON', url: 'https://dns.adguard.com/resolve', note: '旧域名', region: 'europe' },
    { name: 'AdGuard', type: '默认', addrType: '旧域名', format: 'Wire', url: 'https://dns.adguard.com/dns-query', note: '旧域名', region: 'europe' },
    { name: 'AdGuard', type: '家庭', addrType: '域名', format: 'JSON', url: 'https://family.adguard-dns.com/resolve', note: '', region: 'europe' },
    { name: 'AdGuard', type: '家庭', addrType: '域名', format: 'Wire', url: 'https://family.adguard-dns.com/dns-query', note: '', region: 'europe' },
    { name: 'AdGuard', type: '家庭', addrType: '旧域名', format: 'JSON', url: 'https://dns-family.adguard.com/resolve', note: '旧域名', region: 'europe' },
    { name: 'AdGuard', type: '家庭', addrType: '旧域名', format: 'Wire', url: 'https://dns-family.adguard.com/dns-query', note: '旧域名', region: 'europe' },
    { name: 'AdGuard', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://unfiltered.adguard-dns.com/resolve', note: '', region: 'europe' },
    { name: 'AdGuard', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://unfiltered.adguard-dns.com/dns-query', note: '', region: 'europe' },
    
    // Mullvad (6条) - 欧洲(瑞典)
    { name: 'Mullvad', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://adblock.doh.mullvad.net/resolve', note: '', region: 'europe' },
    { name: 'Mullvad', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://adblock.doh.mullvad.net/dns-query', note: '', region: 'europe' },
    { name: 'Mullvad', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://base.doh.mullvad.net/resolve', note: '', region: 'europe' },
    { name: 'Mullvad', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://base.doh.mullvad.net/dns-query', note: '', region: 'europe' },
    { name: 'Mullvad', type: '全功能', addrType: '域名', format: 'JSON', url: 'https://all.doh.mullvad.net/resolve', note: '', region: 'europe' },
    { name: 'Mullvad', type: '全功能', addrType: '域名', format: 'Wire', url: 'https://all.doh.mullvad.net/dns-query', note: '', region: 'europe' },
    
    // Control D (6条) - 加拿大
    { name: 'Control D', type: '无过滤', addrType: '域名', format: '混合', url: 'https://freedns.controld.com/p0', note: '', region: 'other' },
    { name: 'Control D', type: '恶意软件拦截', addrType: '域名', format: '混合', url: 'https://freedns.controld.com/p1', note: '', region: 'other' },
    { name: 'Control D', type: '广告拦截', addrType: '域名', format: '混合', url: 'https://freedns.controld.com/p2', note: '', region: 'other' },
    { name: 'Control D', type: '社交拦截', addrType: '域名', format: '混合', url: 'https://freedns.controld.com/p3', note: '', region: 'other' },
    { name: 'Control D', type: '家庭', addrType: '域名', format: '混合', url: 'https://freedns.controld.com/family', note: '', region: 'other' },
    { name: 'Control D', type: '无审查', addrType: '域名', format: '混合', url: 'https://freedns.controld.com/uncensored', note: '', region: 'other' },
    
    // NextDNS (2条) - 美国
    { name: 'NextDNS', type: '默认', addrType: '域名', format: 'JSON', url: 'https://dns.nextdns.io/resolve', note: '', region: 'usa' },
    { name: 'NextDNS', type: '默认', addrType: '域名', format: 'Wire', url: 'https://dns.nextdns.io/dns-query', note: '', region: 'usa' },
    
    // Cisco OpenDNS (16条) - 美国
    { name: 'OpenDNS', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.opendns.com/resolve', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.opendns.com/dns-query', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://208.67.222.222/resolve', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://208.67.222.222/dns-query', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://208.67.220.220/resolve', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://208.67.220.220/dns-query', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '家庭', addrType: '域名', format: 'JSON', url: 'https://doh.familyshield.opendns.com/resolve', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '家庭', addrType: '域名', format: 'Wire', url: 'https://doh.familyshield.opendns.com/dns-query', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '家庭', addrType: 'IP', format: 'JSON', url: 'https://208.67.222.123/resolve', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '家庭', addrType: 'IP', format: 'Wire', url: 'https://208.67.222.123/dns-query', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '家庭', addrType: 'IP', format: 'JSON', url: 'https://208.67.220.123/resolve', note: '', region: 'usa' },
    { name: 'OpenDNS', type: '家庭', addrType: 'IP', format: 'Wire', url: 'https://208.67.220.123/dns-query', note: '', region: 'usa' },
    { name: 'OpenDNS', type: 'Sandbox', addrType: '域名', format: 'JSON', url: 'https://sandbox.opendns.com/resolve', note: '无过滤', region: 'usa' },
    { name: 'OpenDNS', type: 'Sandbox', addrType: '域名', format: 'Wire', url: 'https://sandbox.opendns.com/dns-query', note: '无过滤', region: 'usa' },
    { name: 'OpenDNS', type: 'Sandbox', addrType: 'IP', format: 'JSON', url: 'https://208.67.222.2/resolve', note: '', region: 'usa' },
    { name: 'OpenDNS', type: 'Sandbox', addrType: 'IP', format: 'Wire', url: 'https://208.67.222.2/dns-query', note: '', region: 'usa' },
    
    // Cisco Umbrella (2条) - 美国
    { name: 'Cisco Umbrella', type: '企业', addrType: '域名', format: 'JSON', url: 'https://doh.umbrella.com/resolve', note: '', region: 'usa' },
    { name: 'Cisco Umbrella', type: '企业', addrType: '域名', format: 'Wire', url: 'https://doh.umbrella.com/dns-query', note: '', region: 'usa' },
    
    // CleanBrowsing (3条) - 美国
    { name: 'CleanBrowsing', type: '家庭', addrType: '域名', format: '混合', url: 'https://doh.cleanbrowsing.org/doh/family-filter', note: '', region: 'usa' },
    { name: 'CleanBrowsing', type: '成人', addrType: '域名', format: '混合', url: 'https://doh.cleanbrowsing.org/doh/adult-filter', note: '', region: 'usa' },
    { name: 'CleanBrowsing', type: '安全', addrType: '域名', format: '混合', url: 'https://doh.cleanbrowsing.org/doh/security-filter', note: '', region: 'usa' },
    
    // AliDNS (10条) - 中国
    { name: 'AliDNS', type: '默认', addrType: '域名', format: 'JSON', url: 'https://dns.alidns.com/resolve', note: '中国优化', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: '域名', format: 'Wire', url: 'https://dns.alidns.com/dns-query', note: '', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://223.5.5.5/resolve', note: '', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://223.5.5.5/dns-query', note: '', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://223.6.6.6/resolve', note: '', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://223.6.6.6/dns-query', note: '', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IPv6', format: 'JSON', url: 'https://[2400:3200::1]/resolve', note: 'IPv6', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IPv6', format: 'Wire', url: 'https://[2400:3200::1]/dns-query', note: 'IPv6', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IPv6', format: 'JSON', url: 'https://[2400:3200:baba::1]/resolve', note: 'IPv6', region: 'china' },
    { name: 'AliDNS', type: '默认', addrType: 'IPv6', format: 'Wire', url: 'https://[2400:3200:baba::1]/dns-query', note: 'IPv6', region: 'china' },
    
    // DNSPod (8条) - 中国
    { name: 'DNSPod', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.pub/resolve', note: '中国优化', region: 'china' },
    { name: 'DNSPod', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.pub/dns-query', note: '', region: 'china' },
    { name: 'DNSPod', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://1.12.12.12/resolve', note: '', region: 'china' },
    { name: 'DNSPod', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://1.12.12.12/dns-query', note: '', region: 'china' },
    { name: 'DNSPod', type: '默认', addrType: 'IP', format: 'JSON', url: 'https://120.53.53.53/resolve', note: '', region: 'china' },
    { name: 'DNSPod', type: '默认', addrType: 'IP', format: 'Wire', url: 'https://120.53.53.53/dns-query', note: '', region: 'china' },
    { name: 'DNSPod', type: '默认', addrType: 'IPv6', format: 'JSON', url: 'https://2402:4e00::/resolve', note: 'IPv6', region: 'china' },
    { name: 'DNSPod', type: '默认', addrType: 'IPv6', format: 'Wire', url: 'https://2402:4e00::/dns-query', note: 'IPv6', region: 'china' },
    
    // 360 DNS (2条) - 中国
    { name: '360 DNS', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.360.cn/resolve', note: '', region: 'china' },
    { name: '360 DNS', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.360.cn/dns-query', note: '', region: 'china' },
    
    // IIJ (日本) (2条) - 日本(亚洲)
    { name: 'IIJ (日本)', type: '默认', addrType: '域名', format: 'JSON', url: 'https://public.dns.iij.jp/resolve', note: '', region: 'asia' },
    { name: 'IIJ (日本)', type: '默认', addrType: '域名', format: 'Wire', url: 'https://public.dns.iij.jp/dns-query', note: '', region: 'asia' },
    { name: 'JPNE (日本)', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.jpne.jp/resolve', note: '', region: 'asia' },
    { name: 'JPNE (日本)', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.jpne.jp/dns-query', note: '', region: 'asia' },
    
    // Yandex DNS (2条) - 俄罗斯(欧洲/亚洲)
    { name: 'Yandex DNS', type: '默认', addrType: '域名', format: 'JSON', url: 'https://dns.yandex.com/resolve', note: '', region: 'europe' },
    { name: 'Yandex DNS', type: '默认', addrType: '域名', format: 'Wire', url: 'https://dns.yandex.com/dns-query', note: '', region: 'europe' },
    
    // 其他
    { name: 'DNS.SB', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.dns.sb/resolve', note: '', region: 'other' },
    { name: 'DNS.SB', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.dns.sb/dns-query', note: '', region: 'other' },
    { name: 'Wikimedia DNS', type: '默认', addrType: '域名', format: 'JSON', url: 'https://wikimedia-dns.org/resolve', note: '维基基金会', region: 'other' },
    { name: 'Wikimedia DNS', type: '默认', addrType: '域名', format: 'Wire', url: 'https://wikimedia-dns.org/dns-query', note: '', region: 'other' },
    { name: 'PowerDNS', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.powerdns.org/resolve', note: '', region: 'europe' },
    { name: 'PowerDNS', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.powerdns.org/dns-query', note: '', region: 'europe' },

    // ===== NEW ENTRIES FROM CURL WIKI =====
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'JSON', url: 'https://resolver1.absolight.net/resolve', note: '', region: 'europe' },
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'Wire', url: 'https://resolver1.absolight.net/dns-query', note: '', region: 'europe' },
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'JSON', url: 'https://resolver2.absolight.net/resolve', note: '', region: 'europe' },
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'Wire', url: 'https://resolver2.absolight.net/dns-query', note: '', region: 'europe' },
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'JSON', url: 'https://resolver3.absolight.net/resolve', note: '', region: 'europe' },
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'Wire', url: 'https://resolver3.absolight.net/dns-query', note: '', region: 'europe' },
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'JSON', url: 'https://res-acst3.absolight.net/resolve', note: '', region: 'europe' },
    { name: 'Absolight', type: '默认', addrType: '域名', format: 'Wire', url: 'https://res-acst3.absolight.net/dns-query', note: '', region: 'europe' },
    { name: 'AdFilter', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://per.adfilter.net/resolve', note: '', region: 'europe' },
    { name: 'AdFilter', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://per.adfilter.net/dns-query', note: '', region: 'europe' },
    { name: 'AdFilter', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://syd.adfilter.net/resolve', note: '', region: 'europe' },
    { name: 'AdFilter', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://syd.adfilter.net/dns-query', note: '', region: 'europe' },
    { name: 'AdFilter', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://adl.adfilter.net/resolve', note: '', region: 'europe' },
    { name: 'AdFilter', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://adl.adfilter.net/dns-query', note: '', region: 'europe' },
    { name: 'Adfreedns', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://adfreedns.top/resolve', note: '', region: 'europe' },
    { name: 'Adfreedns', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://adfreedns.top/dns-query', note: '', region: 'europe' },
    { name: 'ADnull DNS', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.adnull.com/resolve', note: '', region: 'europe' },
    { name: 'ADnull DNS', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.adnull.com/dns-query', note: '', region: 'europe' },
    { name: 'AKBXR DNS', type: '广告+赌博拦截', addrType: '域名', format: 'JSON', url: 'https://dns.akbxr.com/resolve', note: '', region: 'europe' },
    { name: 'AKBXR DNS', type: '广告+赌博拦截', addrType: '域名', format: 'Wire', url: 'https://dns.akbxr.com/dns-query', note: '', region: 'europe' },
    { name: 'Andre Kelpe', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://doh.kel.pe/resolve', note: '', region: 'europe' },
    { name: 'Andre Kelpe', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://doh.kel.pe/dns-query', note: '', region: 'europe' },
    { name: 'Andrews & Arnold', type: '无日志', addrType: '域名', format: 'JSON', url: 'https://dns.aa.net.uk/resolve', note: '', region: 'europe' },
    { name: 'Andrews & Arnold', type: '无日志', addrType: '域名', format: 'Wire', url: 'https://dns.aa.net.uk/dns-query', note: '', region: 'europe' },
    { name: 'Angry.im', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://doh.angry.im/resolve', note: 'OpenNIC', region: 'europe' },
    { name: 'Angry.im', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://doh.angry.im/dns-query', note: '', region: 'europe' },
    { name: 'anon.no', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.anon.no/resolve', note: '', region: 'europe' },
    { name: 'anon.no', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.anon.no/dns-query', note: '', region: 'europe' },
    { name: 'applewebkit.dev', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.applewebkit.dev/resolve', note: 'Cloudflare上游', region: 'europe' },
    { name: 'applewebkit.dev', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.applewebkit.dev/dns-query', note: '', region: 'europe' },
    { name: 'Aquilenet DNS', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.aquilenet.fr/resolve', note: 'DNSSEC', region: 'europe' },
    { name: 'Aquilenet DNS', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.aquilenet.fr/dns-query', note: '', region: 'europe' },
    { name: 'arnor.org', type: '安全', addrType: '域名', format: 'JSON', url: 'https://nsec.arnor.org/resolve', note: '广告+恶意软件拦截', region: 'europe' },
    { name: 'arnor.org', type: '安全', addrType: '域名', format: 'Wire', url: 'https://nsec.arnor.org/dns-query', note: '', region: 'europe' },
    { name: 'Asteri Moon', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.asterimoon.com/resolve', note: '', region: 'europe' },
    { name: 'Asteri Moon', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.asterimoon.com/dns-query', note: '', region: 'europe' },
    { name: 'a47.me', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.a47.me/resolve', note: '', region: 'europe' },
    { name: 'a47.me', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.a47.me/dns-query', note: '', region: 'europe' },
    { name: 'bazooki-infra.dev', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://bazooki-infra.dev/resolve', note: '', region: 'europe' },
    { name: 'bazooki-infra.dev', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://bazooki-infra.dev/dns-query', note: '', region: 'europe' },
    { name: 'Belnet', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.belnet.be/resolve', note: '', region: 'europe' },
    { name: 'Belnet', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.belnet.be/dns-query', note: '', region: 'europe' },
    { name: 'Ben Hocking', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.bmwhocking.com/resolve', note: '', region: 'europe' },
    { name: 'Ben Hocking', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.bmwhocking.com/dns-query', note: '', region: 'europe' },
    { name: 'Bitdefender', type: '默认', addrType: '域名', format: 'JSON', url: 'https://dns.bitdefender.net/resolve', note: '', region: 'europe' },
    { name: 'Bitdefender', type: '默认', addrType: '域名', format: 'Wire', url: 'https://dns.bitdefender.net/dns-query', note: '', region: 'europe' },
    { name: 'BITServices', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.bitservices.io/resolve', note: 'Cloudflare上游', region: 'europe' },
    { name: 'BITServices', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.bitservices.io/dns-query', note: '', region: 'europe' },
    { name: 'Blokada DNS', type: '无日志', addrType: '域名', format: 'JSON', url: 'https://dns.blokada.org/resolve', note: '', region: 'europe' },
    { name: 'Blokada DNS', type: '无日志', addrType: '域名', format: 'Wire', url: 'https://dns.blokada.org/dns-query', note: '', region: 'europe' },
    { name: 'Blue Shield Umbrella', type: '默认', addrType: '域名', format: 'JSON', url: 'https://rfree1.blue-shield.at/resolve', note: '', region: 'europe' },
    { name: 'Blue Shield Umbrella', type: '默认', addrType: '域名', format: 'Wire', url: 'https://rfree1.blue-shield.at/dns-query', note: '', region: 'europe' },
    { name: 'Blue Shield Umbrella', type: '默认', addrType: '域名', format: 'JSON', url: 'https://rfree2.blue-shield.at/resolve', note: '', region: 'europe' },
    { name: 'Blue Shield Umbrella', type: '默认', addrType: '域名', format: 'Wire', url: 'https://rfree2.blue-shield.at/dns-query', note: '', region: 'europe' },
    { name: 'Brahma World', type: '安全', addrType: '域名', format: 'JSON', url: 'https://dns.brahma.world/resolve', note: '无日志; DNSSEC', region: 'europe' },
    { name: 'Brahma World', type: '安全', addrType: '域名', format: 'Wire', url: 'https://dns.brahma.world/dns-query', note: '', region: 'europe' },
    { name: 'brembeck.cloud', type: '广告+成人拦截', addrType: '域名', format: 'JSON', url: 'https://dns.brembeck.cloud/resolve', note: '', region: 'europe' },
    { name: 'brembeck.cloud', type: '广告+成人拦截', addrType: '域名', format: 'Wire', url: 'https://dns.brembeck.cloud/dns-query', note: '', region: 'europe' },
    { name: 'busold.ws', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.busold.ws/resolve', note: '', region: 'europe' },
    { name: 'busold.ws', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.busold.ws/dns-query', note: '', region: 'europe' },
    { name: 'caspervk.net', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.caspervk.net/resolve', note: '', region: 'europe' },
    { name: 'caspervk.net', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.caspervk.net/dns-query', note: '', region: 'europe' },
    { name: 'CERT Estonia', type: '安全', addrType: '域名', format: 'JSON', url: 'https://dns.cert.ee/resolve', note: '钓鱼+恶意软件拦截', region: 'europe' },
    { name: 'CERT Estonia', type: '安全', addrType: '域名', format: 'Wire', url: 'https://dns.cert.ee/dns-query', note: '', region: 'europe' },
    { name: 'chenu.ch', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.chenu.ch/resolve', note: '', region: 'europe' },
    { name: 'chenu.ch', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.chenu.ch/dns-query', note: '', region: 'europe' },
    { name: 'Christer Waren', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.christerwaren.fi/resolve', note: '', region: 'europe' },
    { name: 'Christer Waren', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.christerwaren.fi/dns-query', note: '', region: 'europe' },
    { name: 'CleverAdmin', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns1.techniverse.net/resolve', note: '', region: 'europe' },
    { name: 'CleverAdmin', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns1.techniverse.net/dns-query', note: '', region: 'europe' },
    { name: 'Comss.one DNS', type: 'Geo解锁', addrType: '域名', format: 'JSON', url: 'https://dns.comss.one/resolve', note: '', region: 'europe' },
    { name: 'Comss.one DNS', type: 'Geo解锁', addrType: '域名', format: 'Wire', url: 'https://dns.comss.one/dns-query', note: '', region: 'europe' },
    { name: 'Comss.one DNS', type: 'Geo解锁+去广告', addrType: '域名', format: 'JSON', url: 'https://router.comss.one/resolve', note: '', region: 'europe' },
    { name: 'Comss.one DNS', type: 'Geo解锁+去广告', addrType: '域名', format: 'Wire', url: 'https://router.comss.one/dns-query', note: '', region: 'europe' },
    { name: 'Cryptostorm', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://cryptostorm.is/resolve', note: '', region: 'europe' },
    { name: 'Cryptostorm', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://cryptostorm.is/dns-query', note: '', region: 'europe' },
    { name: 'CSA-IT', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.csaonline.de/resolve', note: '', region: 'europe' },
    { name: 'CSA-IT', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.csaonline.de/dns-query', note: '', region: 'europe' },
    { name: 'CynthiaLabs', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.cynthialabs.net/resolve', note: '', region: 'europe' },
    { name: 'CynthiaLabs', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.cynthialabs.net/dns-query', note: '', region: 'europe' },
    { name: 'CZ.NIC', type: '默认', addrType: '域名', format: 'JSON', url: 'https://odvr.nic.cz/resolve', note: 'DNSSEC; Knot Resolver', region: 'europe' },
    { name: 'CZ.NIC', type: '默认', addrType: '域名', format: 'Wire', url: 'https://odvr.nic.cz/dns-query', note: '', region: 'europe' },
    { name: 'data.haus', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://ns.data.haus/resolve', note: '无日志', region: 'europe' },
    { name: 'data.haus', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://ns.data.haus/dns-query', note: '', region: 'europe' },
    { name: 'data.haus', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://mail.data.haus/resolve', note: '无日志', region: 'europe' },
    { name: 'data.haus', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://mail.data.haus/dns-query', note: '', region: 'europe' },
    { name: 'datenquark.de', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.datenquark.de/resolve', note: '', region: 'europe' },
    { name: 'datenquark.de', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.datenquark.de/dns-query', note: '', region: 'europe' },
    { name: 'dev-umbrellagov', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.dev-umbrellagov.com/resolve', note: '', region: 'europe' },
    { name: 'dev-umbrellagov', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.dev-umbrellagov.com/dns-query', note: '', region: 'europe' },
    { name: 'Digitale Gesellschaft', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.digitale-gesellschaft.ch/resolve', note: '无日志; DNSSEC', region: 'europe' },
    { name: 'Digitale Gesellschaft', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.digitale-gesellschaft.ch/dns-query', note: '', region: 'europe' },
    { name: 'Disconnect.app', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.disconnect.app/resolve', note: 'Cloudflare上游', region: 'europe' },
    { name: 'Disconnect.app', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.disconnect.app/dns-query', note: '', region: 'europe' },
    { name: 'dns.digitalsize.net', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://dns.digitalsize.net/resolve', note: '无日志; DNSSEC', region: 'europe' },
    { name: 'dns.digitalsize.net', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://dns.digitalsize.net/dns-query', note: '', region: 'europe' },
    { name: 'DNS4all', type: '无日志', addrType: '域名', format: 'JSON', url: 'https://doh.dns4all.eu/resolve', note: '', region: 'europe' },
    { name: 'DNS4all', type: '无日志', addrType: '域名', format: 'Wire', url: 'https://doh.dns4all.eu/dns-query', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '保护', addrType: '域名', format: 'JSON', url: 'https://protective.joindns4.eu/resolve', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '保护', addrType: '域名', format: 'Wire', url: 'https://protective.joindns4.eu/dns-query', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '儿童', addrType: '域名', format: 'JSON', url: 'https://child.joindns4.eu/resolve', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '儿童', addrType: '域名', format: 'Wire', url: 'https://child.joindns4.eu/dns-query', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '去广告', addrType: '域名', format: 'JSON', url: 'https://noads.joindns4.eu/resolve', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '去广告', addrType: '域名', format: 'Wire', url: 'https://noads.joindns4.eu/dns-query', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '儿童+去广告', addrType: '域名', format: 'JSON', url: 'https://child-noads.joindns4.eu/resolve', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '儿童+去广告', addrType: '域名', format: 'Wire', url: 'https://child-noads.joindns4.eu/dns-query', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '无过滤', addrType: '域名', format: 'JSON', url: 'https://unfiltered.joindns4.eu/resolve', note: '', region: 'europe' },
    { name: 'DNS4EU', type: '无过滤', addrType: '域名', format: 'Wire', url: 'https://unfiltered.joindns4.eu/dns-query', note: '', region: 'europe' },
    { name: 'dns4me', type: 'Canada', addrType: '域名', format: 'JSON', url: 'https://ca01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'Canada', addrType: '域名', format: 'Wire', url: 'https://ca01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'Canada', addrType: '域名', format: 'JSON', url: 'https://ca02.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'Canada', addrType: '域名', format: 'Wire', url: 'https://ca02.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'USA', addrType: '域名', format: 'JSON', url: 'https://us01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'USA', addrType: '域名', format: 'Wire', url: 'https://us01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'USA', addrType: '域名', format: 'JSON', url: 'https://us02.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'USA', addrType: '域名', format: 'Wire', url: 'https://us02.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'Singapore', addrType: '域名', format: 'JSON', url: 'https://sg01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'Singapore', addrType: '域名', format: 'Wire', url: 'https://sg01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'Saudi Arabia', addrType: '域名', format: 'JSON', url: 'https://sa01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'Saudi Arabia', addrType: '域名', format: 'Wire', url: 'https://sa01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'Australia', addrType: '域名', format: 'JSON', url: 'https://au01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'Australia', addrType: '域名', format: 'Wire', url: 'https://au01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'UK', addrType: '域名', format: 'JSON', url: 'https://uk01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'UK', addrType: '域名', format: 'Wire', url: 'https://uk01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'New Zealand', addrType: '域名', format: 'JSON', url: 'https://nz01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'New Zealand', addrType: '域名', format: 'Wire', url: 'https://nz01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'Ireland', addrType: '域名', format: 'JSON', url: 'https://ie01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'Ireland', addrType: '域名', format: 'Wire', url: 'https://ie01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dns4me', type: 'Germany', addrType: '域名', format: 'JSON', url: 'https://de01.dns4me.net/resolve', note: '', region: 'other' },
    { name: 'dns4me', type: 'Germany', addrType: '域名', format: 'Wire', url: 'https://de01.dns4me.net/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Ashburn-US', addrType: '域名', format: 'JSON', url: 'https://abn01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Ashburn-US', addrType: '域名', format: 'Wire', url: 'https://abn01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Athens-GR', addrType: '域名', format: 'JSON', url: 'https://ath01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Athens-GR', addrType: '域名', format: 'Wire', url: 'https://ath01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Atlanta-US', addrType: '域名', format: 'JSON', url: 'https://atl01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Atlanta-US', addrType: '域名', format: 'Wire', url: 'https://atl01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Bogota-CO', addrType: '域名', format: 'JSON', url: 'https://bog01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Bogota-CO', addrType: '域名', format: 'Wire', url: 'https://bog01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Bratislava-SK', addrType: '域名', format: 'JSON', url: 'https://bts01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Bratislava-SK', addrType: '域名', format: 'Wire', url: 'https://bts01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Brisbane-AU', addrType: '域名', format: 'JSON', url: 'https://bne01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Brisbane-AU', addrType: '域名', format: 'Wire', url: 'https://bne01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Brussels-BE', addrType: '域名', format: 'JSON', url: 'https://bru01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Brussels-BE', addrType: '域名', format: 'Wire', url: 'https://bru01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Calgary-CA', addrType: '域名', format: 'JSON', url: 'https://yyc01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Calgary-CA', addrType: '域名', format: 'Wire', url: 'https://yyc01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Chisinau-MD', addrType: '域名', format: 'JSON', url: 'https://kiv01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Chisinau-MD', addrType: '域名', format: 'Wire', url: 'https://kiv01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Copenhagen-NO', addrType: '域名', format: 'JSON', url: 'https://cph01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Copenhagen-NO', addrType: '域名', format: 'Wire', url: 'https://cph01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Coventry-UK', addrType: '域名', format: 'JSON', url: 'https://cvt01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Coventry-UK', addrType: '域名', format: 'Wire', url: 'https://cvt01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Dublin-IE', addrType: '域名', format: 'JSON', url: 'https://dub01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Dublin-IE', addrType: '域名', format: 'Wire', url: 'https://dub01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Frankfurt-DE', addrType: '域名', format: 'JSON', url: 'https://fra01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Frankfurt-DE', addrType: '域名', format: 'Wire', url: 'https://fra01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Frankfurt2-DE', addrType: '域名', format: 'JSON', url: 'https://fra02.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Frankfurt2-DE', addrType: '域名', format: 'Wire', url: 'https://fra02.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Geneva-CH', addrType: '域名', format: 'JSON', url: 'https://gva01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Geneva-CH', addrType: '域名', format: 'Wire', url: 'https://gva01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Hafnarfjordur-IS', addrType: '域名', format: 'JSON', url: 'https://haf01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Hafnarfjordur-IS', addrType: '域名', format: 'Wire', url: 'https://haf01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Halifax-CA', addrType: '域名', format: 'JSON', url: 'https://yhz01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Halifax-CA', addrType: '域名', format: 'Wire', url: 'https://yhz01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Hanoi-VN', addrType: '域名', format: 'JSON', url: 'https://han01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Hanoi-VN', addrType: '域名', format: 'Wire', url: 'https://han01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Istanbul-TR', addrType: '域名', format: 'JSON', url: 'https://ist01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Istanbul-TR', addrType: '域名', format: 'Wire', url: 'https://ist01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'LasVegas-US', addrType: '域名', format: 'JSON', url: 'https://las01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'LasVegas-US', addrType: '域名', format: 'Wire', url: 'https://las01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'London-UK', addrType: '域名', format: 'JSON', url: 'https://lon01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'London-UK', addrType: '域名', format: 'Wire', url: 'https://lon01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Madrid-ES', addrType: '域名', format: 'JSON', url: 'https://mad01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Madrid-ES', addrType: '域名', format: 'Wire', url: 'https://mad01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Milan-IT', addrType: '域名', format: 'JSON', url: 'https://mil01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Milan-IT', addrType: '域名', format: 'Wire', url: 'https://mil01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Mumbai-IN', addrType: '域名', format: 'JSON', url: 'https://bom01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Mumbai-IN', addrType: '域名', format: 'Wire', url: 'https://bom01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Nuremberg-DE', addrType: '域名', format: 'JSON', url: 'https://nue01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Nuremberg-DE', addrType: '域名', format: 'Wire', url: 'https://nue01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Oradea-RO', addrType: '域名', format: 'JSON', url: 'https://omr01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Oradea-RO', addrType: '域名', format: 'Wire', url: 'https://omr01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Paris-FR', addrType: '域名', format: 'JSON', url: 'https://par01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Paris-FR', addrType: '域名', format: 'Wire', url: 'https://par01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Phoenix-US', addrType: '域名', format: 'JSON', url: 'https://phx01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Phoenix-US', addrType: '域名', format: 'Wire', url: 'https://phx01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Portland-US', addrType: '域名', format: 'JSON', url: 'https://pdx01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Portland-US', addrType: '域名', format: 'Wire', url: 'https://pdx01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Redditch-UK', addrType: '域名', format: 'JSON', url: 'https://rdd01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Redditch-UK', addrType: '域名', format: 'Wire', url: 'https://rdd01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'SaltLakeCity-US', addrType: '域名', format: 'JSON', url: 'https://slc01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'SaltLakeCity-US', addrType: '域名', format: 'Wire', url: 'https://slc01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Sandefjord-NO', addrType: '域名', format: 'JSON', url: 'https://trf01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Sandefjord-NO', addrType: '域名', format: 'Wire', url: 'https://trf01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'SantaClara-US', addrType: '域名', format: 'JSON', url: 'https://sjc01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'SantaClara-US', addrType: '域名', format: 'Wire', url: 'https://sjc01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'SaoPaulo-BR', addrType: '域名', format: 'JSON', url: 'https://gru01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'SaoPaulo-BR', addrType: '域名', format: 'Wire', url: 'https://gru01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Seattle-US', addrType: '域名', format: 'JSON', url: 'https://sea01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Seattle-US', addrType: '域名', format: 'Wire', url: 'https://sea01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Singapore-SG', addrType: '域名', format: 'JSON', url: 'https://sin03.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Singapore-SG', addrType: '域名', format: 'Wire', url: 'https://sin03.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Sofia-BG', addrType: '域名', format: 'JSON', url: 'https://sof01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Sofia-BG', addrType: '域名', format: 'Wire', url: 'https://sof01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Spokane-US', addrType: '域名', format: 'JSON', url: 'https://geg01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Spokane-US', addrType: '域名', format: 'Wire', url: 'https://geg01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Stockholm-SE', addrType: '域名', format: 'JSON', url: 'https://sto01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Stockholm-SE', addrType: '域名', format: 'Wire', url: 'https://sto01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Sydney-AU', addrType: '域名', format: 'JSON', url: 'https://syd02.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Sydney-AU', addrType: '域名', format: 'Wire', url: 'https://syd02.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Tallinn-EE', addrType: '域名', format: 'JSON', url: 'https://tll01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Tallinn-EE', addrType: '域名', format: 'Wire', url: 'https://tll01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Tampa-US', addrType: '域名', format: 'JSON', url: 'https://tpa01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Tampa-US', addrType: '域名', format: 'Wire', url: 'https://tpa01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Taos-US', addrType: '域名', format: 'JSON', url: 'https://tsm01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Taos-US', addrType: '域名', format: 'Wire', url: 'https://tsm01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Tbilisi-GE', addrType: '域名', format: 'JSON', url: 'https://tbs01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Tbilisi-GE', addrType: '域名', format: 'Wire', url: 'https://tbs01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Toronto-CA', addrType: '域名', format: 'JSON', url: 'https://yyz01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Toronto-CA', addrType: '域名', format: 'Wire', url: 'https://yyz01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Vancouver-CA', addrType: '域名', format: 'JSON', url: 'https://yvr01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Vancouver-CA', addrType: '域名', format: 'Wire', url: 'https://yvr01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Vienna-AT', addrType: '域名', format: 'JSON', url: 'https://vie01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Vienna-AT', addrType: '域名', format: 'Wire', url: 'https://vie01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Vilnius-LT', addrType: '域名', format: 'JSON', url: 'https://vno01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Vilnius-LT', addrType: '域名', format: 'Wire', url: 'https://vno01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Warsaw-PL', addrType: '域名', format: 'JSON', url: 'https://waw01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Warsaw-PL', addrType: '域名', format: 'Wire', url: 'https://waw01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Zurich-CH', addrType: '域名', format: 'JSON', url: 'https://zrh01.dnscry.pt/resolve', note: '', region: 'other' },
    { name: 'dnscry.pt', type: 'Zurich-CH', addrType: '域名', format: 'Wire', url: 'https://zrh01.dnscry.pt/dns-query', note: '', region: 'other' },
    { name: 'Charter', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh-01.spectrum.com/resolve', note: '', region: 'usa' },
    { name: 'Charter', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh-01.spectrum.com/dns-query', note: '', region: 'usa' },
    { name: 'Charter', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh-02.spectrum.com/resolve', note: '', region: 'usa' },
    { name: 'Charter', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh-02.spectrum.com/dns-query', note: '', region: 'usa' },
    { name: 'Comcast', type: '默认', addrType: '域名', format: 'JSON', url: 'https://doh.xfinity.com/resolve', note: 'DNSSEC', region: 'usa' },
    { name: 'Comcast', type: '默认', addrType: '域名', format: 'Wire', url: 'https://doh.xfinity.com/dns-query', note: '', region: 'usa' },
    { name: 'Canarypwn', type: '默认', addrType: '域名', format: '混合', url: 'https://doh.aaaab3n.moe/dns-query-114514', note: 'Cloudflare上游', region: 'usa' },
    { name: 'ChunghwaMC', type: '广告拦截', addrType: '域名', format: 'JSON', url: 'https://dns.chunghwamc.com/resolve', note: 'Cloudflare上游', region: 'asia' },
    { name: 'ChunghwaMC', type: '广告拦截', addrType: '域名', format: 'Wire', url: 'https://dns.chunghwamc.com/dns-query', note: '', region: 'asia' },
    { name: 'CIRA Canadian Shield', type: '私有', addrType: '域名', format: 'JSON', url: 'https://private.canadianshield.cira.ca/resolve', note: 'DNSSEC', region: 'other' },
    { name: 'CIRA Canadian Shield', type: '私有', addrType: '域名', format: 'Wire', url: 'https://private.canadianshield.cira.ca/dns-query', note: '', region: 'other' },
    { name: 'CIRA Canadian Shield', type: '受保护', addrType: '域名', format: 'JSON', url: 'https://protected.canadianshield.cira.ca/resolve', note: 'DNSSEC', region: 'other' },
    { name: 'CIRA Canadian Shield', type: '受保护', addrType: '域名', format: 'Wire', url: 'https://protected.canadianshield.cira.ca/dns-query', note: '', region: 'other' },
    { name: 'CIRA Canadian Shield', type: '家庭', addrType: '域名', format: 'JSON', url: 'https://family.canadianshield.cira.ca/resolve', note: 'DNSSEC', region: 'other' },
    { name: 'CIRA Canadian Shield', type: '家庭', addrType: '域名', format: 'Wire', url: 'https://family.canadianshield.cira.ca/dns-query', note: '', region: 'other' }
  ],
  'china': [],
  'usa': [],
  'europe': [],
  'asia': [],
  'other': []
};

DNS_SERVERS.all.forEach(server => {
  if (server.region && DNS_SERVERS[server.region]) {
    DNS_SERVERS[server.region].push(server);
  }
});

const DOMESTIC_DEFAULT_DOMAIN = 'example.com';
const FOREIGN_DEFAULT_DOMAIN = 'example.com';

let TEST_TYPE = 'A';
const TIMEOUT = 2000;
const MAX_CONCURRENT = 20;
const BATCH_SIZE = 10;

// DNS type mapping
const TYPE_MAP = {
  'A': 1,
  'AAAA': 28,
  'CNAME': 5,
  'MX': 15,
  'TXT': 16,
  'NS': 2,
  'SOA': 6,
  'PTR': 12,
  'SRV': 33,
  'CAA': 257
};

// Generate DNS query message in wire format
function buildDNSQuery(domain, type) {
  const typeCode = TYPE_MAP[type] || 1;
  const buffer = new Uint8Array(512);
  let offset = 0;

  buffer[offset++] = Math.floor(Math.random() * 256);
  buffer[offset++] = Math.floor(Math.random() * 256);

  buffer[offset++] = 0x01;
  buffer[offset++] = 0x00;

  buffer[offset++] = 0x00;
  buffer[offset++] = 0x01;

  buffer[offset++] = 0x00;
  buffer[offset++] = 0x00;

  buffer[offset++] = 0x00;
  buffer[offset++] = 0x00;

  const labels = domain.split('.');
  for (const label of labels) {
    buffer[offset++] = label.length;
    for (let i = 0; i < label.length; i++) {
      buffer[offset++] = label.charCodeAt(i);
    }
  }
  buffer[offset++] = 0x00;

  buffer[offset++] = (typeCode >> 8) & 0xFF;
  buffer[offset++] = typeCode & 0xFF;

  buffer[offset++] = 0x00;
  buffer[offset++] = 0x01;

  return buffer.slice(0, offset);
}

let currentTab = 'china';
let selectedRegions = new Set(['china']);
let currentDomain = DOMESTIC_DEFAULT_DOMAIN;
let isTesting = false;
let results = {};
let history = [];
let testCount = 1;

async function init() {
  loadHistory();
  renderServerCards();
  updateStats();
  renderHistory();

  // Initialize all sliders
  initRegionSlider();
  initCountSlider();
  initTypeSlider();

  // 添加所有选项卡的点击事件
  ['china', 'usa', 'europe', 'asia', 'other'].forEach(tab => {
    const tabBtn = document.getElementById(`${tab}-tab`);
    if (tabBtn) {
      tabBtn.addEventListener('click', () => switchTab(tab));
    }
  });

  document.getElementById('select-all-btn').addEventListener('click', selectAllRegions);
  document.getElementById('test-btn').addEventListener('click', startTest);
  document.getElementById('clear-selection').addEventListener('click', clearSelection);
  document.getElementById('domain-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateDomain();
      startTest();
    }
  });
  document.getElementById('clear-history').addEventListener('click', clearHistory);

  document.querySelectorAll('.count-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      testCount = parseInt(e.target.dataset.count);
      updateCountSlider(e.target);
    });
  });

  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      TEST_TYPE = e.target.dataset.type;
      updateTypeSlider(e.target);
    });
  });
}

function initCountSlider() {
  const activeBtn = document.querySelector('.count-btn.active');
  if (activeBtn) {
    updateCountSlider(activeBtn);
  }
}

function updateCountSlider(activeBtn) {
  const slider = document.querySelector('.count-slider');
  if (!slider || !activeBtn) return;

  const rect = activeBtn.getBoundingClientRect();
  const parentRect = activeBtn.parentElement.getBoundingClientRect();

  slider.style.left = (rect.left - parentRect.left) + 'px';
  slider.style.width = rect.width + 'px';
  slider.style.height = rect.height + 'px';
}

function initTypeSlider() {
  const activeBtn = document.querySelector('.type-btn.active');
  if (activeBtn) {
    updateTypeSlider(activeBtn);
  }
}

function updateTypeSlider(activeBtn) {
  const slider = document.querySelector('.type-slider');
  if (!slider || !activeBtn) return;

  const rect = activeBtn.getBoundingClientRect();
  const parentRect = activeBtn.parentElement.getBoundingClientRect();

  slider.style.left = (rect.left - parentRect.left) + 'px';
  slider.style.width = rect.width + 'px';
  slider.style.height = rect.height + 'px';
}

function initRegionSlider() {
  const regionBtns = document.querySelectorAll('.region-btn');
  const slider = document.querySelector('.region-slider');
  if (!slider || regionBtns.length === 0) return;

  // Set initial position
  const activeRegion = document.querySelector('.region-btn.active');
  if (activeRegion) {
    updateSliderPosition(slider, activeRegion);
  }

  // Handle resize
  window.addEventListener('resize', () => {
    const activeRegion = document.querySelector('.region-btn.active');
    if (activeRegion) {
      updateSliderPosition(slider, activeRegion);
    }
  });
}

function updateSliderPosition(slider, activeTab) {
  const rect = activeTab.getBoundingClientRect();
  const parentRect = activeTab.parentElement.getBoundingClientRect();
  slider.style.left = (rect.left - parentRect.left) + 'px';
  slider.style.width = rect.width + 'px';
  slider.style.height = rect.height + 'px';
}

function switchTab(tab) {
  if (selectedRegions.has(tab)) {
    selectedRegions.delete(tab);
    if (selectedRegions.size === 0) {
      selectedRegions.add('china');
      currentTab = 'china';
    } else {
      currentTab = Array.from(selectedRegions).join(',');
    }
  } else {
    selectedRegions.add(tab);
    currentTab = Array.from(selectedRegions).join(',');
  }
  
  updateRegionButtonsUI();
  
  document.getElementById('domain-input').value = FOREIGN_DEFAULT_DOMAIN;
  currentDomain = document.getElementById('domain-input').value;
  results = {};
  hideProgress();
  renderServerCards();
  updateStats();
}

function selectAllRegions() {
  selectedRegions.clear();
  selectedRegions.add('china');
  selectedRegions.add('usa');
  selectedRegions.add('europe');
  selectedRegions.add('asia');
  selectedRegions.add('other');
  currentTab = 'china,usa,europe,asia,other';
  
  updateRegionButtonsUI();
  
  document.getElementById('domain-input').value = FOREIGN_DEFAULT_DOMAIN;
  currentDomain = document.getElementById('domain-input').value;
  results = {};
  hideProgress();
  renderServerCards();
  updateStats();
}

function updateRegionButtonsUI() {
  document.querySelectorAll('.region-btn').forEach(btn => {
    const region = btn.dataset.region;
    const isSelected = selectedRegions.has(region);
    btn.classList.toggle('active', isSelected);
  });
  
  const totalCount = selectedRegions.size;
  const allCount = 5;
  const countText = totalCount === allCount ? t('selectAll') : `${t('selectedCount')} ${totalCount} ${t('selectItems')}`;
  document.getElementById('selected-count').textContent = countText;
  
  const clearBtn = document.getElementById('clear-selection');
  if (clearBtn) {
    clearBtn.style.display = totalCount === 0 ? 'none' : 'inline-flex';
  }
}

function clearSelection() {
  selectedRegions.clear();
  selectedRegions.add('china');
  currentTab = 'china';
  updateRegionButtonsUI();
  
  document.getElementById('domain-input').value = FOREIGN_DEFAULT_DOMAIN;
  currentDomain = document.getElementById('domain-input').value;
  results = {};
  hideProgress();
  renderServerCards();
  updateStats();
}

function updateDomain() {
  currentDomain = document.getElementById('domain-input').value.trim();
  if (!currentDomain) {
    currentDomain = currentTab === 'domestic' ? DOMESTIC_DEFAULT_DOMAIN : FOREIGN_DEFAULT_DOMAIN;
    document.getElementById('domain-input').value = currentDomain;
  }
}

function getCurrentServers() {
  if (selectedRegions.size === 0) {
    return DNS_SERVERS['china'] || [];
  }
  
  let servers = [];
  selectedRegions.forEach(region => {
    if (DNS_SERVERS[region]) {
      servers = servers.concat(DNS_SERVERS[region]);
    }
  });
  
  return servers;
}

async function startTest() {
  if (isTesting) return;

  updateDomain();
  isTesting = true;
  const servers = getCurrentServers();
  results = {};

  const btn = document.getElementById('test-btn');
  btn.classList.add('testing');
  btn.innerHTML = `
    <div class="btn-icon" style="width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
    <span>测试中...</span>
  `;

  showProgress();
  renderServerCards();

  const batchResults = await testServersBatch(servers);
  servers.forEach((server, index) => {
    results[index] = batchResults[index];
  });

  // Sort results by latency
  sortResults();

  renderServerCards();
  updateProgress();
  updateStats();
  checkAllComplete();
}

function sortResults() {
  const servers = getCurrentServers();
  const resultArray = [];

  for (let i = 0; i < servers.length; i++) {
    resultArray.push({
      index: i,
      server: servers[i],
      result: results[i]
    });
  }

  resultArray.sort((a, b) => {
    if (!a.result || !a.result.success) return 1;
    if (!b.result || !b.result.success) return -1;

    const aAvg = getAvgLatency(a.result);
    const bAvg = getAvgLatency(b.result);
    return aAvg - bAvg;
  });

  const newResults = {};
  resultArray.forEach((item, newIndex) => {
    newResults[newIndex] = {
      ...item.result,
      originalIndex: item.index
    };
  });

  results = newResults;
}

function getAvgLatency(result) {
  const latencies = [];
  if (result.jsonAvgLatency) {
    latencies.push(result.jsonAvgLatency);
  }
  if (result.wireAvgLatency) {
    latencies.push(result.wireAvgLatency);
  }
  if (latencies.length === 0) {
    return 0;
  }
  return Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length);
}

async function testServersBatch(servers) {
  const batchResults = new Array(servers.length).fill(null);
  const chunks = [];

  for (let i = 0; i < servers.length; i += BATCH_SIZE) {
    chunks.push(servers.slice(i, i + BATCH_SIZE).map((server, idx) => ({
      server,
      index: i + idx
    })));
  }

  for (const chunk of chunks) {
    const promises = chunk.map(({ server, index }) => {
      const card = document.querySelector(`[data-index="${index}"]`);
      if (card) card.classList.add('testing');

      return testServer(server, index).then(result => {
        batchResults[index] = result;
        updateServerCard(index, server, result);
        updateProgress();
        updateStats();
      });
    });

    await Promise.all(promises);
  }

  return batchResults;
}

async function testServer(server, index) {
  // 对这个URL，我们需要探测两种格式
  // 1. JSON格式 - GET请求，无论URL是什么
  // 2. Wire格式 - POST请求，无论URL是什么
  let jsonSupported = false;
  let wireSupported = false;
  let records = null; // 在探测阶段就保存 records
  
  // 探测JSON格式
  try {
    const testResult = await testUrlWithFormat(server.url, 'json');
    jsonSupported = testResult && testResult.success;
    if (jsonSupported && testResult.records) {
      records = testResult.records;
    }
  } catch {
    jsonSupported = false;
  }
  
  // 探测Wire格式
  try {
    const testResult = await testUrlWithFormat(server.url, 'wire');
    wireSupported = testResult && testResult.success;
    if (wireSupported && testResult.records && !records) {
      records = testResult.records;
    }
  } catch {
    wireSupported = false;
  }

  console.log('[testServer] After detection - jsonSupported:', jsonSupported, 'wireSupported:', wireSupported, 'records:', records);

  // 如果两种格式都不支持，直接返回失败结果
  if (!jsonSupported && !wireSupported) {
    console.log('[testServer] No format supported, returning failure');
    return {
      success: false,
      jsonSupported: false,
      wireSupported: false,
      jsonLatencies: [],
      wireLatencies: [],
      jsonAvgLatency: 0,
      wireAvgLatency: 0,
      records: null,
      totalRuns: testCount
    };
  }

  // 对支持的格式进行多次测试
  const jsonLatencies = [];
  const wireLatencies = [];

  for (let run = 0; run < testCount; run++) {
    // 测试 JSON 格式
    if (jsonSupported) {
      const startTime = performance.now();
      const testResult = await testUrlWithFormat(server.url, 'json');
      const endTime = performance.now();
      const latency = Math.round(endTime - startTime);

      if (testResult && testResult.success) {
        jsonLatencies.push(latency);
        // 不再更新 records，保持探测阶段获取的 records
      }
    }

    // 测试 Wire 格式
    if (wireSupported) {
      const startTime = performance.now();
      const testResult = await testUrlWithFormat(server.url, 'wire');
      const endTime = performance.now();
      const latency = Math.round(endTime - startTime);

      if (testResult && testResult.success) {
        wireLatencies.push(latency);
        // 不再更新 records，保持探测阶段获取的 records
      }
    }

    // 更新进度显示
    updateServerCardProgress(index, server, {
      jsonSupported,
      wireSupported,
      jsonLatencies: [...jsonLatencies],
      wireLatencies: [...wireLatencies],
      records
    });
  }

  console.log('[testServer] Loop done, records:', records);

  const jsonAvgLatency = jsonLatencies.length > 0 ? Math.round(jsonLatencies.reduce((a, b) => a + b, 0) / jsonLatencies.length) : 0;
  const wireAvgLatency = wireLatencies.length > 0 ? Math.round(wireLatencies.reduce((a, b) => a + b, 0) / wireLatencies.length) : 0;

  // success 标志：只要有成功的探测就视为成功，即使后面测试失败
  const success = jsonSupported || wireSupported;

  console.log('[testServer] Final - success:', success, 'jsonLatencies:', jsonLatencies.length, 'wireLatencies:', wireLatencies.length, 'records:', records);

  return {
    success,
    jsonSupported,
    wireSupported,
    jsonLatencies,
    wireLatencies,
    jsonAvgLatency,
    wireAvgLatency,
    records,
    totalRuns: testCount
  };
}

async function testUrlWithFormat(url, format) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    let fetchUrl, options;

    function encodeDnsWireToBase64url(domain, type = 1) {
  const typeCode = TYPE_MAP[type] || type;
  
  const header = new Uint8Array(12);
  const headerView = new DataView(header.buffer);
  headerView.setUint16(0, Math.random() * 0xFFFF, false);
  headerView.setUint16(2, 0x0100, false);
  headerView.setUint16(4, 1, false);
  headerView.setUint16(6, 0, false);
  headerView.setUint16(8, 0, false);
  headerView.setUint16(10, 0, false);

  const domainParts = domain.split('.');
  const domainBuffer = [];
  for (const part of domainParts) {
    domainBuffer.push(part.length);
    for (const char of part) {
      domainBuffer.push(char.charCodeAt(0));
    }
  }
  domainBuffer.push(0);

  const queryTail = new Uint8Array(4);
  const tailView = new DataView(queryTail.buffer);
  tailView.setUint16(0, typeCode, false);
  tailView.setUint16(2, 1, false);

  const totalLength = header.length + domainBuffer.length + queryTail.length;
  const dnsMessage = new Uint8Array(totalLength);
  dnsMessage.set(header, 0);
  dnsMessage.set(domainBuffer, header.length);
  dnsMessage.set(queryTail, header.length + domainBuffer.length);

  const base64 = btoa(String.fromCharCode(...dnsMessage));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

if (format === 'wire') {
      // Wire 格式使用 GET（RFC 8484 标准，Base64url 编码）
      const dnsBase64url = encodeDnsWireToBase64url(currentDomain, TEST_TYPE);
      const separator = url.includes('?') ? '&' : '?';
      fetchUrl = `${url}${separator}dns=${dnsBase64url}`;
      options = {
        method: 'GET',
        headers: {
          'Accept': 'application/dns-message'
        },
        signal: controller.signal
      };
    } else {
      // JSON 格式使用 GET
      const timestamp = Date.now();
      const separator = url.includes('?') ? '&' : '?';
      fetchUrl = `${url}${separator}name=${currentDomain}&type=${TEST_TYPE}&t=${timestamp}`;
      options = {
        method: 'GET',
        headers: {
          'Accept': 'application/dns-json'
        },
        signal: controller.signal
      };
    }

    const response = await fetch(fetchUrl, options);
    clearTimeout(timeoutId);

    if (response.ok) {
      let records = null;
      if (format === 'wire') {
        const arrayBuffer = await response.arrayBuffer();
        records = parseWireResponse(new Uint8Array(arrayBuffer));
      } else {
        try {
          const json = await response.json();
          records = parseJSONResponse(json);
        } catch {
          records = null;
        }
      }
      
      return {
        success: records !== null,
        records: records
      };
    } else {
      return {
        success: false,
        error: `HTTP ${response.status}`
      };
    }
  } catch (error) {
    clearTimeout(timeoutId);
    console.info('Request error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

function getLatencyColor(latency) {
  if (latency < 100) return 'fast';
  if (latency < 200) return 'medium';
  return 'slow';
}

function updateServerCardProgress(index, server, data) {
  const card = document.querySelector(`[data-index="${index}"]`);
  if (!card) return;

  const { jsonSupported, wireSupported, jsonLatencies, wireLatencies, records } = data;
  
  card.classList.remove('testing', 'success', 'error');

  const anySuccess = (jsonLatencies && jsonLatencies.length > 0) || (wireLatencies && wireLatencies.length > 0);
  if (anySuccess) {
    card.classList.add('success');
  }

  const statusClass = anySuccess ? 'success' : 'pending';
  const statusText = anySuccess ? '测试中...' : '等待测试';

  let recordsHTML = '';
  if (records && records.length > 0) {
    recordsHTML = renderRecordsDisplay(records);
  }

  let latencyInfo = '';
  if (anySuccess) {
    const latencies = [];
    if (jsonLatencies && jsonLatencies.length > 0) {
      latencies.push(Math.round(jsonLatencies.reduce((a, b) => a + b, 0) / jsonLatencies.length));
    }
    if (wireLatencies && wireLatencies.length > 0) {
      latencies.push(Math.round(wireLatencies.reduce((a, b) => a + b, 0) / wireLatencies.length));
    }
    const latency = latencies.length > 0 ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length) : 0;
    const latencyClass = latency < 100 ? 'fast' : (latency < 200 ? 'medium' : 'slow');
    latencyInfo = `<span class="latency-badge ${latencyClass}">${latency}ms</span>`;
  }

  let formatInfo = '';
  if (jsonSupported || wireSupported) {
    const formats = [];
    if (jsonSupported) formats.push('JSON');
    if (wireSupported) formats.push('Wire');
    formatInfo = formats.join('+');
  }

  card.innerHTML = `
    <div class="server-header">
      <div class="server-info">
        <span class="server-name">${formatServerName(server)}</span>
        ${latencyInfo}
      </div>
      <div class="server-format-info testing">
        <span class="server-loader"></span>
        ${formatInfo || '测试中...'}
      </div>
    </div>
    <div class="server-url">
      <span class="url-text">${server.url}</span>
      <button class="copy-btn" onclick="copyUrlToClipboard('${server.url}', this)" title="复制URL">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/></svg>
      </button>
    </div>
    
    ${(jsonLatencies && jsonLatencies.length > 0) || (wireLatencies && wireLatencies.length > 0) ? `
      <div class="latency-details">
        ${jsonSupported && jsonLatencies && jsonLatencies.length > 0 ? `<div class="lat-row"><span class="lat-left"><span class="lat-label">JSON</span><span class="lat-values">${jsonLatencies.map(lat => `<span class="lat-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}</span></span><span class="lat-avg ${getLatencyColor(jsonLatencies.reduce((a, b) => a + b, 0) / jsonLatencies.length)}">${Math.round(jsonLatencies.reduce((a, b) => a + b, 0) / jsonLatencies.length)}ms</span></div>` : ''}
        ${wireSupported && wireLatencies && wireLatencies.length > 0 ? `<div class="lat-row"><span class="lat-left"><span class="lat-label">Wire</span><span class="lat-values">${wireLatencies.map(lat => `<span class="lat-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}</span></span><span class="lat-avg ${getLatencyColor(wireLatencies.reduce((a, b) => a + b, 0) / wireLatencies.length)}">${Math.round(wireLatencies.reduce((a, b) => a + b, 0) / wireLatencies.length)}ms</span></div>` : ''}
      </div>
    ` : ''}
    
    ${recordsHTML}
  `;
}

function updateServerCard(index, server, result) {
  const card = document.querySelector(`[data-index="${index}"]`);
  if (!card) return;

  card.classList.remove('testing', 'success', 'error', 'fast', 'medium', 'slow');

  if (!result) {
    return;
  }

  card.classList.add(result.success ? 'success' : 'error');

  let formatInfo = '';
  let formatClass = 'error';
  if (result.success) {
    const formats = [];
    if (result.jsonSupported) formats.push('JSON');
    if (result.wireSupported) formats.push('Wire');
    formatInfo = formats.join('+');
    formatClass = formats.length === 2 ? 'gold' : 'gray';
  } else {
    formatInfo = '失败';
  }

  let latencyInfo = '';
  let cardLatencyClass = '';
  if (result.success) {
    const latency = getAvgLatency(result);
    cardLatencyClass = latency < 100 ? 'fast' : (latency < 200 ? 'medium' : 'slow');
    card.classList.add(cardLatencyClass);
    latencyInfo = `<span class="latency-badge ${cardLatencyClass}">${latency}ms</span>`;
  }

  let recordsHTML = '';
  if (result.records && result.records.length > 0) {
    recordsHTML = renderRecordsDisplay(result.records);
  }

  card.innerHTML = `
    <div class="server-header">
      <div class="server-info">
        <span class="server-name">${formatServerName(server)}</span>
        ${latencyInfo}
      </div>
      <div class="server-format-info ${formatClass}">
        ${formatInfo}
      </div>
    </div>
    <div class="server-url">
      <span class="url-text">${server.url}</span>
      <button class="copy-btn" onclick="copyUrlToClipboard('${server.url}', this)" title="复制URL">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/></svg>
      </button>
    </div>
    
    ${(result.jsonLatencies && result.jsonLatencies.length > 0) || (result.wireLatencies && result.wireLatencies.length > 0) ? `
      <div class="latency-details">
        ${result.jsonSupported && result.jsonLatencies && result.jsonLatencies.length > 0 ? `<div class="lat-row"><span class="lat-left"><span class="lat-label">JSON</span><span class="lat-values">${result.jsonLatencies.map(lat => `<span class="lat-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}</span></span><span class="lat-avg ${getLatencyColor(result.jsonAvgLatency)}">${result.jsonAvgLatency}ms</span></div>` : ''}
        ${result.wireSupported && result.wireLatencies && result.wireLatencies.length > 0 ? `<div class="lat-row"><span class="lat-left"><span class="lat-label">Wire</span><span class="lat-values">${result.wireLatencies.map(lat => `<span class="lat-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}</span></span><span class="lat-avg ${getLatencyColor(result.wireAvgLatency)}">${result.wireAvgLatency}ms</span></div>` : ''}
      </div>
    ` : ''}
    ${recordsHTML}
  `;
}

function renderEndpointResults(jsonLatencies, wireLatencies, jsonAvgLatency = 0, wireAvgLatency = 0) {
  let html = '';
  
  if (jsonLatencies && jsonLatencies.length > 0) {
    const avgLat = jsonAvgLatency || Math.round(jsonLatencies.reduce((a, b) => a + b, 0) / jsonLatencies.length);
    html += `
      <div class="format-section">
        <div class="format-title">JSON</div>
        <div class="latency-display">
          ${jsonLatencies.map(lat => `<span class="latency-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}
        </div>
        <div class="latency-average">
          <span class="latency-avg-label">平均:</span>
          <span class="latency-avg-value ${getLatencyColor(avgLat)}">${avgLat}ms</span>
        </div>
      </div>
    `;
  }

  if (wireLatencies && wireLatencies.length > 0) {
    const avgLat = wireAvgLatency || Math.round(wireLatencies.reduce((a, b) => a + b, 0) / wireLatencies.length);
    html += `
      <div class="format-section">
        <div class="format-title">Wire</div>
        <div class="latency-display">
          ${wireLatencies.map(lat => `<span class="latency-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}
        </div>
        <div class="latency-average">
          <span class="latency-avg-label">平均:</span>
          <span class="latency-avg-value ${getLatencyColor(avgLat)}">${avgLat}ms</span>
        </div>
      </div>
    `;
  }
  
  return html;
}

function renderRecordsDisplay(records) {
  const typeLabels = {
    1: 'A',
    28: 'AAAA',
    5: 'CNAME',
    15: 'MX',
    16: 'TXT',
    2: 'NS',
    6: 'SOA',
    12: 'PTR',
    33: 'SRV',
    257: 'CAA'
  };
  
  const grouped = {};
  records.forEach(record => {
    const typeName = typeLabels[record.type] || record.type.toString();
    if (!grouped[typeName]) {
      grouped[typeName] = [];
    }
    grouped[typeName].push(record.data);
  });
  
  let html = '<div class="dns-records-display">';
  
  Object.keys(grouped).forEach(typeName => {
    const values = grouped[typeName];
    html += `<div class="record-type-row">
      <span class="record-type-badge">${typeName}</span>
      <div class="record-values">`;
    
    values.forEach(value => {
      html += `<span class="record-value">${escapeHtml(value)}</span>`;
    });
    
    html += `</div></div>`;
  });
  
  html += '</div>';
  return html;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Parse DNS wire format response
function parseWireResponse(buffer) {
  let offset = 12;
  
  while (buffer[offset] !== 0) {
    const labelLen = buffer[offset];
    offset += labelLen + 1;
  }
  offset += 1;
  
  offset += 4;
  
  const answers = (buffer[6] << 8) | buffer[7];
  if (answers === 0) {
    return null;
  }
  
  const records = [];
  
  for (let i = 0; i < Math.min(answers, 10); i++) {
    offset = skipName(buffer, offset);
    
    const type = (buffer[offset] << 8) | buffer[offset + 1];
    offset += 2;
    
    offset += 2;
    offset += 4;
    
    const rdLength = (buffer[offset] << 8) | buffer[offset + 1];
    offset += 2;
    
    let data = null;
    
    if (type === 1 && rdLength === 4) {
      data = `${buffer[offset]}.${buffer[offset + 1]}.${buffer[offset + 2]}.${buffer[offset + 3]}`;
    } else if (type === 28 && rdLength === 16) {
      const parts = [];
      for (let j = 0; j < 16; j += 2) {
        const hex = ((buffer[offset + j] << 8) | buffer[offset + j + 1]).toString(16);
        parts.push(hex.padStart(4, '0'));
      }
      data = parts.map(p => p.substring(0, 2) + ':' + p.substring(2)).join(':');
    } else if (type === 5) {
      data = parseDomainName(buffer, offset, rdLength);
    } else if (type === 15 && rdLength >= 10) {
      const priority = (buffer[offset] << 8) | buffer[offset + 1];
      data = parseDomainName(buffer, offset + 2, rdLength - 2);
      data = `${priority} ${data}`;
    } else if (type === 16) {
      const txtData = [];
      let txtOffset = 0;
      while (txtOffset < rdLength && txtOffset < 255) {
        const txtLen = buffer[offset + txtOffset];
        txtOffset++;
        if (txtOffset + txtLen > rdLength) break;
        const txt = String.fromCharCode(...buffer.slice(offset + txtOffset, offset + txtOffset + txtLen));
        txtData.push(txt);
        txtOffset += txtLen;
      }
      data = txtData.join(' ');
    }
    
    if (data) {
      records.push({ type, data });
    }
    
    offset += rdLength;
  }
  
  if (records.length === 0) {
    return null;
  }
  
  return records;
}

function skipName(buffer, offset) {
  while (offset < buffer.length) {
    const len = buffer[offset];
    if (len === 0) {
      return offset + 1;
    }
    if ((len & 0xC0) === 0xC0) {
      return offset + 2;
    }
    offset += len + 1;
  }
  return offset;
}

function parseDomainName(buffer, offset, maxLength) {
  const labels = [];
  let pos = offset;
  const end = offset + maxLength;
  
  while (pos < end && pos < buffer.length) {
    const len = buffer[pos];
    
    if ((len & 0xC0) === 0xC0) {
      const newOffset = ((len & 0x3F) << 8) | buffer[pos + 1];
      const result = parseDomainName(buffer, newOffset, 255);
      if (result) labels.push(result);
      return labels.join('.');
    }
    
    if (len === 0) break;
    
    pos++;
    if (pos + len > end || pos + len > buffer.length) break;
    
    const label = String.fromCharCode(...buffer.slice(pos, pos + len));
    labels.push(label);
    pos += len;
  }
  
  return labels.join('.');
}

function parseJSONResponse(json) {
  if (!json.Answer || json.Answer.length === 0) {
    return null;
  }

  const records = json.Answer.map(answer => {
    let data = answer.data;
    
    if (answer.type === 28) {
      const parts = [];
      const ipv6Parts = data.split(':');
      let emptyIndex = -1;
      for (let i = 0; i < ipv6Parts.length; i++) {
        if (ipv6Parts[i] === '') {
          if (emptyIndex === -1) {
            emptyIndex = i;
          }
        }
      }
      
      if (emptyIndex !== -1) {
        const before = ipv6Parts.slice(0, emptyIndex);
        const after = ipv6Parts.slice(emptyIndex + 1);
        const missing = 9 - before.length - after.length;
        const zeros = new Array(missing + 1).join(':0').replace(/^:/, '');
        data = [...before, zeros, ...after].join(':').replace(/::+/, '::');
      }
    }
    
    return {
      type: answer.type,
      data: data
    };
  });

  if (records.length === 0) {
    return null;
  }

  return records;
}

function showProgress() {
  const progressSection = document.getElementById('progress-section');
  progressSection.classList.add('visible');
  updateProgress();
}

function hideProgress() {
  const progressSection = document.getElementById('progress-section');
  progressSection.classList.remove('visible');
}

function updateProgress() {
  const servers = getCurrentServers();
  const completed = Object.keys(results).length;
  const total = servers.length;
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  document.getElementById('progress-count').textContent = `${completed} / ${total}`;
  document.getElementById('progress-fill').style.width = `${percentage}%`;
}

function checkAllComplete() {
  const servers = getCurrentServers();
  const completed = Object.keys(results).length;
  const total = servers.length;

  if (completed === total) {
    isTesting = false;
    const btn = document.getElementById('test-btn');
    btn.classList.remove('testing');
    btn.innerHTML = `
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
        <polygon points="5,3 19,12 5,21" fill="currentColor"/>
      </svg>
      <span>${t('btnTest')}</span>
    `;

    setTimeout(() => {
      hideProgress();
    }, 1000);

    saveToHistory();
  }
}

function renderServerCards() {
  const servers = getCurrentServers();
  const container = document.getElementById('servers-container');
  container.innerHTML = '';

  // Get sorted order (handle results that may have been sorted)
  const serverList = [];
  for (let i = 0; i < servers.length; i++) {
    if (results[i] && results[i].originalIndex !== undefined) {
      serverList.push({
        index: i,
        server: servers[results[i].originalIndex],
        result: results[i]
      });
    } else {
      serverList.push({
        index: i,
        server: servers[i],
        result: results[i]
      });
    }
  }

  serverList.forEach(({ index, server, result }) => {
    const card = document.createElement('div');
    let cardClass = 'server-card';
    if (result) {
      cardClass += result.success ? ' success' : ' error';
      if (result.success) {
        const latency = getAvgLatency(result);
        const latencyClass = latency < 100 ? 'fast' : (latency < 200 ? 'medium' : 'slow');
        cardClass += ' ' + latencyClass;
      }
    }
    card.className = cardClass;
    card.setAttribute('data-index', index);

    let formatInfo = '';
    let formatClass = 'pending';
    if (result) {
      if (result.success) {
        const formats = [];
        if (result.jsonSupported) formats.push(t('formatJSON'));
        if (result.wireSupported) formats.push(t('formatWire'));
        formatInfo = formats.join('+');
        formatClass = formats.length === 2 ? 'gold' : 'gray';
      } else {
        formatInfo = t('failed');
        formatClass = 'error';
      }
    }

    let latencyInfo = '';
    if (result && result.success) {
      const latency = getAvgLatency(result);
      const latencyClass = latency < 100 ? 'fast' : (latency < 200 ? 'medium' : 'slow');
      latencyInfo = `<span class="latency-badge ${latencyClass}">${latency}ms</span>`;
    }

    let recordsHTML = '';
    if (result && result.records && result.records.length > 0) {
      recordsHTML = renderRecordsDisplay(result.records);
    }

    card.innerHTML = `
      <div class="server-header">
        <div class="server-info">
          <span class="server-name">${formatServerName(server)}</span>
          ${latencyInfo}
        </div>
        <div class="server-format-info ${formatClass}">
          ${formatInfo || t('pending')}
        </div>
      </div>
      <div class="server-url">
        <span class="url-text">${server.url}</span>
        <button class="copy-btn" onclick="copyUrlToClipboard('${server.url}', this)" title="${t('copy')}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/></svg>
        </button>
      </div>
      ${(result && result.success && (result.jsonLatencies && result.jsonLatencies.length > 0 || result.wireLatencies && result.wireLatencies.length > 0)) ? `
        <div class="latency-details">
          ${result.jsonSupported && result.jsonLatencies && result.jsonLatencies.length > 0 ? `<div class="lat-row"><span class="lat-left"><span class="lat-label">JSON</span><span class="lat-values">${result.jsonLatencies.map(lat => `<span class="lat-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}</span></span><span class="lat-avg ${getLatencyColor(result.jsonAvgLatency)}">${result.jsonAvgLatency}ms</span></div>` : ''}
          ${result.wireSupported && result.wireLatencies && result.wireLatencies.length > 0 ? `<div class="lat-row"><span class="lat-left"><span class="lat-label">Wire</span><span class="lat-values">${result.wireLatencies.map(lat => `<span class="lat-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}</span></span><span class="lat-avg ${getLatencyColor(result.wireAvgLatency)}">${result.wireAvgLatency}ms</span></div>` : ''}
        </div>
      ` : ''}
      ${recordsHTML}
    `;

    container.appendChild(card);
  });
}

function updateStats() {
  const servers = getCurrentServers();
  const completed = Object.keys(results).filter(key => {
    const result = results[key];
    return result && result.success;
  }).length;

  let totalLatencies = 0;
  let successCount = 0;

  Object.values(results).forEach(result => {
    if (result && result.success) {
      const avgLatency = getAvgLatency(result);
      if (avgLatency) {
        totalLatencies += avgLatency;
        successCount++;
      }
    }
  });

  const avgLatency = successCount > 0 ? Math.round(totalLatencies / successCount) : 0;
  const errorCount = Object.keys(results).filter(key => {
    const result = results[key];
    return result && !result.success;
  }).length;

  document.getElementById('total-count').textContent = servers.length;
  document.getElementById('success-count').textContent = completed;
  document.getElementById('error-count').textContent = errorCount;
  document.getElementById('avg-latency').textContent = avgLatency;
}

function saveToHistory() {
  const servers = getCurrentServers();
  const successCount = Object.values(results).filter(r => r.success).length;
  
  let totalLatency = 0;
  let validCount = 0;
  Object.values(results).forEach(result => {
    if (result && result.success) {
      const avgLatency = getAvgLatency(result);
      if (avgLatency) {
        totalLatency += avgLatency;
        validCount++;
      }
    }
  });
  
  const avgLatency = validCount > 0 ? Math.round(totalLatency / validCount) : 0;

  const record = {
    id: Date.now(),
    domain: currentDomain,
    tab: currentTab,
    timestamp: new Date().toLocaleString(currentLang === 'zh' ? 'zh-CN' : 'en-US'),
    successCount,
    totalCount: servers.length,
    avgLatency
  };

  history.unshift(record);
  if (history.length > 10) {
    history.pop();
  }

  localStorage.setItem('doh-test-history', JSON.stringify(history));
  renderHistory();
}

function loadHistory() {
  const saved = localStorage.getItem('doh-test-history');
  if (saved) {
    history = JSON.parse(saved);
  }
}

function renderHistory() {
  const container = document.getElementById('history-list');
  container.innerHTML = '';

  if (history.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span>${t('noHistory')}</span>
      </div>
    `;
    return;
  }

  const tabNames = {
    'china': t('tabChina'),
    'usa': t('tabUsa'),
    'europe': t('tabEurope'),
    'asia': t('tabAsia'),
    'other': t('tabOther')
  };

  history.forEach((record) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <span class="history-domain">${record.domain}</span>
      <div class="history-meta">
        <span class="history-tab">${tabNames[record.tab] || record.tab}</span>
        <span class="history-time">${record.timestamp}</span>
        <div class="history-stats">
          <span class="history-success">${record.successCount}/${record.totalCount}${t('historySuccess')}</span>
          ${record.avgLatency > 0 ? `<span>${t('historyAvg')}${record.avgLatency}${t('ms')}</span>` : ''}
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function clearHistory() {
  history = [];
  localStorage.removeItem('doh-test-history');
  renderHistory();
}

function toggleCorsNotice() {
  const notice = document.getElementById('cors-notice');
  if (notice) {
    notice.classList.toggle('collapsed');
  }
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
