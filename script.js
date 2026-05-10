const VERSION = {
    current: '1.0.3',
    lastUpdated: '2026-05-10',
    history: [
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
        },
        {
            version: '1.0.2',
            date: '2026-05-10',
            changes: [
                '移除 Google Fonts 依赖',
                '使用系统字体替代，提升加载速度',
                '优化国内用户访问体验'
            ]
        },
        {
            version: '1.0.1',
            date: '2026-05-10',
            changes: [
                '性能优化：并发请求控制',
                '性能优化：DOM 更新节流',
                '性能优化：预缓存格式探测',
                '性能优化：DOM 渲染优化',
                '性能优化：字符串拼接优化'
            ]
        },
        {
            version: '1.0.0',
            date: '2026-05-10',
            changes: [
                '初始版本发布',
                '实现 DoH 测速功能',
                '支持 JSON 和 Wire 两种 DNS 请求格式',
                '添加国内/国际/欧洲/亚洲 DNS 服务器列表',
                '实现延迟排序和颜色编码显示',
                '青柠绿主题配色'
            ]
        }
    ],
    getFullInfo() {
        const latest = this.history[0];
        return `当前版本: ${latest.version} (${latest.date})\n\n更新内容:\n${latest.changes.map(c => '• ' + c).join('\n')}`;
    }
};

const DOMESTIC_SERVERS = [
    { name: '360 Secure DNS', url: 'https://doh.360.cn/dns-query' },
    { name: '阿里 DNS', url: 'https://dns.alidns.com/dns-query' },
    { name: '腾讯 DNS', url: 'https://dns.pub/dns-query' },
    { name: '腾讯 DNS (国密版)', url: 'https://sm2.doh.pub/dns-query' },
    { name: '18Bit DNS', url: 'https://doh.18bit.cn/dns-query' },
    { name: 'OneDNS 纯净版', url: 'https://doh-pure.onedns.net/dns-query' },
    { name: 'OneDNS 拦截版', url: 'https://doh.onedns.net/dns-query' },
    { name: '易安云 DNS', url: 'https://dns.yuguan.xyz/dns-query' }
];

const INTERNATIONAL_SERVERS = [
    { name: 'AdGuard DNS 默认', url: 'https://dns.adguard-dns.com/dns-query' },
    { name: 'AdGuard DNS 家庭保护', url: 'https://family.adguard-dns.com/dns-query' },
    { name: 'AdGuard DNS 无过滤', url: 'https://unfiltered.adguard-dns.com/dns-query' },
    { name: 'Cloudflare DNS', url: 'https://dns.cloudflare.com/dns-query' },
    { name: 'Cloudflare Security', url: 'https://security.cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Family', url: 'https://family.cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Chrome', url: 'https://chrome.cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Firefox', url: 'https://mozilla.cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Brave', url: 'https://brave.cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Tor', url: 'https://tor.cloudflare-dns.com/dns-query' },
    { name: 'Google DNS', url: 'https://dns.google/dns-query' },
    { name: 'Quad9 DNS', url: 'https://dns.quad9.net/dns-query' },
    { name: 'Quad9 DNS 无过滤', url: 'https://dns10.quad9.net/dns-query' },
    { name: 'Quad9 DNS ECS', url: 'https://dns11.quad9.net/dns-query' },
    { name: 'Cisco OpenDNS', url: 'https://doh.opendns.com/dns-query' },
    { name: 'OpenDNS FamilyShield', url: 'https://doh.familyshield.opendns.com/dns-query' },
    { name: 'OpenDNS Sandbox', url: 'https://doh.sandbox.opendns.com/dns-query' }
];

