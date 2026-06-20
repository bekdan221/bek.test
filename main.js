const servers = [
    { name: "Server_Alpha", load: "45%" },
    { name: "Server_Beta", load: "72%" },
    { name: "Server_Gamma", load: "12%" }
];

const dash = document.getElementById('dashboard');
dash.innerHTML = servers.map(s => `
    <div class="server-card">
        <h3>${s.name}</h3>
        <p>Load: ${s.load}</p>
        <div class="load-bar"><div class="load-fill" style="width: ${s.load}"></div></div>
    </div>
`).join('');
