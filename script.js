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

const DNS_SERVERS = {
  'all': [
    // Google (10条)
    { name: 'Google - 默认 - 域名 - JSON', url: 'https://dns.google/resolve', note: 'JSON API（原始）' },
    { name: 'Google - 默认 - 域名 - Wire', url: 'https://dns.google/dns-query', note: 'RFC 8484' },
    { name: 'Google - 默认 - IP (8.8.8.8) - JSON', url: 'https://8.8.8.8/resolve', note: '' },
    { name: 'Google - 默认 - IP (8.8.8.8) - Wire', url: 'https://8.8.8.8/dns-query', note: '' },
    { name: 'Google - 默认 - IP (8.8.4.4) - JSON', url: 'https://8.8.4.4/resolve', note: '' },
    { name: 'Google - 默认 - IP (8.8.4.4) - Wire', url: 'https://8.8.4.4/dns-query', note: '' },
    { name: 'Google - 默认 - IPv6 - JSON', url: 'https://2001:4860:4860::8888/resolve', note: 'IPv6' },
    { name: 'Google - 默认 - IPv6 - Wire', url: 'https://2001:4860:4860::8888/dns-query', note: 'IPv6' },
    { name: 'Google - 默认 - IPv6 - JSON', url: 'https://2001:4860:4860::8844/resolve', note: 'IPv6' },
    { name: 'Google - 默认 - IPv6 - Wire', url: 'https://2001:4860:4860::8844/dns-query', note: 'IPv6' },
    
    // Cloudflare (26条)
    { name: 'Cloudflare - 默认 - 域名 - JSON', url: 'https://cloudflare-dns.com/resolve', note: '兼容 Google JSON' },
    { name: 'Cloudflare - 默认 - 域名 - Wire', url: 'https://cloudflare-dns.com/dns-query', note: '' },
    { name: 'Cloudflare - 默认 - IP (1.1.1.1) - JSON', url: 'https://1.1.1.1/resolve', note: '' },
    { name: 'Cloudflare - 默认 - IP (1.1.1.1) - Wire', url: 'https://1.1.1.1/dns-query', note: '' },
    { name: 'Cloudflare - 默认 - IP (1.0.0.1) - JSON', url: 'https://1.0.0.1/resolve', note: '' },
    { name: 'Cloudflare - 默认 - IP (1.0.0.1) - Wire', url: 'https://1.0.0.1/dns-query', note: '' },
    { name: 'Cloudflare - 默认 - IPv6 - JSON', url: 'https://2606:4700:4700::1111/resolve', note: 'IPv6' },
    { name: 'Cloudflare - 默认 - IPv6 - Wire', url: 'https://2606:4700:4700::1111/dns-query', note: 'IPv6' },
    { name: 'Cloudflare - 默认 - IPv6 - JSON', url: 'https://2606:4700:4700::1001/resolve', note: 'IPv6' },
    { name: 'Cloudflare - 默认 - IPv6 - Wire', url: 'https://2606:4700:4700::1001/dns-query', note: 'IPv6' },
    { name: 'Cloudflare - 恶意软件 - 域名 - JSON', url: 'https://security.cloudflare-dns.com/resolve', note: '' },
    { name: 'Cloudflare - 恶意软件 - 域名 - Wire', url: 'https://security.cloudflare-dns.com/dns-query', note: '' },
    { name: 'Cloudflare - 恶意软件 - IP - JSON', url: 'https://1.1.1.2/resolve', note: '' },
    { name: 'Cloudflare - 恶意软件 - IP - Wire', url: 'https://1.1.1.2/dns-query', note: '' },
    { name: 'Cloudflare - 恶意软件 - IP - JSON', url: 'https://1.0.0.2/resolve', note: '' },
    { name: 'Cloudflare - 恶意软件 - IP - Wire', url: 'https://1.0.0.2/dns-query', note: '' },
    { name: 'Cloudflare - 家庭 - 域名 - JSON', url: 'https://family.cloudflare-dns.com/resolve', note: '' },
    { name: 'Cloudflare - 家庭 - 域名 - Wire', url: 'https://family.cloudflare-dns.com/dns-query', note: '' },
    { name: 'Cloudflare - 家庭 - IP - JSON', url: 'https://1.1.1.3/resolve', note: '' },
    { name: 'Cloudflare - 家庭 - IP - Wire', url: 'https://1.1.1.3/dns-query', note: '' },
    { name: 'Cloudflare - 家庭 - IP - JSON', url: 'https://1.0.0.3/resolve', note: '' },
    { name: 'Cloudflare - 家庭 - IP - Wire', url: 'https://1.0.0.3/dns-query', note: '' },
    { name: 'Cloudflare - Mozilla - 域名 - JSON', url: 'https://mozilla.cloudflare-dns.com/resolve', note: '' },
    { name: 'Cloudflare - Mozilla - 域名 - Wire', url: 'https://mozilla.cloudflare-dns.com/dns-query', note: '' },
    { name: 'Cloudflare - DNS64 - 域名 - JSON', url: 'https://dns64.cloudflare-dns.com/resolve', note: '' },
    { name: 'Cloudflare - DNS64 - 域名 - Wire', url: 'https://dns64.cloudflare-dns.com/dns-query', note: '' },
    
    // Quad9 (16条)
    { name: 'Quad9 - 安全 - 域名 - JSON', url: 'https://dns.quad9.net/resolve', note: 'DNSSEC；无日志' },
    { name: 'Quad9 - 安全 - 域名 - Wire', url: 'https://dns.quad9.net/dns-query', note: '' },
    { name: 'Quad9 - 安全 - 域名 - JSON', url: 'https://dns9.quad9.net/resolve', note: '' },
    { name: 'Quad9 - 安全 - 域名 - Wire', url: 'https://dns9.quad9.net/dns-query', note: '' },
    { name: 'Quad9 - 安全 - IP - JSON', url: 'https://9.9.9.9/resolve', note: '' },
    { name: 'Quad9 - 安全 - IP - Wire', url: 'https://9.9.9.9/dns-query', note: '' },
    { name: 'Quad9 - 安全 - IP - JSON', url: 'https://149.112.112.112/resolve', note: '' },
    { name: 'Quad9 - 安全 - IP - Wire', url: 'https://149.112.112.112/dns-query', note: '' },
    { name: 'Quad9 - 安全 - IPv6 - JSON', url: 'https://2620:fe::fe/resolve', note: 'IPv6' },
    { name: 'Quad9 - 安全 - IPv6 - Wire', url: 'https://2620:fe::fe/dns-query', note: 'IPv6' },
    { name: 'Quad9 - 无阻断 - 域名 - JSON', url: 'https://dns10.quad9.net/resolve', note: '' },
    { name: 'Quad9 - 无阻断 - 域名 - Wire', url: 'https://dns10.quad9.net/dns-query', note: '' },
    { name: 'Quad9 - 无阻断 - IP - JSON', url: 'https://9.9.9.10/resolve', note: '' },
    { name: 'Quad9 - 无阻断 - IP - Wire', url: 'https://9.9.9.10/dns-query', note: '' },
    { name: 'Quad9 - 无阻断 - IP - JSON', url: 'https://149.112.112.10/resolve', note: '' },
    { name: 'Quad9 - 无阻断 - IP - Wire', url: 'https://149.112.112.10/dns-query', note: '' },
    
    // AdGuard (10条)
    { name: 'AdGuard - 默认 - 域名 - JSON', url: 'https://dns.adguard-dns.com/resolve', note: 'DNSSEC；DoQ' },
    { name: 'AdGuard - 默认 - 域名 - Wire', url: 'https://dns.adguard-dns.com/dns-query', note: '' },
    { name: 'AdGuard - 默认 - 旧域名 - JSON', url: 'https://dns.adguard.com/resolve', note: '旧域名' },
    { name: 'AdGuard - 默认 - 旧域名 - Wire', url: 'https://dns.adguard.com/dns-query', note: '旧域名' },
    { name: 'AdGuard - 家庭 - 域名 - JSON', url: 'https://family.adguard-dns.com/resolve', note: '' },
    { name: 'AdGuard - 家庭 - 域名 - Wire', url: 'https://family.adguard-dns.com/dns-query', note: '' },
    { name: 'AdGuard - 家庭 - 旧域名 - JSON', url: 'https://dns-family.adguard.com/resolve', note: '旧域名' },
    { name: 'AdGuard - 家庭 - 旧域名 - Wire', url: 'https://dns-family.adguard.com/dns-query', note: '旧域名' },
    { name: 'AdGuard - 无过滤 - 域名 - JSON', url: 'https://unfiltered.adguard-dns.com/resolve', note: '' },
    { name: 'AdGuard - 无过滤 - 域名 - Wire', url: 'https://unfiltered.adguard-dns.com/dns-query', note: '' },
    
    // Mullvad (6条)
    { name: 'Mullvad - 广告拦截 - 域名 - JSON', url: 'https://adblock.doh.mullvad.net/resolve', note: '' },
    { name: 'Mullvad - 广告拦截 - 域名 - Wire', url: 'https://adblock.doh.mullvad.net/dns-query', note: '' },
    { name: 'Mullvad - 无过滤 - 域名 - JSON', url: 'https://base.doh.mullvad.net/resolve', note: '' },
    { name: 'Mullvad - 无过滤 - 域名 - Wire', url: 'https://base.doh.mullvad.net/dns-query', note: '' },
    { name: 'Mullvad - 全功能 - 域名 - JSON', url: 'https://all.doh.mullvad.net/resolve', note: '' },
    { name: 'Mullvad - 全功能 - 域名 - Wire', url: 'https://all.doh.mullvad.net/dns-query', note: '' },
    
    // Control D (6条)
    { name: 'Control D - 无过滤 - 域名', url: 'https://freedns.controld.com/p0', note: '' },
    { name: 'Control D - 恶意软件拦截 - 域名', url: 'https://freedns.controld.com/p1', note: '' },
    { name: 'Control D - 广告拦截 - 域名', url: 'https://freedns.controld.com/p2', note: '' },
    { name: 'Control D - 社交拦截 - 域名', url: 'https://freedns.controld.com/p3', note: '' },
    { name: 'Control D - 家庭 - 域名', url: 'https://freedns.controld.com/family', note: '' },
    { name: 'Control D - 无审查 - 域名', url: 'https://freedns.controld.com/uncensored', note: '' },
    
    // NextDNS (2条)
    { name: 'NextDNS - 默认 - 域名 - JSON', url: 'https://dns.nextdns.io/resolve', note: '' },
    { name: 'NextDNS - 默认 - 域名 - Wire', url: 'https://dns.nextdns.io/dns-query', note: '' },
    
    // Cisco OpenDNS (16条)
    { name: 'OpenDNS - 默认 - 域名 - JSON', url: 'https://doh.opendns.com/resolve', note: '' },
    { name: 'OpenDNS - 默认 - 域名 - Wire', url: 'https://doh.opendns.com/dns-query', note: '' },
    { name: 'OpenDNS - 默认 - IP - JSON', url: 'https://208.67.222.222/resolve', note: '' },
    { name: 'OpenDNS - 默认 - IP - Wire', url: 'https://208.67.222.222/dns-query', note: '' },
    { name: 'OpenDNS - 默认 - IP - JSON', url: 'https://208.67.220.220/resolve', note: '' },
    { name: 'OpenDNS - 默认 - IP - Wire', url: 'https://208.67.220.220/dns-query', note: '' },
    { name: 'OpenDNS - 家庭 - 域名 - JSON', url: 'https://doh.familyshield.opendns.com/resolve', note: '' },
    { name: 'OpenDNS - 家庭 - 域名 - Wire', url: 'https://doh.familyshield.opendns.com/dns-query', note: '' },
    { name: 'OpenDNS - 家庭 - IP - JSON', url: 'https://208.67.222.123/resolve', note: '' },
    { name: 'OpenDNS - 家庭 - IP - Wire', url: 'https://208.67.222.123/dns-query', note: '' },
    { name: 'OpenDNS - 家庭 - IP - JSON', url: 'https://208.67.220.123/resolve', note: '' },
    { name: 'OpenDNS - 家庭 - IP - Wire', url: 'https://208.67.220.123/dns-query', note: '' },
    { name: 'OpenDNS - Sandbox - 域名 - JSON', url: 'https://sandbox.opendns.com/resolve', note: '无过滤' },
    { name: 'OpenDNS - Sandbox - 域名 - Wire', url: 'https://sandbox.opendns.com/dns-query', note: '无过滤' },
    { name: 'OpenDNS - Sandbox - IP - JSON', url: 'https://208.67.222.2/resolve', note: '' },
    { name: 'OpenDNS - Sandbox - IP - Wire', url: 'https://208.67.222.2/dns-query', note: '' },
    
    // Cisco Umbrella (2条)
    { name: 'Cisco Umbrella - 企业 - 域名 - JSON', url: 'https://doh.umbrella.com/resolve', note: '' },
    { name: 'Cisco Umbrella - 企业 - 域名 - Wire', url: 'https://doh.umbrella.com/dns-query', note: '' },
    
    // CleanBrowsing (3条)
    { name: 'CleanBrowsing - 家庭 - 域名', url: 'https://doh.cleanbrowsing.org/doh/family-filter', note: '' },
    { name: 'CleanBrowsing - 成人 - 域名', url: 'https://doh.cleanbrowsing.org/doh/adult-filter', note: '' },
    { name: 'CleanBrowsing - 安全 - 域名', url: 'https://doh.cleanbrowsing.org/doh/security-filter', note: '' },
    
    // AliDNS (10条)
    { name: 'AliDNS - 默认 - 域名 - JSON', url: 'https://dns.alidns.com/resolve', note: '中国优化' },
    { name: 'AliDNS - 默认 - 域名 - Wire', url: 'https://dns.alidns.com/dns-query', note: '' },
    { name: 'AliDNS - 默认 - IP - JSON', url: 'https://223.5.5.5/resolve', note: '' },
    { name: 'AliDNS - 默认 - IP - Wire', url: 'https://223.5.5.5/dns-query', note: '' },
    { name: 'AliDNS - 默认 - IP - JSON', url: 'https://223.6.6.6/resolve', note: '' },
    { name: 'AliDNS - 默认 - IP - Wire', url: 'https://223.6.6.6/dns-query', note: '' },
    { name: 'AliDNS - 默认 - IPv6 - JSON', url: 'https://2400:3200::1/resolve', note: 'IPv6' },
    { name: 'AliDNS - 默认 - IPv6 - Wire', url: 'https://2400:3200::1/dns-query', note: 'IPv6' },
    { name: 'AliDNS - 默认 - IPv6 - JSON', url: 'https://2400:3200:baba::1/resolve', note: 'IPv6' },
    { name: 'AliDNS - 默认 - IPv6 - Wire', url: 'https://2400:3200:baba::1/dns-query', note: 'IPv6' },
    
    // DNSPod (8条)
    { name: 'DNSPod - 默认 - 域名 - JSON', url: 'https://doh.pub/resolve', note: '中国优化' },
    { name: 'DNSPod - 默认 - 域名 - Wire', url: 'https://doh.pub/dns-query', note: '' },
    { name: 'DNSPod - 默认 - IP - JSON', url: 'https://1.12.12.12/resolve', note: '' },
    { name: 'DNSPod - 默认 - IP - Wire', url: 'https://1.12.12.12/dns-query', note: '' },
    { name: 'DNSPod - 默认 - IP - JSON', url: 'https://120.53.53.53/resolve', note: '' },
    { name: 'DNSPod - 默认 - IP - Wire', url: 'https://120.53.53.53/dns-query', note: '' },
    { name: 'DNSPod - 默认 - IPv6 - JSON', url: 'https://2402:4e00::/resolve', note: 'IPv6' },
    { name: 'DNSPod - 默认 - IPv6 - Wire', url: 'https://2402:4e00::/dns-query', note: 'IPv6' },
    
    // 360 DNS (2条)
    { name: '360 DNS - 默认 - 域名 - JSON', url: 'https://doh.360.cn/resolve', note: '' },
    { name: '360 DNS - 默认 - 域名 - Wire', url: 'https://doh.360.cn/dns-query', note: '' },
    
    // 其他 (6条)
    { name: 'DNS.SB - 默认 - 域名 - JSON', url: 'https://doh.dns.sb/resolve', note: '' },
    { name: 'DNS.SB - 默认 - 域名 - Wire', url: 'https://doh.dns.sb/dns-query', note: '' },
    { name: 'Wikimedia DNS - 域名 - JSON', url: 'https://wikimedia-dns.org/resolve', note: '维基基金会' },
    { name: 'Wikimedia DNS - 域名 - Wire', url: 'https://wikimedia-dns.org/dns-query', note: '' },
    { name: 'Yandex DNS - 域名 - JSON', url: 'https://dns.yandex.com/resolve', note: '' },
    { name: 'Yandex DNS - 域名 - Wire', url: 'https://dns.yandex.com/dns-query', note: '' },
    { name: 'IIJ (日本) - 域名 - JSON', url: 'https://public.dns.iij.jp/resolve', note: '' },
    { name: 'IIJ (日本) - 域名 - Wire', url: 'https://public.dns.iij.jp/dns-query', note: '' },
    { name: 'JPNE (日本) - 域名 - JSON', url: 'https://doh.jpne.jp/resolve', note: '' },
    { name: 'JPNE (日本) - 域名 - Wire', url: 'https://doh.jpne.jp/dns-query', note: '' },
    { name: 'PowerDNS - 域名 - JSON', url: 'https://doh.powerdns.org/resolve', note: '' },
    { name: 'PowerDNS - 域名 - Wire', url: 'https://doh.powerdns.org/dns-query', note: '' }
  ]
};

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

