const VERSION = {
  current: '3.0.0',
  lastUpdated: '2026-05-11',
  history: [
    {
      version: '3.0.0',
      date: '2026-05-11',
      changes: [
        '动态格式探测：自动检测 JSON 和 Wire 格式支持',
        '显示探测结果和支持的格式',
        '两种格式都支持时都进行测试',
        '优化了卡片显示和测试流程'
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
    { name: 'AliDNS (域名)', baseUrl: 'https://dns.alidns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '中国优化' },
    { name: 'AliDNS (223.5.5.5)', baseUrl: 'https://223.5.5.5', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
    { name: 'AliDNS (223.6.6.6)', baseUrl: 'https://223.6.6.6', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
    { name: 'DNSPod (域名)', baseUrl: 'https://doh.pub', jsonPath: '/resolve', wirePath: '/dns-query', note: '中国优化' },
    { name: 'DNSPod (1.12.12.12)', baseUrl: 'https://1.12.12.12', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
    { name: 'DNSPod (120.53.53.53)', baseUrl: 'https://120.53.53.53', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
    { name: '360 DNS (域名)', baseUrl: 'https://doh.360.cn', jsonPath: '/resolve', wirePath: '/dns-query', note: '中国' }
  ],
  'international': [
    { name: 'Google DNS (域名)', baseUrl: 'https://dns.google', jsonPath: '/resolve', wirePath: '/dns-query', note: 'JSON API' },
    { name: 'Google DNS (8.8.8.8)', baseUrl: 'https://8.8.8.8', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
    { name: 'Google DNS (8.8.4.4)', baseUrl: 'https://8.8.4.4', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
    { name: 'Cloudflare DNS (域名)', baseUrl: 'https://cloudflare-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '兼容Google JSON' },
    { name: 'Cloudflare DNS (1.1.1.1)', baseUrl: 'https://1.1.1.1', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
    { name: 'Cloudflare DNS (1.0.0.1)', baseUrl: 'https://1.0.0.1', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
    { name: 'Quad9 DNS (dns.quad9.net)', baseUrl: 'https://dns.quad9.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '威胁阻断' },
    { name: 'Quad9 DNS (9.9.9.9)', baseUrl: 'https://9.9.9.9', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
    { name: 'AdGuard DNS (dns.adguard-dns.com)', baseUrl: 'https://dns.adguard-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '广告拦截' }
  ],
  'europe': [
    { name: 'CleanBrowsing Family', baseUrl: 'https://doh.cleanbrowsing.org', jsonPath: null, wirePath: '/doh/family-filter/', note: '家庭过滤' },
    { name: 'CleanBrowsing Adult', baseUrl: 'https://doh.cleanbrowsing.org', jsonPath: null, wirePath: '/doh/adult-filter/', note: '成人内容过滤' },
    { name: 'CleanBrowsing Security', baseUrl: 'https://doh.cleanbrowsing.org', jsonPath: null, wirePath: '/doh/security-filter/', note: '安全过滤' },
    { name: 'DNS.SB (域名)', baseUrl: 'https://doh.dns.sb', jsonPath: '/resolve', wirePath: '/dns-query', note: '欧洲' },
    { name: 'PowerDNS (域名)', baseUrl: 'https://doh.powerdns.org', jsonPath: '/resolve', wirePath: '/dns-query', note: '欧洲' }
  ],
  'asia': [
    { name: 'Yandex DNS (dns.yandex.com)', baseUrl: 'https://dns.yandex.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '俄罗斯' },
    { name: 'IIJ DNS (public.dns.iij.jp)', baseUrl: 'https://public.dns.iij.jp', jsonPath: '/resolve', wirePath: '/dns-query', note: '日本' }
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
    <span>探测格式中...</span>
  `;

  showProgress();
  renderServerCards();

  // 先进行格式探测
  await detectAllFormats(servers);
  
  btn.innerHTML = `
    <div class="btn-icon" style="width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
    <span>测试中...</span>
  `;

  // 然后进行完整测试
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

async function detectAllFormats(servers) {
  for (let i = 0; i < servers.length; i++) {
    const server = servers[i];
    const detectionResult = await detectServerFormats(server);
    if (!results[i]) {
      results[i] = {};
    }
    results[i].detection = detectionResult;
    updateServerCardDetection(i, server, detectionResult);
  }
}

async function detectServerFormats(server) {
  const detection = {
    jsonAvailable: false,
    wireAvailable: false,
    jsonLatency: null,
    wireLatency: null
  };

  // 探测 JSON 格式
  if (server.jsonPath) {
    try {
      const startTime = performance.now();
      const result = await testFormatOnce(server, 'json');
      const endTime = performance.now();
      if (result.success) {
        detection.jsonAvailable = true;
        detection.jsonLatency = Math.round(endTime - startTime);
      }
    } catch (e) {
      // JSON 探测失败
    }
  }

  // 探测 Wire 格式
  if (server.wirePath) {
    try {
      const startTime = performance.now();
      const result = await testFormatOnce(server, 'wire');
      const endTime = performance.now();
      if (result.success) {
        detection.wireAvailable = true;
        detection.wireLatency = Math.round(endTime - startTime);
      }
    } catch (e) {
      // Wire 探测失败
    }
  }

  return detection;
}

async function testFormatOnce(server, format) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    let fetchUrl, options;

    if (format === 'wire') {
      const dnsQuery = buildDNSQuery(currentDomain, TEST_TYPE);
      fetchUrl = server.baseUrl + server.wirePath;
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
      const timestamp = Date.now();
      fetchUrl = `${server.baseUrl}${server.jsonPath}?name=${currentDomain}&type=${TEST_TYPE}&t=${timestamp}`;
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
      return { success: false };
    }
  } catch (error) {
    clearTimeout(timeoutId);
    return { success: false };
  }
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
    
    const aLatency = getBestLatency(a.result);
    const bLatency = getBestLatency(b.result);
    
    return aLatency - bLatency;
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

function getBestLatency(result) {
  let minLatency = Infinity;
  
  if (result.json && result.json.avgLatency && result.json.avgLatency < minLatency) {
    minLatency = result.json.avgLatency;
  }
  
  if (result.wire && result.wire.avgLatency && result.wire.avgLatency < minLatency) {
    minLatency = result.wire.avgLatency;
  }
  
  return minLatency === Infinity ? 0 : minLatency;
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
  const result = {
    success: false,
    detection: results[index]?.detection || { jsonAvailable: false, wireAvailable: false },
    json: null,
    wire: null
  };

  // 测试 JSON 格式
  if (result.detection.jsonAvailable) {
    result.json = await testFormatMultiple(server, 'json');
  }

  // 测试 Wire 格式
  if (result.detection.wireAvailable) {
    result.wire = await testFormatMultiple(server, 'wire');
  }

  result.success = (result.json?.success || false) || (result.wire?.success || false);
  
  return result;
}

async function testFormatMultiple(server, format) {
  const latencies = [];
  let records = null;

  for (let run = 0; run < testCount; run++) {
    const startTime = performance.now();
    const testResult = await testFormatOnce(server, format);
    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    if (testResult && testResult.success) {
      latencies.push(latency);
      if (!records) records = testResult.records;
    }
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

function updateServerCardDetection(index, server, detection) {
  const card = document.querySelector(`[data-index="${index}"]`);
  if (!card) return;

  let statusClass = 'pending';
  let statusText = '探测中...';

  card.innerHTML = renderCardContent(server, {
    detection,
    isDetecting: true
  });
}

function updateServerCardProgress(index, server, data) {
  // 不再需要这个函数
}

function updateServerCard(index, server, result) {
  const card = document.querySelector(`[data-index="${index}"]`);
  if (!card) return;

  card.classList.remove('testing', 'success', 'error');
  card.classList.add(result.success ? 'success' : 'error');

  card.innerHTML = renderCardContent(server, result);
}

function renderCardContent(server, result) {
  const detection = result.detection || { jsonAvailable: false, wireAvailable: false };
  const isDetecting = result.isDetecting || false;
  
  let statusClass = isDetecting ? 'pending' : (result.success ? 'success' : 'error');
  let statusText = isDetecting ? '探测中...' : (result.success ? '成功' : '失败');

  let detectionHtml = '<div class="detection-result">';
  
  if (server.jsonPath) {
    detectionHtml += `<span class="detection-badge ${detection.jsonAvailable ? 'available' : 'unavailable'}">`;
    detectionHtml += 'JSON ';
    detectionHtml += detection.jsonAvailable ? '✓' : '✗';
    if (detection.jsonLatency) {
      detectionHtml += ` (${detection.jsonLatency}ms)`;
    }
    detectionHtml += '</span>';
  }
  
  if (server.wirePath) {
    detectionHtml += `<span class="detection-badge ${detection.wireAvailable ? 'available' : 'unavailable'}">`;
    detectionHtml += 'Wire ';
    detectionHtml += detection.wireAvailable ? '✓' : '✗';
    if (detection.wireLatency) {
      detectionHtml += ` (${detection.wireLatency}ms)`;
    }
    detectionHtml += '</span>';
  }
  
  detectionHtml += '</div>';

  let testResultsHtml = '';
  
  if (!isDetecting) {
    // JSON 测试结果
    if (result.json && result.json.success) {
      testResultsHtml += renderFormatTestResult('JSON', result.json);
    }
    
    // Wire 测试结果
    if (result.wire && result.wire.success) {
      testResultsHtml += renderFormatTestResult('Wire', result.wire);
    }
  }

  // 显示服务器 URL
  let urlHtml = '';
  if (server.jsonPath) {
    urlHtml += `<div class="server-url-part">${server.baseUrl}${server.jsonPath}</div>`;
  }
  if (server.wirePath) {
    urlHtml += `<div class="server-url-part">${server.baseUrl}${server.wirePath}</div>`;
  }

  return `
    <div class="server-header">
      <span class="server-name">${server.name}</span>
      <div class="server-status ${statusClass}">
        <span class="server-loader"></span>
        <span>${statusText}</span>
      </div>
    </div>
    <div class="server-urls">
      ${urlHtml}
    </div>
    ${detectionHtml}
    ${testResultsHtml}
  `;
}

function renderFormatTestResult(formatName, formatResult) {
  const color = getLatencyColor(formatResult.avgLatency);
  
  let html = `<div class="format-test-result">`;
  html += `<div class="format-title">${formatName} 测试</div>`;
  
  html += `<div class="latency-display">`;
  formatResult.latencies.forEach(lat => {
    html += `<span class="latency-point ${getLatencyColor(lat)}">${lat}</span>`;
  });
  html += `</div>`;
  
  html += `<div class="latency-average">`;
  html += `<span class="latency-avg-label">${formatName} 平均延迟:</span>`;
  html += `<span class="latency-avg-value ${color}">${formatResult.avgLatency}ms</span>`;
  html += `</div>`;
  
  if (formatResult.records && formatResult.records.length > 0) {
    html += renderRecordsDisplay(formatResult.records);
  }
  
  html += `</div>`;
  
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
    html += `<div class="record-type-row">`;
    html += `<span class="record-type-badge">${typeName}</span>`;
    html += `<div class="record-values">`;
    
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

// Test server with specific format (保留但更新)
async function testWithFormat(server, format) {
  return testFormatOnce(server, format);
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
  const completed = Object.keys(results).filter(key => {
    const result = results[key];
    return result && (result.success !== undefined);
  }).length;
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
    card.className = `server-card ${result && result.success ? 'success' : (result && !result.isDetecting ? 'error' : '')}`;
    card.setAttribute('data-index', index);

    card.innerHTML = renderCardContent(server, result || { detection: { jsonAvailable: false, wireAvailable: false }, isDetecting: false });

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
      const bestLatency = getBestLatency(result);
      if (bestLatency > 0) {
        totalLatencies += bestLatency;
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
  let latencyCount = 0;
  Object.values(results).forEach(result => {
    if (result && result.success) {
      const bestLatency = getBestLatency(result);
      if (bestLatency > 0) {
        totalLatency += bestLatency;
        latencyCount++;
      }
    }
  });
  
  const avgLatency = latencyCount > 0 ? Math.round(totalLatency / latencyCount) : 0;

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