const EUROPE_SERVERS = [
    { name: 'CleanBrowsing 家庭版', url: 'https://doh.cleanbrowsing.org/doh/family-filter/' },
    { name: 'CleanBrowsing 成人版', url: 'https://doh.cleanbrowsing.org/doh/adult-filter/' },
    { name: 'CleanBrowsing 安全版', url: 'https://doh.cleanbrowsing.org/doh/security-filter/' },
    { name: 'DNS4EU 防护版', url: 'https://protective.joindns4.eu/dns-query' },
    { name: 'DNS4EU 儿童保护版', url: 'https://child.joindns4.eu/dns-query' },
    { name: 'DNS4EU 无广告版', url: 'https://noads.joindns4.eu/dns-query' },
    { name: 'DNS4EU 儿童无广告版', url: 'https://child-noads.joindns4.eu/dns-query' },
    { name: 'DNS4EU 无过滤版', url: 'https://unfiltered.joindns4.eu/dns-query' },
    { name: 'HaGeZi 法尔肯施泰因', url: 'https://root.hagezi.org/dns-query' },
    { name: 'HaGeZi 纽伦堡', url: 'https://wurzn.hagezi.org/dns-query' },
    { name: 'HaGeZi 赫尔辛基', url: 'https://juuri.hagezi.org/dns-query' },
    { name: 'Mullvad DNS 无过滤', url: 'https://dns.mullvad.net/dns-query' },
    { name: 'Mullvad DNS 广告拦截', url: 'https://adblock.dns.mullvad.net/dns-query' },
    { name: 'Mullvad DNS 基础版', url: 'https://base.dns.mullvad.net/dns-query' },
    { name: 'Mullvad DNS 扩展版', url: 'https://extended.dns.mullvad.net/dns-query' },
    { name: 'Mullvad DNS 家庭版', url: 'https://family.dns.mullvad.net/dns-query' },
    { name: 'Mullvad DNS 全拦截', url: 'https://all.dns.mullvad.net/dns-query' },
    { name: 'CZ.NIC ODVR', url: 'https://odvr.nic.cz/doh' },
    { name: 'Digitale Gesellschaft', url: 'https://dns.digitale-gesellschaft.ch/dns-query' },
    { name: 'SWITCH DNS', url: 'https://dns.switch.ch/dns-query' },
    { name: 'CERT-EE', url: 'https://dns.cert.ee/dns-query' },
    { name: 'CIRA 加拿大盾私人', url: 'https://private.canadianshield.cira.ca/dns-query' },
    { name: 'CIRA 加拿大盾保护', url: 'https://protected.canadianshield.cira.ca/dns-query' },
    { name: 'CIRA 加拿大盾家庭', url: 'https://family.canadianshield.cira.ca/dns-query' }
];

const ASIA_SERVERS = [
    { name: 'Caliph DNS', url: 'https://dns.caliph.dev/dns-query' },
    { name: 'BebasDNS 默认', url: 'https://dns.bebasid.com/dns-query' },
    { name: 'BebasDNS 无过滤', url: 'https://dns.bebasid.com/unfiltered' },
    { name: 'BebasDNS 安全版', url: 'https://antivirus.bebasid.com/dns-query' },
    { name: 'BebasDNS 家庭版', url: 'https://internetsehat.bebasid.com/dns-query' },
    { name: 'BebasDNS 家庭广告拦截', url: 'https://internetsehat.bebasid.com/adblock' },
    { name: 'DNS.SB', url: 'https://doh.dns.sb/dns-query' },
    { name: 'IIJ.JP DNS', url: 'https://public.dns.iij.jp/dns-query' },
    { name: 'Yandex DNS 基础版', url: 'https://common.dot.dns.yandex.net/dns-query' },
    { name: 'Yandex DNS 安全版', url: 'https://safe.dot.dns.yandex.net/dns-query' },
    { name: 'Yandex DNS 家庭版', url: 'https://family.dot.dns.yandex.net/dns-query' }
];

const OTHER_SERVERS = [
    { name: 'NextDNS', url: 'https://dns.nextdns.io' },
    { name: 'NextDNS Anycast', url: 'https://anycast.dns.nextdns.io' },
    { name: 'OpenBLD ADA', url: 'https://ada.openbld.net/dns-query' },
    { name: 'OpenBLD RIC', url: 'https://ric.openbld.net/dns-query' },
    { name: 'ControlD p0', url: 'https://freedns.controld.com/p0' },
    { name: 'ControlD p1', url: 'https://freedns.controld.com/p1' },
    { name: 'ControlD p2', url: 'https://freedns.controld.com/p2' },
    { name: 'ControlD p3', url: 'https://freedns.controld.com/p3' },
    { name: 'RethinkDNS', url: 'https://basic.rethinkdns.com/' },
    { name: 'Wikimedia DNS', url: 'https://wikimedia-dns.org/dns-query' },
    { name: 'v.recipes DNS', url: 'https://v.recipes/dns-query' },
    { name: 'Rabbit DNS 无过滤', url: 'https://dns.rabbitdns.org/dns-query' },
    { name: 'Rabbit DNS 安全', url: 'https://security.rabbitdns.org/dns-query' },
    { name: 'Rabbit DNS 家庭', url: 'https://family.rabbitdns.org/dns-query' },
    { name: 'LibreDNS', url: 'https://doh.libredns.gr/dns-query' },
    { name: 'LibreDNS 广告拦截', url: 'https://doh.libredns.gr/ads' },
    { name: 'JupitrDNS', url: 'https://dns.jupitrdns.com/dns-query' },
    { name: 'Surfshark DNS', url: 'https://dns.surfsharkdns.com/dns-query' },
    { name: 'DeCloudUs DNS', url: 'https://dns.decloudus.com/dns-query' },
    { name: 'Hurricane Electric', url: 'https://ordns.he.net/dns-query' }
];


