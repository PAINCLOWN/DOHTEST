const DOMESTIC_SERVERS = [
    { name: '阿里 DNS', url: 'https://dns.alidns.com/dns-query' },
    { name: '阿里 DNS (IP)', url: 'https://223.5.5.5/dns-query' },
    { name: '阿里 DNS (IP2)', url: 'https://223.6.6.6/dns-query' },
    { name: '腾讯 DNS', url: 'https://dns.pub/dns-query' },
    { name: '腾讯 DNS (国密)', url: 'https://sm2.doh.pub/dns-query' },
    { name: '360 DNS', url: 'https://doh.360.cn/dns-query' },
    { name: '18Bit DNS', url: 'https://doh.18bit.cn/dns-query' },
    { name: '易安云 DNS', url: 'https://dns.yuguan.xyz/dns-query' },
    { name: 'OneDNS', url: 'https://doh.onedns.net/dns-query' },
    { name: 'OneDNS Pure', url: 'https://doh-pure.onedns.net/dns-query' }
];

const FOREIGN_SERVERS = [
    { name: 'AdGuard DNS', url: 'https://dns.adguard-dns.com/dns-query' },
    { name: 'AdGuard Family', url: 'https://family.adguard-dns.com/dns-query' },
    { name: 'AdGuard Non-filtering', url: 'https://unfiltered.adguard-dns.com/dns-query' },
    { name: 'Cloudflare', url: 'https://dns.cloudflare.com/dns-query' },
    { name: 'Cloudflare Security', url: 'https://security.cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Family', url: 'https://family.cloudflare-dns.com/dns-query' },
    { name: 'OpenDNS', url: 'https://doh.opendns.com/dns-query' },
    { name: 'OpenDNS Family', url: 'https://doh.familyshield.opendns.com/dns-query' },
    { name: 'OpenDNS Sandbox', url: 'https://doh.sandbox.opendns.com/dns-query' },
    { name: 'CleanBrowsing Family', url: 'https://doh.cleanbrowsing.org/doh/family-filter/' },
    { name: 'CleanBrowsing Adult', url: 'https://doh.cleanbrowsing.org/doh/adult-filter/' },
    { name: 'CleanBrowsing Security', url: 'https://doh.cleanbrowsing.org/doh/security-filter/' },
    { name: 'ControlD p0', url: 'https://freedns.controld.com/p0' },
    { name: 'ControlD p1', url: 'https://freedns.controld.com/p1' },
    { name: 'ControlD p2', url: 'https://freedns.controld.com/p2' },
    { name: 'ControlD p3', url: 'https://freedns.controld.com/p3' },
    { name: 'DeCloudUs DNS', url: 'https://dns.decloudus.com/dns-query' },
    { name: 'Quad9', url: 'https://dns.quad9.net/dns-query' },
    { name: 'Google Public DNS', url: 'https://dns.google/dns-query' },
    { name: 'Mullvad DNS', url: 'https://doh.mullvad.net/dns-query' },
    { name: 'DNS.WATCH', url: 'https://doh.dns.watch/dns-query' },
    { name: 'Freenom World', url: 'https://doh.freenom.world/dns-query' },
    { name: 'LibreDNS', url: 'https://doh.libredns.gr/dns-query' },
    { name: 'BlahDNS', url: 'https://doh.blahdns.com/dns-query' },
    { name: 'Yandex.DNS', url: 'https://dns.yandex.net/dns-query' },
    { name: 'NextDNS', url: 'https://dns.nextdns.io/dns-query' },
    { name: 'Caliph DNS', url: 'https://dns.caliph.dev/dns-query' },
    { name: 'DNSGuard', url: 'https://dnsguard.pub/dns-query' },
    { name: 'Surfshark DNS', url: 'https://dns.surfsharkdns.com/dns-query' }
];

const DOMESTIC_DEFAULT_DOMAIN = 'qq.com';
const FOREIGN_DEFAULT_DOMAIN = 'google.com';

const TEST_TYPE = 'A';
const TIMEOUT = 10000;

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
    document.getElementById('foreign-tab').addEventListener('click', () => switchTab('foreign'));
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
    document.getElementById('foreign-tab').classList.toggle('active', tab === 'foreign');
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
    return currentTab === 'domestic' ? DOMESTIC_SERVERS : FOREIGN_SERVERS;
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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

    try {
        const timestamp = Date.now();
        const url = `${server.url}?name=${currentDomain}&type=${TEST_TYPE}&t=${timestamp}`;
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/dns-json'
            },
            signal: controller.signal
        };

        const response = await fetch(url, options);

        clearTimeout(timeoutId);
        const endTime = performance.now();
        const latency = Math.round(endTime - startTime);

        if (response.ok) {
            const json = await response.json();
            const ip = parseJSONResponse(json);
            results[index] = {
                success: true,
                latency,
                ip
            };
        } else {
            results[index] = {
                success: false,
                latency: null,
                ip: null,
                error: `HTTP ${response.status}`
            };
        }
    } catch (error) {
        clearTimeout(timeoutId);
        let errorMessage = error.message;
        if (error.name === 'AbortError') {
            errorMessage = '请求超时';
        }
        results[index] = {
            success: false,
            latency: null,
            ip: null,
            error: errorMessage
        };
    }

    renderServerCards();
    updateProgress();
    updateStats();
    checkAllComplete();
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

document.addEventListener('DOMContentLoaded', init);