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
  'domestic': [
    { name: 'AliDNS (域名) - JSON', url: 'https://dns.alidns.com/resolve', format: 'json', note: '中国优化' },
    { name: 'AliDNS (域名) - Wire', url: 'https://dns.alidns.com/dns-query', format: 'wire', note: '中国优化' },
    { name: 'AliDNS (223.5.5.5) - JSON', url: 'https://223.5.5.5/resolve', format: 'json', note: 'IPv4' },
    { name: 'AliDNS (223.5.5.5) - Wire', url: 'https://223.5.5.5/dns-query', format: 'wire', note: 'IPv4' },
    { name: 'AliDNS (223.6.6.6) - JSON', url: 'https://223.6.6.6/resolve', format: 'json', note: 'IPv4备用' },
    { name: 'AliDNS (223.6.6.6) - Wire', url: 'https://223.6.6.6/dns-query', format: 'wire', note: 'IPv4备用' },
    { name: 'DNSPod (域名) - JSON', url: 'https://doh.pub/resolve', format: 'json', note: '中国优化' },
    { name: 'DNSPod (域名) - Wire', url: 'https://doh.pub/dns-query', format: 'wire', note: '中国优化' },
    { name: 'DNSPod (1.12.12.12) - JSON', url: 'https://1.12.12.12/resolve', format: 'json', note: 'IPv4' },
    { name: 'DNSPod (1.12.12.12) - Wire', url: 'https://1.12.12.12/dns-query', format: 'wire', note: 'IPv4' },
    { name: 'DNSPod (120.53.53.53) - JSON', url: 'https://120.53.53.53/resolve', format: 'json', note: 'IPv4备用' },
    { name: 'DNSPod (120.53.53.53) - Wire', url: 'https://120.53.53.53/dns-query', format: 'wire', note: 'IPv4备用' },
    { name: '360 DNS (域名) - JSON', url: 'https://doh.360.cn/resolve', format: 'json', note: '中国' },
    { name: '360 DNS (域名) - Wire', url: 'https://doh.360.cn/dns-query', format: 'wire', note: '中国' }
  ],
  'international': [
    { name: 'Google DNS (域名) - JSON', url: 'https://dns.google/resolve', format: 'json', note: 'JSON API' },
    { name: 'Google DNS (域名) - Wire', url: 'https://dns.google/dns-query', format: 'wire', note: 'Wire Format' },
    { name: 'Google DNS (8.8.8.8) - JSON', url: 'https://8.8.8.8/resolve', format: 'json', note: 'IPv4' },
    { name: 'Google DNS (8.8.8.8) - Wire', url: 'https://8.8.8.8/dns-query', format: 'wire', note: 'IPv4' },
    { name: 'Google DNS (8.8.4.4) - JSON', url: 'https://8.8.4.4/resolve', format: 'json', note: 'IPv4备用' },
    { name: 'Google DNS (8.8.4.4) - Wire', url: 'https://8.8.4.4/dns-query', format: 'wire', note: 'IPv4备用' },
    { name: 'Cloudflare DNS (域名) - JSON', url: 'https://cloudflare-dns.com/resolve', format: 'json', note: '兼容Google JSON' },
    { name: 'Cloudflare DNS (域名) - Wire', url: 'https://cloudflare-dns.com/dns-query', format: 'wire', note: 'Wire Format' },
    { name: 'Cloudflare DNS (1.1.1.1) - JSON', url: 'https://1.1.1.1/resolve', format: 'json', note: 'IPv4' },
    { name: 'Cloudflare DNS (1.1.1.1) - Wire', url: 'https://1.1.1.1/dns-query', format: 'wire', note: 'IPv4' },
    { name: 'Cloudflare DNS (1.0.0.1) - JSON', url: 'https://1.0.0.1/resolve', format: 'json', note: 'IPv4备用' },
    { name: 'Cloudflare DNS (1.0.0.1) - Wire', url: 'https://1.0.0.1/dns-query', format: 'wire', note: 'IPv4备用' },
    { name: 'Quad9 DNS (dns.quad9.net) - JSON', url: 'https://dns.quad9.net/resolve', format: 'json', note: '威胁阻断' },
    { name: 'Quad9 DNS (dns.quad9.net) - Wire', url: 'https://dns.quad9.net/dns-query', format: 'wire', note: '威胁阻断' },
    { name: 'Quad9 DNS (9.9.9.9) - JSON', url: 'https://9.9.9.9/resolve', format: 'json', note: 'IPv4' },
    { name: 'Quad9 DNS (9.9.9.9) - Wire', url: 'https://9.9.9.9/dns-query', format: 'wire', note: 'IPv4' },
    { name: 'AdGuard DNS (dns.adguard-dns.com) - JSON', url: 'https://dns.adguard-dns.com/resolve', format: 'json', note: '广告拦截' },
    { name: 'AdGuard DNS (dns.adguard-dns.com) - Wire', url: 'https://dns.adguard-dns.com/dns-query', format: 'wire', note: '广告拦截' }
  ],
  'europe': [
    { name: 'CleanBrowsing Family - Wire', url: 'https://doh.cleanbrowsing.org/doh/family-filter/', format: 'wire', note: '家庭过滤' },
    { name: 'CleanBrowsing Adult - Wire', url: 'https://doh.cleanbrowsing.org/doh/adult-filter/', format: 'wire', note: '成人内容过滤' },
    { name: 'CleanBrowsing Security - Wire', url: 'https://doh.cleanbrowsing.org/doh/security-filter/', format: 'wire', note: '安全过滤' },
    { name: 'DNS.SB (域名) - JSON', url: 'https://doh.dns.sb/resolve', format: 'json', note: '欧洲' },
    { name: 'DNS.SB (域名) - Wire', url: 'https://doh.dns.sb/dns-query', format: 'wire', note: '欧洲' },
    { name: 'PowerDNS (域名) - JSON', url: 'https://doh.powerdns.org/resolve', format: 'json', note: '欧洲' },
    { name: 'PowerDNS (域名) - Wire', url: 'https://doh.powerdns.org/dns-query', format: 'wire', note: '欧洲' }
  ],
  'asia': [
    { name: 'Yandex DNS (dns.yandex.com) - JSON', url: 'https://dns.yandex.com/resolve', format: 'json', note: '俄罗斯' },
    { name: 'Yandex DNS (dns.yandex.com) - Wire', url: 'https://dns.yandex.com/dns-query', format: 'wire', note: '俄罗斯' },
    { name: 'IIJ DNS (public.dns.iij.jp) - JSON', url: 'https://public.dns.iij.jp/resolve', format: 'json', note: '日本' },
    { name: 'IIJ DNS (public.dns.iij.jp) - Wire', url: 'https://public.dns.iij.jp/dns-query', format: 'wire', note: '日本' }
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

let currentTab = 'domestic';
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

  document.getElementById('domestic-tab').addEventListener('click', () => switchTab('domestic'));
  document.getElementById('international-tab').addEventListener('click', () => switchTab('international'));
  document.getElementById('europe-tab').addEventListener('click', () => switchTab('europe'));
  document.getElementById('asia-tab').addEventListener('click', () => switchTab('asia'));
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
  
  document.getElementById('domain-input').value = tab === 'domestic' ? DOMESTIC_DEFAULT_DOMAIN : FOREIGN_DEFAULT_DOMAIN;
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
    return a.result.avgLatency - b.result.avgLatency;
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
  const latencies = [];
  let records = null;

  for (let run = 0; run < testCount; run++) {
    const startTime = performance.now();
    const testResult = await testWithFormat(server);
    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    if (testResult && testResult.success) {
      latencies.push(latency);
      if (!records) records = testResult.records;
    }

    updateServerCardProgress(index, server, {
      latencies: [...latencies],
      records
    });
  }

  const avgLatency = latencies.length > 0
    ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
    : 0;

  return {
    success: latencies.length > 0,
    latencies,
    avgLatency,
    records,
    totalRuns: testCount
  };
}