const DOMESTIC_DEFAULT_DOMAIN = 'example.com';
const FOREIGN_DEFAULT_DOMAIN = 'example.com';

let TEST_TYPE = 'A';
const TIMEOUT = 10000;
const MAX_CONCURRENT = 20;
const BATCH_SIZE = 10;

// Cache for detected formats { serverUrl: 'json' | 'wire' | null }
const formatCache = {};

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

    // Transaction ID (2 bytes) - random
    buffer[offset++] = Math.floor(Math.random() * 256);
    buffer[offset++] = Math.floor(Math.random() * 256);

    // Flags (2 bytes) - standard query
    buffer[offset++] = 0x01; // QR=0 (query), OPCODE=0 (standard), AA=0, TC=0, RD=1
    buffer[offset++] = 0x00; // RA=0, Z=0, RCODE=0

    // Questions count (2 bytes)
    buffer[offset++] = 0x00;
    buffer[offset++] = 0x01;

    // Answers count (2 bytes)
    buffer[offset++] = 0x00;
    buffer[offset++] = 0x00;

    // Authority count (2 bytes)
    buffer[offset++] = 0x00;
    buffer[offset++] = 0x00;

    // Additional count (2 bytes)
    buffer[offset++] = 0x00;
    buffer[offset++] = 0x00;

    // QNAME - domain name in labels
    const labels = domain.split('.');
    for (const label of labels) {
        buffer[offset++] = label.length;
        for (let i = 0; i < label.length; i++) {
            buffer[offset++] = label.charCodeAt(i);
        }
    }
    buffer[offset++] = 0x00; // End of QNAME

    // QTYPE (2 bytes)
    buffer[offset++] = (typeCode >> 8) & 0xFF;
    buffer[offset++] = typeCode & 0xFF;

    // QCLASS (2 bytes) - IN
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
let testCount = 3;

function init() {
    loadHistory();
    renderServerCards();
    updateStats();
    renderHistory();

    document.getElementById('domestic-tab').addEventListener('click', () => switchTab('domestic'));
    document.getElementById('international-tab').addEventListener('click', () => switchTab('international'));
    document.getElementById('europe-tab').addEventListener('click', () => switchTab('europe'));
    document.getElementById('asia-tab').addEventListener('click', () => switchTab('asia'));
    document.getElementById('other-tab').addEventListener('click', () => switchTab('other'));
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
        });
    });

    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            TEST_TYPE = e.target.dataset.type;
        });
    });
}

