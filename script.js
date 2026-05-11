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
        },
        {
            version: '1.0.3',
            date: '2026-05-10',
            changes: [
                '全面优化响应式设计',
                '支持平板设备（768px-900px）',
                '优化手机端布局（360px-480px）',
                '改进导航栏横向滚动',
                '优化统计卡片和服务器卡片布局',
                '调整字体大小和间距',
                '优化延迟显示和历史记录布局'
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
        { name: 'AliDNS 阿里 DNS', baseUrl: 'https://dns.alidns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '中国优化' },
        { name: 'AliDNS (223.5.5.5)', baseUrl: 'https://223.5.5.5', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
        { name: 'AliDNS (223.6.6.6)', baseUrl: 'https://223.6.6.6', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
        { name: 'DNSPod 腾讯 DNS', baseUrl: 'https://doh.pub', jsonPath: '/resolve', wirePath: '/dns-query', note: '中国优化' },
        { name: 'DNSPod (1.12.12.12)', baseUrl: 'https://1.12.12.12', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
        { name: 'DNSPod (120.53.53.53)', baseUrl: 'https://120.53.53.53', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
        { name: '360 DNS', baseUrl: 'https://doh.360.cn', jsonPath: '/resolve', wirePath: '/dns-query', note: '中国' }
    ],
    'international': [
        { name: 'Google DNS (域名)', baseUrl: 'https://dns.google', jsonPath: '/resolve', wirePath: '/dns-query', note: 'JSON API (原始)' },
        { name: 'Google DNS (8.8.8.8)', baseUrl: 'https://8.8.8.8', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
        { name: 'Google DNS (8.8.4.4)', baseUrl: 'https://8.8.4.4', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
        { name: 'Cloudflare DNS (域名)', baseUrl: 'https://cloudflare-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '兼容 Google JSON' },
        { name: 'Cloudflare DNS (1.1.1.1)', baseUrl: 'https://1.1.1.1', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
        { name: 'Cloudflare DNS (1.0.0.1)', baseUrl: 'https://1.0.0.1', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
        { name: 'Cloudflare Security', baseUrl: 'https://security.cloudflare-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '恶意软件拦截' },
        { name: 'Cloudflare Family', baseUrl: 'https://family.cloudflare-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '家庭保护' },
        { name: 'Cloudflare Mozilla', baseUrl: 'https://mozilla.cloudflare-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: 'Mozilla合作' },
        { name: 'Cloudflare DNS64', baseUrl: 'https://dns64.cloudflare-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: 'DNS64' },
        { name: 'Quad9 DNS (安全)', baseUrl: 'https://dns.quad9.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '威胁拦截' },
        { name: 'Quad9 DNS (安全 Alt)', baseUrl: 'https://dns9.quad9.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '备用' },
        { name: 'Quad9 DNS (9.9.9.9)', baseUrl: 'https://9.9.9.9', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
        { name: 'Quad9 DNS (无过滤)', baseUrl: 'https://dns10.quad9.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '无过滤' },
        { name: 'Quad9 DNS (安全+ECS)', baseUrl: 'https://dns11.quad9.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '安全+ECS' },
        { name: 'Quad9 DNS (无过滤+ECS)', baseUrl: 'https://dns12.quad9.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '无过滤+ECS' },
        { name: 'AdGuard DNS (默认)', baseUrl: 'https://dns.adguard-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '广告拦截' },
        { name: 'AdGuard DNS (旧域名)', baseUrl: 'https://dns.adguard.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '旧域名' },
        { name: 'AdGuard DNS (家庭)', baseUrl: 'https://family.adguard-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '家庭保护' },
        { name: 'AdGuard DNS (无过滤)', baseUrl: 'https://unfiltered.adguard-dns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '无过滤' },
        { name: 'Mullvad DNS (广告拦截)', baseUrl: 'https://adblock.doh.mullvad.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '广告拦截' },
        { name: 'Mullvad DNS (无过滤)', baseUrl: 'https://base.doh.mullvad.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '无过滤' },
        { name: 'Mullvad DNS (全功能)', baseUrl: 'https://all.doh.mullvad.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '全功能' },
        { name: 'NextDNS', baseUrl: 'https://dns.nextdns.io', jsonPath: '/resolve', wirePath: '/dns-query', note: 'NextDNS' },
        { name: 'Cisco OpenDNS (域名)', baseUrl: 'https://doh.opendns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: 'OpenDNS' },
        { name: 'Cisco OpenDNS (208.67.222.222)', baseUrl: 'https://208.67.222.222', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
        { name: 'Cisco OpenDNS (208.67.220.220)', baseUrl: 'https://208.67.220.220', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4备用' },
        { name: 'Cisco OpenDNS FamilyShield', baseUrl: 'https://doh.familyshield.opendns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '家庭保护' },
        { name: 'Cisco OpenDNS Sandbox', baseUrl: 'https://sandbox.opendns.com', jsonPath: '/resolve', wirePath: '/dns-query', note: 'Sandbox' },
        { name: 'Wikimedia DNS', baseUrl: 'https://wikimedia-dns.org', jsonPath: '/resolve', wirePath: '/dns-query', note: '维基基金会' },
        { name: 'Wikimedia DNS (IP)', baseUrl: 'https://185.71.138.138', jsonPath: '/resolve', wirePath: '/dns-query', note: 'IPv4' },
        { name: 'ControlD p0 (无过滤)', baseUrl: 'https://freedns.controld.com', jsonPath: '/p0', wirePath: null, note: '无过滤' },
        { name: 'ControlD p1 (恶意软件)', baseUrl: 'https://freedns.controld.com', jsonPath: '/p1', wirePath: null, note: '恶意软件拦截' },
        { name: 'ControlD p2 (广告追踪)', baseUrl: 'https://freedns.controld.com', jsonPath: '/p2', wirePath: null, note: '广告追踪拦截' },
        { name: 'ControlD p3 (社交)', baseUrl: 'https://freedns.controld.com', jsonPath: '/p3', wirePath: null, note: '社交网络拦截' },
        { name: 'ControlD (家庭)', baseUrl: 'https://freedns.controld.com', jsonPath: '/family', wirePath: null, note: '家庭版' },
        { name: 'ControlD (无审查)', baseUrl: 'https://freedns.controld.com', jsonPath: '/uncensored', wirePath: null, note: '无审查' }
    ],
    'europe': [
        { name: 'CleanBrowsing (家庭)', baseUrl: 'https://doh.cleanbrowsing.org', jsonPath: null, wirePath: '/doh/family-filter/', note: '家庭过滤' },
        { name: 'CleanBrowsing (成人)', baseUrl: 'https://doh.cleanbrowsing.org', jsonPath: null, wirePath: '/doh/adult-filter/', note: '成人内容过滤' },
        { name: 'CleanBrowsing (安全)', baseUrl: 'https://doh.cleanbrowsing.org', jsonPath: null, wirePath: '/doh/security-filter/', note: '安全过滤' },
        { name: 'DNS.SB', baseUrl: 'https://doh.dns.sb', jsonPath: '/resolve', wirePath: '/dns-query', note: '欧洲' },
        { name: 'CIRA 加拿大盾 (私人)', baseUrl: 'https://private.canadianshield.cira.ca', jsonPath: '/resolve', wirePath: '/dns-query', note: '隐私保护' },
        { name: 'CIRA 加拿大盾 (保护)', baseUrl: 'https://protected.canadianshield.cira.ca', jsonPath: '/resolve', wirePath: '/dns-query', note: '威胁保护' },
        { name: 'CIRA 加拿大盾 (家庭)', baseUrl: 'https://family.canadianshield.cira.ca', jsonPath: '/resolve', wirePath: '/dns-query', note: '家庭保护' },
        { name: 'DNS4EU (防护)', baseUrl: 'https://protective.joindns4.eu', jsonPath: '/resolve', wirePath: '/dns-query', note: '欧盟' },
        { name: 'DNS4EU (无过滤)', baseUrl: 'https://unfiltered.joindns4.eu', jsonPath: '/resolve', wirePath: '/dns-query', note: '无过滤' },
        { name: 'DNS4EU (无广告)', baseUrl: 'https://noads.joindns4.eu', jsonPath: '/resolve', wirePath: '/dns-query', note: '广告拦截' },
        { name: 'DNS4EU (儿童安全)', baseUrl: 'https://child-noads.joindns4.eu', jsonPath: '/resolve', wirePath: '/dns-query', note: '儿童安全' },
        { name: 'PowerDNS', baseUrl: 'https://doh.powerdns.org', jsonPath: '/resolve', wirePath: '/dns-query', note: '欧洲' }
    ],
    'asia': [
        { name: 'IIJ DNS (日本)', baseUrl: 'https://public.dns.iij.jp', jsonPath: '/resolve', wirePath: '/dns-query', note: '日本' },
        { name: 'JPNE DNS (日本)', baseUrl: 'https://doh.jpne.jp', jsonPath: '/resolve', wirePath: '/dns-query', note: '日本' },
        { name: 'Yandex DNS (域名)', baseUrl: 'https://dns.yandex.com', jsonPath: '/resolve', wirePath: '/dns-query', note: '俄罗斯' },
        { name: 'Yandex DNS (基础)', baseUrl: 'https://common.dns.yandex.net', jsonPath: '/resolve', wirePath: '/dns-query', note: '基础版' }
    ]
};


const DOMESTIC_DEFAULT_DOMAIN = 'example.com';
const FOREIGN_DEFAULT_DOMAIN = 'example.com';

let TEST_TYPE = 'A';
const TIMEOUT = 2000;
const MAX_CONCURRENT = 20;
const BATCH_SIZE = 10;

// Global format preference - will be detected at start
let preferredFormat = null; // 'json' or 'wire'

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

// Base64url encode (RFC 4648)
function base64urlEncode(buffer) {
    const binary = String.fromCharCode(...buffer);
    return btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
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

// Detect preferred DNS format (JSON vs Wire) at start of test
async function detectPreferredFormat() {
    const servers = getCurrentServers();
    if (servers.length === 0) return 'json';

    let jsonSuccess = 0;
    let wireSuccess = 0;

    for (const server of servers.slice(0, 3)) { // Test first 3 servers
        if (server.jsonPath) {
            try {
                const result = await testWithFormat(server, 'json');
                if (result.success) jsonSuccess++;
            } catch {}
        }
        if (server.wirePath) {
            try {
                const result = await testWithFormat(server, 'wire');
                if (result.success) wireSuccess++;
            } catch {}
        }
    }

    if (jsonSuccess > wireSuccess) return 'json';
    if (wireSuccess > jsonSuccess) return 'wire';
    // If tie, prefer JSON for broader compatibility
    return 'json';
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

    // First detect preferred format
    preferredFormat = await detectPreferredFormat();
    
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

            return testServerMultiple(server, index).then(result => {
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

async function testServerMultiple(server, index) {
    const latencies = [];
    let records = null;

    for (let run = 0; run < testCount; run++) {
        const startTime = performance.now();
        let result = null;

        // Try preferred format first, fallback to other if available
        if (preferredFormat === 'json' && server.jsonPath) {
            result = await testWithFormat(server, 'json');
        } else if (preferredFormat === 'wire' && server.wirePath) {
            result = await testWithFormat(server, 'wire');
        } else {
            if (server.jsonPath) {
                result = await testWithFormat(server, 'json');
            } else if (server.wirePath) {
                result = await testWithFormat(server, 'wire');
            }
        }

        const endTime = performance.now();
        const latency = Math.round(endTime - startTime);

        if (result && result.success) {
            latencies.push(latency);
            if (!records) records = result.records;
        }

        updateServerCardProgress(index, server, {
            latencies: [...latencies],
            successCount: result && result.success ? run + 1 : run,
            totalRuns: testCount,
            records
        });
    }

    const successCount = latencies.length;
    const avgLatency = successCount > 0
        ? Math.round(latencies.reduce((a, b) => a + b, 0) / successCount)
        : 0;

    return {
        success: successCount > 0,
        latencies,
        avgLatency,
        records,
        successCount,
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

    const currentLatencies = data.latencies;
    const successCount = data.successCount;
    const totalRuns = data.totalRuns;
    const records = data.records;

    const avgLatency = currentLatencies.length > 0
        ? Math.round(currentLatencies.reduce((a, b) => a + b, 0) / currentLatencies.length)
        : 0;

    card.classList.remove('testing', 'success', 'error');

    if (currentLatencies.length > 0) {
        card.classList.add('success');
    }

    const statusClass = currentLatencies.length > 0 ? 'success' : 'pending';
    const statusText = currentLatencies.length > 0 ? `${successCount}/${totalRuns}` : '测试中...';
    
    let recordsHTML = '';
    if (records && records.length > 0) {
        recordsHTML = renderRecordsDisplay(records);
    }

    const latencyColorClass = getLatencyColor(avgLatency);

    // Render each latency point with values
    let latenciesHTML = '';
    if (currentLatencies.length > 0) {
        latenciesHTML = '<div class="latency-display">';
        latenciesHTML += '<div class="latency-points">';
        currentLatencies.forEach((lat, i) => {
            const color = getLatencyColor(lat);
            latenciesHTML += `<span class="latency-point ${color}">${lat}</span>`;
        });
        latenciesHTML += '</div>';
        latenciesHTML += '<div class="latency-average">';
        latenciesHTML += `<span class="latency-avg-label">平均:</span>`;
        latenciesHTML += `<span class="latency-avg-value ${latencyColorClass}">${avgLatency}ms</span>`;
        latenciesHTML += '</div>';
        latenciesHTML += '</div>';
    }

    card.innerHTML = `
        <div class="server-header">
            <span class="server-name">${server.name}</span>
            <div class="server-status ${statusClass}">
                <span class="server-loader"></span>
                <span>${statusText}</span>
            </div>
        </div>
        <div class="server-url">${server.baseUrl}${server.jsonPath || server.wirePath || ''}</div>
        ${latenciesHTML}
        ${recordsHTML}
    `;
}

function updateServerCard(index, server, result) {
    const card = document.querySelector(`[data-index="${index}"]`);
    if (!card) return;

    card.classList.remove('testing', 'success', 'error');

    if (!result || !result.latencies) {
        return;
    }

    card.classList.add(result.success ? 'success' : 'error');

    const statusClass = result.success ? 'success' : 'error';
    const statusText = result.success ? `${result.successCount}/${result.totalRuns}` : '失败';
    
    let recordsHTML = '';
    if (result.records && result.records.length > 0) {
        recordsHTML = renderRecordsDisplay(result.records);
    }

    const latencyColorClass = getLatencyColor(result.avgLatency);

    // Render each latency point with values
    let latenciesHTML = '';
    if (result.success && result.latencies.length > 0) {
        latenciesHTML = '<div class="latency-display">';
        latenciesHTML += '<div class="latency-points">';
        result.latencies.forEach((lat, i) => {
            const color = getLatencyColor(lat);
            latenciesHTML += `<span class="latency-point ${color}">${lat}</span>`;
        });
        latenciesHTML += '</div>';
        latenciesHTML += '<div class="latency-average">';
        latenciesHTML += `<span class="latency-avg-label">平均:</span>`;
        latenciesHTML += `<span class="latency-avg-value ${latencyColorClass}">${result.avgLatency}ms</span>`;
        latenciesHTML += '</div>';
        latenciesHTML += '</div>';
    }

    card.innerHTML = `
        <div class="server-header">
            <span class="server-name">${server.name}</span>
            <div class="server-status ${statusClass}">
                <span class="server-loader"></span>
                <span>${statusText}</span>
            </div>
        </div>
        <div class="server-url">${server.baseUrl}${server.jsonPath || server.wirePath || ''}</div>
        ${latenciesHTML}
        ${recordsHTML}
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
async function testWithFormat(server, format) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    try {
        let fetchUrl, options;
        let endpointPath = (format === 'json' && server.jsonPath) 
            ? server.jsonPath 
            : (server.wirePath || '/dns-query');

        if (format === 'wire' && server.wirePath) {
            // Wire format: POST with binary DNS query
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
        } else if (server.jsonPath) {
            // JSON format: GET with name and type parameters
            const timestamp = Date.now();
            fetchUrl = `${server.baseUrl}${server.jsonPath}?name=${currentDomain}&type=${TEST_TYPE}&t=${timestamp}`;
            options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/dns-json'
                },
                signal: controller.signal
            };
        } else {
            return { success: false, error: 'No supported format' };
        }

        const response = await fetch(fetchUrl, options);
        clearTimeout(timeoutId);

        if (response.ok) {
            let records = null;
            if (format === 'wire' && server.wirePath) {
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
        let latencyClass = '';

        if (result && result.latencies) {
            if (result.success) {
                statusClass = 'success';
                statusText = `${result.successCount}/${result.totalRuns}`;
                latencyClass = getLatencyColor(result.avgLatency);
            } else {
                statusClass = 'error';
                statusText = '失败';
            }
        }
        
        let recordsHTML = '';
        if (result && result.records && result.records.length > 0) {
            recordsHTML = renderRecordsDisplay(result.records);
        }

        // Render latency display if we have results
        let latenciesHTML = '';
        if (result && result.success && result.latencies && result.latencies.length > 0) {
            latenciesHTML = '<div class="latency-display">';
            latenciesHTML += '<div class="latency-points">';
            result.latencies.forEach((lat, i) => {
                const color = getLatencyColor(lat);
                latenciesHTML += `<span class="latency-point ${color}" title="${lat}ms"></span>`;
            });
            latenciesHTML += '</div>';
            latenciesHTML += '<div class="latency-average">';
            latenciesHTML += `<span class="latency-avg-label">平均:</span>`;
            latenciesHTML += `<span class="latency-avg-value ${latencyClass}">${result.avgLatency}ms</span>`;
            latenciesHTML += '</div>';
            latenciesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="server-header">
                <span class="server-name">${server.name}</span>
                <div class="server-status ${statusClass}">
                    <span class="server-loader"></span>
                    <span>${statusText}</span>
                </div>
            </div>
            <div class="server-url">${server.baseUrl}${server.jsonPath || server.wirePath || ''}</div>
            ${latenciesHTML}
            ${recordsHTML}
        `;

        container.appendChild(card);
    });
}

function updateStats() {
    const servers = getCurrentServers();
    const completed = Object.keys(results).filter(key => {
        const result = results[key];
        return result && result.latencies && result.latencies.length > 0;
    }).length;

    let totalLatencies = 0;
    let successCount = 0;

    Object.values(results).forEach(result => {
        if (result && result.success && result.latencies) {
            totalLatencies += result.avgLatency;
            successCount++;
        }
    });

    const avgLatency = successCount > 0 ? Math.round(totalLatencies / successCount) : 0;

    const errorCount = Object.keys(results).filter(key => {
        const result = results[key];
        return result && (!result.latencies || result.latencies.length === 0);
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
        ? Math.round(Object.values(results).filter(r => r.success && r.latency).reduce((sum, r) => sum + r.latency, 0) / successCount)
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
                <span class="history-tab">${record.tab === 'domestic' ? '国内' : '国外'}</span>
                <span class="history-time">${record.timestamp}</span>
                <div class="history-stats">
                    <span class="history-success">${record.successCount}/${record.totalCount}</span>
                    <span style="color: var(--text-muted)">|</span>
                    <span style="color: var(--accent)">${record.avgLatency}ms</span>
                </div>
            </div>
        `;
        item.addEventListener('click', () => {
            switchTab(record.tab);
            document.getElementById('domain-input').value = record.domain;
            currentDomain = record.domain;
            loadHistoryResults(record);
        });
        container.appendChild(item);
    });
}

function loadHistoryResults(record) {
    results = { ...record.results };
    renderServerCards();
    updateStats();
}

function clearHistory() {
    history = [];
    localStorage.removeItem('doh-test-history');
    renderHistory();
}

function toggleCorsNotice() {
    const notice = document.getElementById('cors-notice');
    notice.classList.toggle('collapsed');
}

document.addEventListener('DOMContentLoaded', init);