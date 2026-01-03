// Mock data voor serverstatus
const statusEl = document.getElementById("status");
const playersEl = document.getElementById("players");

// Update serverstatus
function updateServerStatus() {
    // Later kun je hier echte API calls naar je server zetten
    const online = true;
    const players = Math.floor(Math.random() * 50);

    if(statusEl) statusEl.textContent = online ? "Online ✅" : "Offline ❌";
    if(playersEl) playersEl.textContent = "Spelers: " + players;
}

// Eerste keer laden
updateServerStatus();
setInterval(updateServerStatus, 5000);

// Mock logs voor dashboard (optioneel)
const logsTable = document.getElementById("logsTable");
if(logsTable) {
    const logs = [
        {time: "12:01", player: "Speler1", actie: "Verboden wapen"},
        {time: "12:05", player: "Speler2", actie: "Speedhack"},
        {time: "12:12", player: "Speler3", actie: "Verboden event"},
    ];
    logs.forEach(log => {
        const row = logsTable.insertRow();
        row.insertCell(0).textContent = log.time;
        row.insertCell(1).textContent = log.player;
        row.insertCell(2).textContent = log.actie;
    });
}