function switchTab(tab) {
    currentTab = tab;
    document.getElementById('domestic-tab').classList.toggle('active', tab === 'domestic');
    document.getElementById('international-tab').classList.toggle('active', tab === 'international');
    document.getElementById('europe-tab').classList.toggle('active', tab === 'europe');
    document.getElementById('asia-tab').classList.toggle('active', tab === 'asia');
    document.getElementById('other-tab').classList.toggle('active', tab === 'other');
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
    switch (currentTab) {
        case 'domestic':
            return DOMESTIC_SERVERS;
        case 'international':
            return INTERNATIONAL_SERVERS;
        case 'europe':
            return EUROPE_SERVERS;
        case 'asia':
            return ASIA_SERVERS;
        case 'other':
            return OTHER_SERVERS;
        default:
            return DOMESTIC_SERVERS;
    }
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

    renderServerCards();
    updateProgress();
    updateStats();
    checkAllComplete();
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
    let finalResult = null;
    let ip = null;

    for (let run = 0; run < testCount; run++) {
        const startTime = performance.now();
        let result = null;

        const cachedFormat = formatCache[server.url];
        if (cachedFormat) {
            result = await testWithFormat(server, cachedFormat);
        } else {
            const [jsonResult, wireResult] = await Promise.all([
                testWithFormat(server, 'json'),
                testWithFormat(server, 'wire').catch(() => ({ success: false }))
            ]);

            if (jsonResult.success) {
                formatCache[server.url] = 'json';
                result = jsonResult;
            } else if (wireResult.success) {
                formatCache[server.url] = 'wire';
                result = wireResult;
            } else {
                result = jsonResult;
            }
        }

        const endTime = performance.now();
        const latency = Math.round(endTime - startTime);

        if (result.success) {
            latencies.push(latency);
            if (!ip) ip = result.ip;
            if (!records) records = result.records;
        }

        updateServerCardProgress(index, server, {
            latencies: [...latencies],
            successCount: result.success ? run + 1 : run,
            totalRuns: testCount,
            ip,
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
        ip,
        successCount,
        totalRuns: testCount
    };
}

function updateServerCardProgress(index, server, data) {
    const card = document.querySelector(`[data-index="${index}"]`);
    if (!card) return;

    const currentLatencies = data.latencies;
    const successCount = data.successCount;
    const totalRuns = data.totalRuns;
    const ip = data.ip;
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

    const latencyColorClass = avgLatency < 100 ? 'fast' : avgLatency < 300 ? 'medium' : 'slow';

    card.innerHTML = `
        <div class="server-header">
            <span class="server-name">${server.name}</span>
            <div class="server-status ${statusClass}">
                <span class="server-loader"></span>
                <span>${statusText}</span>
            </div>
        </div>
        <div class="server-url">${server.url}</div>
        <div class="server-metrics">
            <div class="metric">
                <span class="metric-label">延迟</span>
                <span class="metric-value ${latencyColorClass}">${avgLatency}ms</span>
            </div>
            <div class="metric">
                <span class="metric-label">IP</span>
                <span class="metric-value">${ip || '-'}</span>
            </div>
        </div>
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

    const latencyColorClass = result.avgLatency < 100 ? 'fast' : result.avgLatency < 300 ? 'medium' : 'slow';

    card.innerHTML = `
        <div class="server-header">
            <span class="server-name">${server.name}</span>
            <div class="server-status ${statusClass}">
                <span class="server-loader"></span>
                <span>${statusText}</span>
            </div>
        </div>
        <div class="server-url">${server.url}</div>
        <div class="server-metrics">
            <div class="metric">
                <span class="metric-label">延迟</span>
                <span class="metric-value ${latencyColorClass}">${result.avgLatency}ms</span>
            </div>
            <div class="metric">
                <span class="metric-label">IP</span>
                <span class="metric-value">${result.ip || '-'}</span>
            </div>
        </div>
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

async function testServer(server, index) {
    const startTime = performance.now();
    let finalResult = null;

    const cachedFormat = formatCache[server.url];
    if (cachedFormat) {
        finalResult = await testWithFormat(server, cachedFormat);
    } else {
        const [jsonResult, wireResult] = await Promise.all([
            testWithFormat(server, 'json'),
            testWithFormat(server, 'wire').catch(() => ({ success: false }))
        ]);

        if (jsonResult.success) {
            formatCache[server.url] = 'json';
            finalResult = jsonResult;
        } else if (wireResult.success) {
            formatCache[server.url] = 'wire';
            finalResult = wireResult;
        } else {
            finalResult = jsonResult;
        }
    }

    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    return {
        ...finalResult,
        latency: finalResult.success ? latency : null
    };
}

// Test server with specific format
async function testWithFormat(server, format) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    try {
        let fetchUrl, options;

        if (format === 'wire') {
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
            if (format === 'wire') {
                const arrayBuffer = await response.arrayBuffer();
                records = parseWireResponse(new Uint8Array(arrayBuffer));
            } else {
                const json = await response.json();
                records = parseJSONResponse(json);
            }
            
            let primaryResult = null;
            let ip = null;
            
            if (records) {
                if (Array.isArray(records)) {
                    if (records.length > 0) {
                        primaryResult = records[0].data;
                        ip = records.find(r => r.type === 1)?.data || null;
                    }
                } else {
                    primaryResult = records;
                    ip = records;
                }
            }
            
            return {
                success: records !== null,
                records: records,
                primaryResult,
                ip
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

    servers.forEach((server, index) => {
        const result = results[index];
        const card = document.createElement('div');
        card.className = `server-card ${result ? (result.success ? 'success' : 'error') : ''}`;
        card.setAttribute('data-index', index);

        let statusClass = 'pending';
        let statusText = '等待测试';
        let avgLatencyText = '-';
        let ipText = '-';
        let latencyClass = '';

        if (result && result.latencies) {
            if (result.success) {
                statusClass = 'success';
                statusText = `${result.successCount}/${result.totalRuns}`;
                avgLatencyText = `${result.avgLatency}ms`;
                ipText = result.ip || '-';

                if (result.avgLatency < 100) latencyClass = 'fast';
                else if (result.avgLatency < 300) latencyClass = 'medium';
                else latencyClass = 'slow';
            } else {
                statusClass = 'error';
                statusText = '失败';
                ipText = result.error || '失败';
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
            <div class="server-metrics">
                <div class="metric">
                    <span class="metric-label">延迟</span>
                    <span class="metric-value ${latencyClass}">${avgLatencyText}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">IP</span>
                    <span class="metric-value">${ipText}</span>
                </div>
            </div>
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