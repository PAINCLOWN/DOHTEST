const DOMESTIC_SERVERS = [
    { name: 'China Telecom', url: 'https://doh.ctdns.cn/dns-query' },
    { name: 'China Telecom 2', url: 'https://223.5.5.5/dns-query' },
    { name: 'China Unicom', url: 'https://doh.cudns.cn/dns-query' },
    { name: 'China Unicom 2', url: 'https://119.29.29.29/dns-query' },
    { name: 'China Mobile', url: 'https://doh.cmccdns.cn/dns-query' },
    { name: 'China Mobile 2', url: 'https://120.53.53.53/dns-query' },
    { name: 'Alibaba DNS', url: 'https://doh.alidns.com/dns-query' },
    { name: 'Alibaba Public', url: 'https://223.6.6.6/dns-query' },
    { name: 'Tencent DNS', url: 'https://doh.pdns.com/dns-query' },
    { name: 'Tencent Public', url: 'https://119.28.28.28/dns-query' },
    { name: 'Baidu DNS', url: 'https://doh.baidu.com/dns-query' },
    { name: 'Baidu Public', url: 'https://180.76.76.76/dns-query' },
    { name: '360 DNS', url: 'https://doh.360.cn/dns-query' },
    { name: '360 Secure', url: 'https://doh.360safe.com/dns-query' },
    { name: 'DNSPod', url: 'https://doh.dnspod.cn/dns-query' },
    { name: 'CNNIC DNS', url: 'https://doh.cnnic.cn/dns-query' },
    { name: 'CNNIC Public', url: 'https://1.2.4.8/dns-query' },
    { name: 'Sogou DNS', url: 'https://doh.sogou.com/dns-query' },
    { name: 'DNS派', url: 'https://doh.dnspai.com/dns-query' },
    { name: 'Netease DNS', url: 'https://doh.163dns.com/dns-query' },
    { name: 'HiNet DNS', url: 'https://doh.hinet.net/dns-query' },
    { name: 'SeedNet', url: 'https://doh.seed.net.tw/dns-query' }
];

const FOREIGN_SERVERS = [
    { name: 'AdGuard DNS', url: 'https://dns.adguard.com/dns-query' },
    { name: 'AdGuard Family', url: 'https://family.adguard-dns.com/dns-query' },
    { name: 'AdGuard Non-filtering', url: 'https://non-filtering.adguard-dns.com/dns-query' },
    { name: 'Cloudflare 1.1.1.1', url: 'https://cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Family', url: 'https://family.cloudflare-dns.com/dns-query' },
    { name: 'Cloudflare Security', url: 'https://security.cloudflare-dns.com/dns-query' },
    { name: 'Google Public DNS', url: 'https://dns.google/dns-query' },
    { name: 'Quad9', url: 'https://dns.quad9.net/dns-query' },
    { name: 'Quad9 (filtered)', url: 'https://filtered.quad9.net/dns-query' },
    { name: 'OpenDNS', url: 'https://doh.opendns.com/dns-query' },
    { name: 'OpenDNS Family', url: 'https://doh.familyshield.opendns.com/dns-query' },
    { name: 'CleanBrowsing Family', url: 'https://doh.cleanbrowsing.org/doh/family-filter/' },
    { name: 'CleanBrowsing Security', url: 'https://doh.cleanbrowsing.org/doh/security-filter/' },
    { name: 'Control D', url: 'https://freedom.controld.com/dns-query' },
    { name: 'NextDNS', url: 'https://dns.nextdns.io/6a39d1' },
    { name: 'DNS.WATCH', url: 'https://doh.dns.watch/dns-query' },
    { name: 'Freenom World', url: 'https://doh.freenom.world/dns-query' },
    { name: 'Mullvad DNS', url: 'https://doh.mullvad.net/dns-query' },
    { name: 'ProtonDNS', url: 'https://dns.proton.ch/dns-query' },
    { name: 'ProtonDNS Secure', url: 'https://secure.dns.proton.ch/dns-query' },
    { name: 'CIRA Canadian Shield', url: 'https://dns.cira.ca/dns-query' },
    { name: 'LibreDNS', url: 'https://doh.libredns.gr/dns-query' },
    { name: 'BlahDNS', url: 'https://doh.blahdns.com/dns-query' },
    { name: 'Yandex.DNS', url: 'https://dns.yandex.net/dns-query' },
    { name: 'KDDI DNS', url: 'https://doh.auone-net.jp/dns-query' },
    { name: 'NTT DNS', url: 'https://doh.nttpc.jp/dns-query' },
    { name: 'Orange France', url: 'https://doh.orange.fr/dns-query' },
    { name: 'Deutsche Telekom', url: 'https://doh.telekom-dns.de/dns-query' },
    { name: 'Swisscom', url: 'https://doh.swisscom.ch/dns-query' },
    { name: 'KPN Netherlands', url: 'https://doh.kpn.nl/dns-query' },
    { name: 'BT UK', url: 'https://doh.bt.com/dns-query' },
    { name: 'Telstra', url: 'https://doh.telstra.net/dns-query' },
    { name: 'Singtel', url: 'https://doh.singtel.com/dns-query' }
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
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', switchTab);
    });
    
    document.getElementById('custom-domain').addEventListener('input', validateDomain);
    document.getElementById('use-custom-domain').addEventListener('click', useCustomDomain);
    document.getElementById('start-test').addEventListener('click', startTests);
    document.getElementById('clear-results').addEventListener('click', clearResults);
    document.getElementById('clear-history').addEventListener('click', clearHistory);
}

