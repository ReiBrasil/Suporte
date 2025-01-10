function handleOptionChange(select) {
    const value = select.value;
    if (value === 'informacoes') {
        window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Informações.html";
    } if (value === 'inicial') {
        window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Inicial.html";
    } else if (value === 'downloads') {
        window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Download.html";
    } else if (value === 'integraçoes') {
    window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Integrações.html";
    } else if (value === 'desenvolvedores') {
    window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Desenvolvedores.html";
    } else if (value === 'suporte') {
    window.location.href = "file:///c%3A/Users/rei-b/OneDrive/Área%20de%20Trabalho/Desenvolvimento/Okay/pages/Biosphera%20Suporte.html";
}
}

let pingInterval;
let isPinging = false;

function startPing() {
    const ip = document.getElementById('ipInput').value.trim();
    if (!ip) {
        alert("Por favor, insira um IP ou URL.");
        return;
    }
    
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('output').textContent = "Pingando: " + ip;

    isPinging = true;
    
    pingInterval = setInterval(() => {
        pingServer(ip);
    }, 1000);  // Intervalo de ping a cada 1 segundo
}

function stopPing() {
    clearInterval(pingInterval);
    isPinging = false;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('output').textContent = "Ping interrompido.";
}

async function pingServer(ip) {
    try {
        const response = await fetch(ip, { method: 'HEAD', mode: 'no-cors' });
        if (response.ok) {
            document.getElementById('output').textContent = "Ping OK para: " + ip;
        } else {
            document.getElementById('output').textContent = "Falha no ping: " + ip;
        }
    } catch (error) {
        document.getElementById('output').textContent = "Erro no ping: " + ip;
    }
}
