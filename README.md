## 🐻 BearStocks Frontend – Live Realtime Meme-Market Dashboard

Dette er den offisielle frontenden for BearStocks – et realtime meme-coin marked drevet av en FastAPI-backend som sender priskurver i sanntid basert på GitHub-aktivitet, bursdagsboost og random volatilitet.

Frontenden er bygget i Next.js 16 og Tailwind CSS 4, og kobler seg til backendens WebSocket-feed for å gi et live dashboard med smooth animasjoner, clean arkitektur og fullt BearStreet-kaos.

## 🚀 Live Demo

Frontend (Vercel):
👉 https://bearstocks.vercel.app

Backend WebSocket (Render):
👉 wss://bearstocks-backend.onrender.com/ws


## 🧩 Hva frontenden gjør

Koble til WebSocket og motta live priser hvert sekund

Vise alle coins i BearStreet-universet

Oppdatere forskjell i pris → ▲ / ▼ / •

Vise WebSocket-status → BEARECTED / UNBEARECTED

Bruke useWebSocket hook for stabil reconnect

Clean UI med mørkt tema og neon-styling

Animert 3D Neon-header ("BEARSTREET MARKETS™")


## 🧠 Coin-logikk (backend oppsummert)

## 🟦 Reketino Portfolio (REP) – GitHub Coin

Pumpes av:

Commits i dag

Streak

Total contributions

Random drift


## 🟧 BearCoin (BRR) – Bursdags-Bullrun

Boostes av:

Dager til bursdag	Effekt
30	+0.1%/dag
14	+0.4%/dag
7	+1%/dag
1	+20%
Bursdagen	FULL MOONING 🚀


## 🟩 Resten av markedet

BGI, REKE, BEM, REG → små tilfeldige svingninger.


## 🛠️ Teknologi (Frontend)

Next.js 16 (App Router)

React 18

Tailwind CSS v4

Custom hook: useWebSocket()

Semantisk komponent-struktur

Vercel deployment


## 📂 Struktur
src/
  app/
    layout.jsx
    page.jsx
    globals.css
  components/
    LiveStocks.jsx
    NeonH1.jsx
    useWebSocket.jsx


## ⚙️ Kjøre lokalt

Installer dependencies:

npm install

Kjør dev:

npm run dev

Åpne:
http://localhost:3000


## 🔌 WebSocket-bruk i UI
const { connected, lastMsg } = useWebSocket(
  "wss://bearstocks-backend.onrender.com/ws",
  {
    autoReconnect: true,
    reconnectInterval: 3000,
  }
);

Status:
🟢 BEARECTED
🔴 UNBEARECTED — attempting reconnection…


## 🌐 Deployment
Frontend – Vercel

Connect GitHub-repo

Auto-build + deploy

Ingen miljøvariabler nødvendig

Backend – Render

FastAPI + Uvicorn

WebSocket på /ws

Miljøvariabel:

GITHUB_TOKEN=<your_token>


## 🎯 Videre planer

Mini sparklines (mini charts i hvert coin-card)

Full-size live charts

BearTerminal™ – Bloomberg-style view

Portefølje med kjøp/salg

Alerts for flash-crashes og moon events

Admin dashboard

Tema-switch + lyd-effekter


## 🐻 Om prosjektet

BearStocks kombinerer:

koding

gaming vibes

meme-marked

seriøse API-er

og en bjørn i dress

til ett realtime univers som lever sammen med deg og GitHub-grinden din.