function switchTab(e) {
    const tab = e.currentTarget;
    const tabId = tab.dataset.tab;
    
    if (tabId === currentTab) return;
    
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    currentTab = tabId;
    
    if (currentTab === 'domestic') {
        currentDomain = DOMESTIC_DEFAULT_DOMAIN;
    } else {
        currentDomain = FOREIGN_DEFAULT_DOMAIN;
    }
    
    document.getElementById('current-domain').textContent = currentDomain;
    document.getElementById('custom-domain').value = '';
    document.getElementById('domain-validation').textContent = '';
    
    results = {};
    renderServerCards();
    updateStats();
    clearCharts();
}

function validateDomain(e) {
    const input = e.target;
    const validation = document.getElementById('domain-validation');
    const domain = input.value.trim();
    
    if (!domain) {
        validation.textContent = '';
        validation.className = 'domain-validation';
        return;
    }
    
    const regex = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    
    if (regex.test(domain)) {
        validation.textContent = '✓ 有效域名';
        validation.className = 'domain-validation valid';
    } else {
        validation.textContent = '✗ 无效域名格式';
        validation.className = 'domain-validation invalid';
    }
}

function useCustomDomain() {
    const input = document.getElementById('custom-domain');
    const domain = input.value.trim();
    
    if (!domain) {
        alert('请输入要测试的域名');
        return;
    }
    
    const regex = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    
    if (!regex.test(domain)) {
        alert('请输入有效的域名格式，如 example.com');
        return;
    }
    
    currentDomain = domain;
    document.getElementById('current-domain').textContent = domain;
    results = {};
    renderServerCards();
    updateStats();
    clearCharts();
}

function getCurrentServers() {
    return currentTab === 'domestic' ? DOMESTIC_SERVERS : FOREIGN_SERVERS;
}

async function startTests() {
    if (isTesting) return;
    
    isTesting = true;
    const servers = getCurrentServers();
    results = {};
    
    const startBtn = document.getElementById('start-test');
    const status = document.getElementById('test-status');
    const statusDot = status.querySelector('.status-dot');
    const statusText = status.querySelector('.status-text');
    
    startBtn.disabled = true;
    startBtn.innerHTML = '<span class="btn-icon">⏳</span> 测试中...';
    statusDot.className = 'status-dot testing';
    statusText.textContent = '测试进行中...';
    
    renderServerCards();
    
    const promises = servers.map((server, index) => 
        testServer(server, index)
    );
    
    await Promise.all(promises);
    
    isTesting = false;
    startBtn.disabled = false;
    startBtn.innerHTML = '<span class="btn-icon">🔄</span> 开始测试';
    statusDot.className = 'status-dot';
    statusText.textContent = '测试完成';
    
    updateStats();
    renderCharts();
    saveToHistory();
    renderHistory();
}

async function testServer(server, index) {
    const startTime = performance.now();
    
    try {
        const response = await fetch(server.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/dns-message',
                'Accept': 'application/dns-message'
            },
            body: buildDNSQuery(currentDomain, TEST_TYPE),
            timeout: TIMEOUT
        });
        
        const endTime = performance.now();
        const latency = Math.round(endTime - startTime);
        
        if (response.ok) {
            const data = await response.arrayBuffer();
            const ip = parseDNSResponse(data);
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
        results[index] = {
            success: false,
            latency: null,
            ip: null,
            error: error.message
        };
    }
    
    renderServerCards();
}