function getLatencyColor(latency) {
  if (latency < 100) return 'fast';
  if (latency < 200) return 'medium';
  return 'slow';
}

function updateServerCardProgress(index, server, data) {
  const card = document.querySelector(`[data-index="${index}"]`);
  if (!card) return;

  const { latencies, records } = data;
  
  card.classList.remove('testing', 'success', 'error');

  if (latencies.length > 0) {
    card.classList.add('success');
  }

  const statusClass = latencies.length > 0 ? 'success' : 'pending';
  const statusText = latencies.length > 0 ? '测试中...' : '等待测试';

  let recordsHTML = '';
  if (records && records.length > 0) {
    recordsHTML = renderRecordsDisplay(records);
  }

  const avgLatency = latencies.length > 0 ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length) : 0;

  card.innerHTML = `
    <div class="server-header">
      <span class="server-name">${server.name}</span>
      <div class="server-status ${statusClass}">
        <span class="server-loader"></span>
        <span>${statusText}</span>
      </div>
    </div>
    <div class="server-url">${server.url}</div>
    <div class="server-format">
      <span class="format-badge ${server.format}">${server.format.toUpperCase()}</span>
    </div>
    <div class="latency-display">
      ${latencies.map(lat => `<span class="latency-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}
    </div>
    ${avgLatency > 0 ? `<div class="latency-average">
      <span class="latency-avg-label">平均延迟:</span>
      <span class="latency-avg-value ${getLatencyColor(avgLatency)}">${avgLatency}ms</span>
    </div>` : ''}
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

  const { latencies, avgLatency } = result;

  card.innerHTML = `
    <div class="server-header">
      <span class="server-name">${server.name}</span>
      <div class="server-status ${statusClass}">
        <span class="server-loader"></span>
        <span>${statusText}</span>
      </div>
    </div>
    <div class="server-url">${server.url}</div>
    <div class="server-format">
      <span class="format-badge ${server.format}">${server.format.toUpperCase()}</span>
    </div>
    ${result.success ? `
    <div class="latency-display">
      ${latencies.map(lat => `<span class="latency-point ${getLatencyColor(lat)}">${lat}</span>`).join('')}
    </div>
    <div class="latency-average">
      <span class="latency-avg-label">平均延迟:</span>
      <span class="latency-avg-value ${getLatencyColor(avgLatency)}">${avgLatency}ms</span>
    </div>
    ${recordsHTML}
    ` : ''}
  `;
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

