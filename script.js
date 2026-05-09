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

const TEST_TYPE = 'A';
const TIMEOUT = 10000;

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

    servers.forEach((server, index) => {
        testServer(server, index);
    });
}

async function testServer(server, index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    if (card) {
        card.classList.add('testing');
    }

    const startTime = performance.now();
    let finalResult = null;

    // Check cache first
    const cachedFormat = formatCache[server.url];
    if (cachedFormat) {
        // Use cached format
        finalResult = await testWithFormat(server, cachedFormat);
    } else {
        // Try JSON format first
        const jsonResult = await testWithFormat(server, 'json');
        if (jsonResult.success) {
            formatCache[server.url] = 'json';
            finalResult = jsonResult;
        } else {
            // Fallback to Wire format
            const wireResult = await testWithFormat(server, 'wire');
            if (wireResult.success) {
                formatCache[server.url] = 'wire';
            }
            finalResult = wireResult;
        }
    }

    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    results[index] = {
        ...finalResult,
        latency: finalResult.success ? latency : null
    };

    renderServerCards();
    updateProgress();
    updateStats();
    checkAllComplete();
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
            let ip = null;
            if (format === 'wire') {
                const arrayBuffer = await response.arrayBuffer();
                ip = parseWireResponse(new Uint8Array(arrayBuffer));
            } else {
                const json = await response.json();
                ip = parseJSONResponse(json);
            }
            return {
                success: true,
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
    // Skip header (12 bytes) and question section
    let offset = 12;
    
    // Parse QNAME (variable length)
    while (buffer[offset] !== 0) {
        const labelLen = buffer[offset];
        offset += labelLen + 1;
    }
    offset += 1; // Skip null terminator
    
    // Skip QTYPE (2) and QCLASS (2)
    offset += 4;
    
    // Check if we have answers
    const answers = (buffer[6] << 8) | buffer[7];
    if (answers === 0) {
        return null;
    }
    
    // Parse first answer
    // Skip NAME (compressed pointer)
    offset += 2;
    
    // TYPE
    const type = (buffer[offset] << 8) | buffer[offset + 1];
    offset += 2;
    
    // CLASS
    offset += 2;
    
    // TTL
    offset += 4;
    
    // RDLENGTH
    const rdLength = (buffer[offset] << 8) | buffer[offset + 1];
    offset += 2;
    
    // RDATA - for A record, it's 4 bytes (IPv4)
    if (type === 1 && rdLength === 4) {
        return `${buffer[offset]}.${buffer[offset + 1]}.${buffer[offset + 2]}.${buffer[offset + 3]}`;
    }
    
    return null;
}

function parseJSONResponse(json) {
    if (!json.Answer || json.Answer.length === 0) {
        return null;
    }

    for (const answer of json.Answer) {
        if (answer.type === 1) {
            return answer.data;
        }
    }
    return json.Answer[0].data || null;
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
        let latencyText = '-';
        let ipText = '-';
        let latencyClass = '';

        if (result) {
            if (result.success) {
                statusClass = 'success';
                statusText = '成功';
                latencyText = `${result.latency}ms`;
                ipText = result.ip || '-';

                if (result.latency < 100) latencyClass = 'fast';
                else if (result.latency < 300) latencyClass = 'medium';
                else latencyClass = 'slow';
            } else {
                statusClass = 'error';
                statusText = '失败';
                latencyText = '-';
                ipText = result.error || '失败';
            }
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
                    <span class="metric-value ${latencyClass}">${latencyText}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">IP</span>
                    <span class="metric-value">${ipText}</span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function updateStats() {
    const servers = getCurrentServers();
    const completed = Object.keys(results).length;
    const successCount = Object.values(results).filter(r => r.success).length;
    const errorCount = Object.values(results).filter(r => !r.success).length;
    const avgLatency = successCount > 0
        ? Math.round(Object.values(results).filter(r => r.success && r.latency).reduce((sum, r) => sum + r.latency, 0) / successCount)
        : 0;

    document.getElementById('total-count').textContent = servers.length;
    document.getElementById('success-count').textContent = successCount;
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