function buildDNSQuery(domain, type) {
    const typeMap = { 'A': 1, 'AAAA': 28, 'CNAME': 5, 'MX': 15 };
    const typeCode = typeMap[type] || 1;
    
    const buffer = new ArrayBuffer(512);
    const view = new DataView(buffer);
    
    view.setUint16(0, 0x1234);
    view.setUint16(2, 0x0100);
    view.setUint16(4, 1);
    view.setUint16(6, 0);
    view.setUint16(8, 0);
    view.setUint16(10, 0);
    
    let offset = 12;
    const labels = domain.split('.');
    
    labels.forEach(label => {
        view.setUint8(offset++, label.length);
        for (let i = 0; i < label.length; i++) {
            view.setUint8(offset++, label.charCodeAt(i));
        }
    });
    
    view.setUint8(offset++, 0);
    view.setUint16(offset, typeCode);
    offset += 2;
    view.setUint16(offset, 1);
    
    return buffer.slice(0, offset + 2);
}

function parseDNSResponse(data) {
    try {
        const view = new DataView(data);
        const questions = view.getUint16(4);
        const answers = view.getUint16(6);
        
        if (answers === 0) return null;
        
        let offset = 12;
        
        for (let i = 0; i < questions; i++) {
            while (view.getUint8(offset) !== 0) {
                const len = view.getUint8(offset);
                offset += len + 1;
            }
            offset += 5;
        }
        
        for (let i = 0; i < answers; i++) {
            while (view.getUint8(offset) !== 0) {
                const len = view.getUint8(offset);
                if (len >= 0xC0) {
                    offset += 2;
                    break;
                }
                offset += len + 1;
            }
            offset++;
            
            const type = view.getUint16(offset);
            offset += 4;
            const dataLen = view.getUint16(offset);
            offset += 2;
            
            if (type === 1) {
                const ip = `${view.getUint8(offset)}.${view.getUint8(offset + 1)}.${view.getUint8(offset + 2)}.${view.getUint8(offset + 3)}`;
                return ip;
            }
            
            offset += dataLen;
        }
    } catch (e) {
        return null;
    }
    
    return null;
}

