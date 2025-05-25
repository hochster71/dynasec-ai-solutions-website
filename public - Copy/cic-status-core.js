<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DYNASEC AI SOLUTIONS CIC Command Center</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #000;
      color: #00ffff;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header {
      text-align: center;
      padding: 40px 20px 0;
    }
    header h1 {
      margin: 0;
      font-size: 2rem;
      color: #00ffff;
    }
    header h2 {
      margin: 10px 0 30px;
      font-size: 1.2rem;
      color: #ffffff;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      padding: 20px 40px;
    }
    .tile {
      border: 2px solid #00ffff;
      border-radius: 10px;
      padding: 20px;
      background-color: #0a0a0a;
    }
    .tile h2 {
      color: #fff;
      font-size: 1rem;
    }
    .tile p {
      color: #b6fdfd;
      font-size: 0.85rem;
    }
    .status {
      font-weight: bold;
      color: #00ffcc;
      font-size: 0.8rem;
      margin-top: 10px;
    }
    footer {
      text-align: center;
      font-size: 0.85rem;
      color: #aaa;
      margin-top: auto;
      padding: 30px 0;
    }
  </style>
</head>
<body>
  <header>
    <h1>DYNASEC AI SOLUTIONS</h1>
    <h2>Combat Information Center — Command Operations Center</h2>
  </header>

  <div class="grid">
    <div class="tile">
      <h2>Homepage</h2>
      <p>Fully deployed with animation-ready layout.</p>
      <div class="status">Status: ✅ COMPLETE</div>
    </div>
    <div class="tile">
      <h2>Empire Tracker</h2>
      <p>Monitoring 10 active AI empires including Genova AI, OrbitalSec, and BrandForge.</p>
      <div class="status">Status: 🔄 LIVE</div>
    </div>
    <div class="tile">
      <h2>Product Catalog</h2>
      <p>Catalog structure loaded and ready for Stripe injection.</p>
      <div class="status">Status: ⚙️ INTEGRATING</div>
    </div>
    <div class="tile">
      <h2>Services Grid</h2>
      <p>All premium AI services linked, with routing to CIC panels.</p>
      <div class="status">Status: ✅ READY</div>
    </div>
    <div class="tile">
      <h2>Capabilities</h2>
      <p>Division-specific capability tiles pending icon sync.</p>
      <div class="status">Status: ⚠️ PENDING</div>
    </div>
    <div class="tile">
      <h2>Launch Pad</h2>
      <p>Commander Initiatives, Mission Briefings, and Tactical Tools.</p>
      <div class="status">Status: 🟢 PRIMED</div>
    </div>
    <div class="tile">
      <h2>Stripe Tracker</h2>
      <p>Live transaction monitor for product sales and revenue flow.</p>
      <div class="status">Status: 🟢 ENABLED</div>
    </div>
    <div class="tile">
      <h2>Intel Brief Feed</h2>
      <p>Real-time updates from mission intelligence and officer briefings.</p>
      <div class="status">Status: 🔁 STREAMING</div>
    </div>
    <div class="tile">
      <h2>Mission Map Panel</h2>
      <p>Operational zone visualization and AI deployment overlays.</p>
      <div class="status">Status: 📡 ONLINE</div>
    </div>
  </div>

  <footer>© 2025 DYNASEC AI SOLUTIONS. All Rights Reserved.</footer>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const statusBtn = document.createElement("button");
      statusBtn.innerText = "🔄 Update Status";
      statusBtn.id = "statusUpdateBtn";
      statusBtn.style.position = "fixed";
      statusBtn.style.top = "20px";
      statusBtn.style.right = "20px";
      statusBtn.style.zIndex = "1000";
      statusBtn.style.padding = "10px 15px";
      statusBtn.style.fontSize = "16px";
      statusBtn.style.background = "#0f0";
      statusBtn.style.color = "#000";
      statusBtn.style.border = "2px solid #000";
      statusBtn.style.borderRadius = "8px";
      statusBtn.style.cursor = "pointer";
      document.body.appendChild(statusBtn);

      const statusLog = document.createElement("div");
      statusLog.id = "statusLogPanel";
      statusLog.style.position = "fixed";
      statusLog.style.bottom = "20px";
      statusLog.style.right = "20px";
      statusLog.style.width = "360px";
      statusLog.style.height = "200px";
      statusLog.style.overflowY = "scroll";
      statusLog.style.background = "#111";
      statusLog.style.color = "#0f0";
      statusLog.style.border = "2px solid #0f0";
      statusLog.style.padding = "10px";
      statusLog.style.fontFamily = "monospace";
      statusLog.style.fontSize = "14px";
      statusLog.style.borderRadius = "8px";
      statusLog.style.zIndex = "999";
      document.body.appendChild(statusLog);

      statusBtn.addEventListener("click", function () {
        const timestamp = new Date().toLocaleTimeString();
        const updateMsg = `[${timestamp}] STATUS: All mission threads synchronized. CIC core is stable.`;
        const msgNode = document.createElement("div");
        msgNode.innerText = updateMsg;
        statusLog.prepend(msgNode);

        const ping = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-interface-option-select-1123.mp3");
        ping.volume = 0.4;
        ping.play();
      });
    });
  </script>
</body>
</html>