// Test server with specific format
async function testWithFormat(server) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    let fetchUrl, options;

    if (server.format === 'wire') {
      // Wire format: POST with binary DNS query
      const dnsQuery = buildDNSQuery(currentDomain, TEST_TYPE);
      fetchUrl = server.url;
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
      // JSON format: GET with name and type parameters
      const timestamp = Date.now();
      fetchUrl = `${server.url}?name=${currentDomain}&type=${TEST_TYPE}&t=${timestamp}`;
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
      if (server.format === 'wire') {
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
    let errorMessage = error.message;
    if (error.name === 'AbortError') {
      errorMessage = '请求超时';
    }
    return {
      success: false,
      error: errorMessage
    };
  }
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

    let latenciesHTML = '';
    if (result && result.success && result.latencies && result.latencies.length > 0) {
      latenciesHTML = result.latencies.map(lat => `<span class="latency-point ${getLatencyColor(lat)}">${lat}</span>`).join('');
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
      <div class="server-format">
        <span class="format-badge ${server.format}">${server.format.toUpperCase()}</span>
      </div>
      ${result && result.success ? `
      <div class="latency-display">
        ${latenciesHTML}
      </div>
      <div class="latency-average">
        <span class="latency-avg-label">平均延迟:</span>
        <span class="latency-avg-value ${getLatencyColor(result.avgLatency)}">${result.avgLatency}ms</span>
      </div>
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
    if (result && result.success && result.avgLatency) {
      totalLatencies += result.avgLatency;
      successCount++;
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
  const avgLatency = successCount > 0
    ? Math.round(Object.values(results).filter(r => r.success && r.avgLatency).reduce((sum, r) => sum + r.avgLatency, 0) / successCount)
    : 0;

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