function renderServerCards() {
    const grid = document.getElementById('server-grid');
    const servers = getCurrentServers();
    
    grid.innerHTML = servers.map((server, index) => {
        const result = results[index];
        return `
            <div class="server-card">
                <div class="server-header">
                    <span class="server-name">${server.name}</span>
                    <span class="server-status ${result ? (result.success ? 'status-success' : 'status-error') : 'status-pending'}">
                        ${result ? (result.success ? '✓ 成功' : '✗ 失败') : '<span class="loader"></span>'}
                    </span>
                </div>
                <div class="server-url">${server.url}</div>
                <div class="server-metrics">
                    <div class="metric">
                        <span class="metric-label">延迟</span>
                        <span class="metric-value ${result ? getLatencyClass(result.latency) : ''}">
                            ${result ? (result.success ? result.latency + 'ms' : '-') : '-'}
                        </span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">IP</span>
                        <span class="metric-value">
                            ${result ? (result.success ? result.ip : '-') : '-'}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function getLatencyClass(latency) {
    if (!latency) return '';
    if (latency < 100) return 'fast';
    if (latency < 300) return 'medium';
    return 'slow';
}

function updateStats() {
    const servers = getCurrentServers();
    const total = servers.length;
    const success = Object.values(results).filter(r => r?.success).length;
    const error = Object.values(results).filter(r => r && !r.success).length;
    
    const latencies = Object.values(results)
        .filter(r => r?.success && r.latency !== null)
        .map(r => r.latency);
    const avgLatency = latencies.length > 0 
        ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
        : 0;
    
    document.getElementById('total-count').textContent = total;
    document.getElementById('success-count').textContent = success;
    document.getElementById('error-count').textContent = error;
    document.getElementById('avg-latency').textContent = avgLatency;
}

function renderCharts() {
    renderLatencyChart();
    renderSuccessChart();
}

function renderLatencyChart() {
    const canvas = document.getElementById('latency-canvas');
    const ctx = canvas.getContext('2d');
    const servers = getCurrentServers();
    
    const width = canvas.width = 300;
    const height = canvas.height = 150;
    
    ctx.clearRect(0, 0, width, height);
    
    const successResults = Object.entries(results)
        .filter(([, r]) => r?.success && r.latency !== null)
        .map(([i, r]) => ({ index: parseInt(i), latency: r.latency }));
    
    if (successResults.length === 0) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('暂无数据', width / 2, height / 2);
        return;
    }
    
    const maxLatency = Math.max(...successResults.map(r => r.latency), 100);
    const padding = 20;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        const label = Math.round(maxLatency - (maxLatency / 4) * i);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px Inter';
        ctx.textAlign = 'right';
        ctx.fillText(label + 'ms', padding - 5, y + 3);
    }
    
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('延迟(ms)', width / 2, height - 5);
    
    const barWidth = Math.min(chartWidth / successResults.length, 15);
    const gap = (chartWidth - barWidth * successResults.length) / (successResults.length + 1);
    
    successResults.forEach((result, i) => {
        const x = padding + gap + i * (barWidth + gap);
        const barHeight = (result.latency / maxLatency) * chartHeight;
        const y = padding + chartHeight - barHeight;
        
        let color = '#22c55e';
        if (result.latency >= 300) color = '#ef4444';
        else if (result.latency >= 100) color = '#f59e0b';
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 4);
        ctx.fill();
        
        ctx.fillStyle = '#f1f5f9';
        ctx.font = '8px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(result.latency + 'ms', x + barWidth / 2, y - 5);
    });
}

function renderSuccessChart() {
    const canvas = document.getElementById('success-canvas');
    const ctx = canvas.getContext('2d');
    
    const width = canvas.width = 300;
    const height = canvas.height = 150;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 20;
    
    ctx.clearRect(0, 0, width, height);
    
    const servers = getCurrentServers();
    const total = servers.length;
    const success = Object.values(results).filter(r => r?.success).length;
    const error = total - success;
    
    if (total === 0) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('暂无数据', centerX, centerY);
        return;
    }
    
    const successAngle = (success / total) * Math.PI * 2;
    const errorAngle = (error / total) * Math.PI * 2;
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + successAngle);
    ctx.closePath();
    ctx.fillStyle = '#22c55e';
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, -Math.PI / 2 + successAngle, -Math.PI / 2 + successAngle + errorAngle);
    ctx.closePath();
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = '#1e293b';
    ctx.fill();
    
    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 24px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(Math.round((success / total) * 100) + '%', centerX, centerY + 8);
    
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Inter';
    ctx.fillText('成功率', centerX, centerY + 25);
}

function clearCharts() {
    const latencyCanvas = document.getElementById('latency-canvas');
    const successCanvas = document.getElementById('success-canvas');
    
    const latencyCtx = latencyCanvas.getContext('2d');
    const successCtx = successCanvas.getContext('2d');
    
    latencyCtx.clearRect(0, 0, latencyCanvas.width, latencyCanvas.height);
    successCtx.clearRect(0, 0, successCanvas.width, successCanvas.height);
}

function saveToHistory() {
    const servers = getCurrentServers();
    const total = servers.length;
    const success = Object.values(results).filter(r => r?.success).length;
    const error = total - success;
    
    const latencies = Object.values(results)
        .filter(r => r?.success && r.latency !== null)
        .map(r => r.latency);
    const avgLatency = latencies.length > 0 
        ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
        : 0;
    
    const record = {
        domain: currentDomain,
        tab: currentTab,
        total,
        success,
        error,
        avgLatency,
        timestamp: Date.now()
    };
    
    history.unshift(record);
    if (history.length > 20) {
        history = history.slice(0, 20);
    }
    
    localStorage.setItem('doh-test-history', JSON.stringify(history));
}

function loadHistory() {
    const stored = localStorage.getItem('doh-test-history');
    if (stored) {
        history = JSON.parse(stored);
    }
}

function renderHistory() {
    const list = document.getElementById('history-list');
    
    if (history.length === 0) {
        list.innerHTML = '<div class="empty-state">暂无测试记录，开始测试后会显示在这里</div>';
        return;
    }
    
    list.innerHTML = history.map(record => {
        const date = new Date(record.timestamp);
        const timeStr = date.toLocaleString('zh-CN', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        return `
            <div class="history-item">
                <div>
                    <span class="history-domain">${record.domain}</span>
                    <span class="history-time">${timeStr}</span>
                </div>
                <div class="history-stats">
                    <span class="history-success">✓ ${record.success}</span>
                    <span class="history-error">✗ ${record.error}</span>
                    <span class="history-avg">${record.avgLatency}ms</span>
                </div>
            </div>
        `;
    }).join('');
}

function clearResults() {
    results = {};
    updateStats();
    renderServerCards();
    clearCharts();
    
    const status = document.getElementById('test-status');
    const statusDot = status.querySelector('.status-dot');
    const statusText = status.querySelector('.status-text');
    statusDot.className = 'status-dot';
    statusText.textContent = '准备就绪';
}

function clearHistory() {
    history = [];
    localStorage.removeItem('doh-test-history');
    renderHistory();
}

document.addEventListener('DOMContentLoaded', init);