let currentTab = 'all';
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
  initTabSlider();
  initCountSlider();
  initTypeSlider();

  document.getElementById('all-tab').addEventListener('click', () => switchTab('all'));
  document.getElementById('test-btn').addEventListener('click', startTest);
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

function initTabSlider() {
  const tabs = document.querySelectorAll('.tab');
  const slider = document.querySelector('.tab-slider');
  if (!slider || tabs.length === 0) return;

  // Set initial position
  const activeTab = document.querySelector('.tab.active');
  if (activeTab) {
    updateSliderPosition(slider, activeTab);
  }

  // Handle resize
  window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
      updateSliderPosition(slider, activeTab);
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
  currentTab = tab;
  
  // Update active class
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById(`${tab}-tab`);
  if (activeTab) {
    activeTab.classList.add('active');
    
    // Update slider position
    const slider = document.querySelector('.tab-slider');
    if (slider) {
      updateSliderPosition(slider, activeTab);
    }
  }
  
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
  return DNS_SERVERS[currentTab] || DNS_SERVERS['domestic'];
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

    const aMin = getMinLatency(a.result);
    const bMin = getMinLatency(b.result);
    return aMin - bMin;
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

function getMinLatency(result) {
  let min = Infinity;
  if (result.jsonAvgLatency && result.jsonAvgLatency < min) {
    min = result.jsonAvgLatency;
  }
  if (result.wireAvgLatency && result.wireAvgLatency < min) {
    min = result.wireAvgLatency;
  }
  return min === Infinity ? 0 : min;
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
  
  // 探测JSON格式
  try {
    const testResult = await testUrlWithFormat(server.url, 'json');
    jsonSupported = testResult && testResult.success;
  } catch {
    jsonSupported = false;
  }
  
  // 探测Wire格式
  try {
    const testResult = await testUrlWithFormat(server.url, 'wire');
    wireSupported = testResult && testResult.success;
  } catch {
    wireSupported = false;
  }

  // 对支持的格式进行多次测试
  const jsonLatencies = [];
  const wireLatencies = [];
  let records = null;

  for (let run = 0; run < testCount; run++) {
    // 测试 JSON 格式
    if (jsonSupported) {
      const startTime = performance.now();
      const testResult = await testUrlWithFormat(server.url, 'json');
      const endTime = performance.now();
      const latency = Math.round(endTime - startTime);

      if (testResult && testResult.success) {
        jsonLatencies.push(latency);
        if (!records) records = testResult.records;
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
        if (!records) records = testResult.records;
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

  const jsonAvgLatency = jsonLatencies.length > 0 ? Math.round(jsonLatencies.reduce((a, b) => a + b, 0) / jsonLatencies.length) : 0;
  const wireAvgLatency = wireLatencies.length > 0 ? Math.round(wireLatencies.reduce((a, b) => a + b, 0) / wireLatencies.length) : 0;

  return {
    success: jsonSupported || wireSupported,
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

    if (format === 'wire') {
      // Wire 格式始终使用 POST
      const dnsQuery = buildDNSQuery(currentDomain, TEST_TYPE);
      fetchUrl = url;
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/dns-message',
          'Accept': 'application/dns-message'
        },
        body: dnsQuery,
        signal: controller.signal
      };
    } else {
      // JSON 格式使用 GET
      const timestamp = Date.now();
      // 检查URL是否已经包含查询参数
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

  const { endpoints, endpointResults, records } = data;
  
  card.classList.remove('testing', 'success', 'error');

  const anySuccess = Object.values(endpointResults).some(er => er.latencies && er.latencies.length > 0);
  if (anySuccess) {
    card.classList.add('success');
  }

  const statusClass = anySuccess ? 'success' : 'pending';
  const statusText = anySuccess ? '测试中...' : '等待测试';

  let recordsHTML = '';
  if (records && records.length > 0) {
    recordsHTML = renderRecordsDisplay(records);
  }

  card.innerHTML = `
    <div class="server-header">
      <span class="server-name">${server.name}</span>
      <div class="server-status ${statusClass}">
        <span class="server-loader"></span>
        <span>${statusText}</span>
      </div>
    </div>
    <div class="server-url">${server.url}</div>
    <div class="server-formats">
      ${endpoints.map(ep => 
        `<span class="format-badge supported">${ep.name}</span>`
      ).join('')}
    </div>
    
    ${renderEndpointResults(endpointResults)}
    
    ${recordsHTML}
  `;
}

function updateServerCard(index, server, result) {
  const card = document.querySelector(`[data-index="${index}"]`);
  if (!card) return;

  card.classList.remove('testing', 'success', 'error');

  if (!result) {
    return;
  }

  card.classList.add(result.success ? 'success' : 'error');

  const statusClass = result.success ? 'success' : 'error';
  const statusText = result.success ? '成功' : '失败';

  let recordsHTML = '';
  if (result.records && result.records.length > 0) {
    recordsHTML = renderRecordsDisplay(result.records);
  }

  card.innerHTML = `
    <div class="server-header">
      <span class="server-name">${server.name}</span>
      <div class="server-status ${statusClass}">
        <span class="server-loader"></span>
        <span>${statusText}</span>
      </div>
    </div>
    <div class="server-url">${server.url}</div>
    <div class="server-formats">
      ${result.endpoints.map(ep => 
        `<span class="format-badge supported">${ep.name}</span>`
      ).join('')}
    </div>
    
    ${result.success ? `
      ${renderEndpointResults(result.endpointResults)}
      
      ${recordsHTML}
    ` : ''}
  `;
}

function renderEndpointResults(endpointResults) {
  let html = '';
  
  for (const key in endpointResults) {
    const result = endpointResults[key];
    if (result.latencies && result.latencies.length > 0) {
      html += `
        <div class="format-section">
          <div class="format-title">${result.endpoint.name}</div>
          <div class="latency-display">
            ${result.latencies.map(lat => `<span class="latency-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}
          </div>
          <div class="latency-average">
            <span class="latency-avg-label">平均:</span>
            <span class="latency-avg-value ${getLatencyColor(result.avgLatency)}">${result.avgLatency}ms</span>
          </div>
        </div>
      `;
    }
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
    offset += 2;
    
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
      <span>开始测试</span>
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
    card.className = `server-card ${result ? (result.success ? 'success' : 'error') : ''}`;
    card.setAttribute('data-index', index);

    let statusClass = 'pending';
    let statusText = '等待测试';

    if (result) {
      if (result.success) {
        statusClass = 'success';
        statusText = '成功';
      } else {
        statusClass = 'error';
        statusText = '失败';
      }
    }

    let recordsHTML = '';
    if (result && result.records && result.records.length > 0) {
      recordsHTML = renderRecordsDisplay(result.records);
    }

    card.innerHTML = `
      <div class="server-header">
        <span class="server-name">${server.name}</span>
        <div class="server-status ${statusClass}">
          <span class="server-loader"></span>
          <span>${statusText}</span>
        </div>
      </div>
      <div class="server-url">${server.url}</div>
      <div class="server-formats">
        ${result ? (result.endpoints || []).map(ep => 
          `<span class="format-badge supported">${ep.name}</span>`
        ).join('') : ''}
      </div>
      
      ${result && result.success ? `
        ${renderEndpointResults(result.endpointResults)}
        
        ${recordsHTML}
      ` : ''}
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
      const minLatency = getMinLatency(result.endpointResults);
      if (minLatency && minLatency !== Infinity) {
        totalLatencies += minLatency;
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
      const minLatency = getMinLatency(result.endpointResults);
      if (minLatency) {
        totalLatency += minLatency;
        validCount++;
      }
    }
  });
  
  const avgLatency = validCount > 0 ? Math.round(totalLatency / validCount) : 0;

  const record = {
    id: Date.now(),
    domain: currentDomain,
    tab: currentTab,
    timestamp: new Date().toLocaleString('zh-CN'),
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
        <span>暂无测试记录</span>
      </div>
    `;
    return;
  }

  history.forEach((record) => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <span class="history-domain">${record.domain}</span>
      <div class="history-meta">
        <span class="history-tab">${record.tab === 'domestic' ? '国内' : record.tab === 'international' ? '国际' : record.tab === 'europe' ? '欧洲' : '亚洲'}</span>
        <span class="history-time">${record.timestamp}</span>
        <div class="history-stats">
          <span class="history-success">${record.successCount}/${record.totalCount}成功</span>
          ${record.avgLatency > 0 ? `<span>平均${record.avgLatency}ms</span>` : ''}
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

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
