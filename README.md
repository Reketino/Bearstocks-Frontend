## 🐻 BearStocks Frontend – Live Realtime Meme-Market Dashboard

This is the official frontend for BearStocks — a realtime meme-coin market powered by a Python FastAPI backend that streams live price curves based on GitHub activity, birthday boosts, and pure chaos volatility.

The frontend is built with Next.js 16 and Tailwind CSS 4, and connects to the backend WebSocket feed to deliver a live dashboard with smooth animations, clean architecture, and full BearStreet madness.

## 🚀 Live Demo

## Frontend (Vercel):
👉 https://bearstocks.vercel.app

## Backend WebSocket (Python FastAPI, Render):
👉 wss://bearstocks-backend.onrender.com/ws

## 🧩 What the Frontend Does

Connects to a Python FastAPI WebSocket and receives live prices every second

Displays all coins in the BearStreet universe

Shows price movement → ▲ / ▼ / •

WebSocket status → BEARECTED / UNBEARECTED

Auto-reconnect using a custom useWebSocket() hook

Clean dark UI with neon styling

Animated 3D neon header (“BEARSTREET MARKETS™”)

## 🧠 Backend Coin Logic (Summary)

The entire market engine runs on a Python FastAPI backend, streaming realtime coin data through Uvicorn WebSockets.

## 🟦 Reketino Portfolio (REP) – GitHub Coin

Influenced by:

Commits today

Streak

Total contributions

Random drift

## 🟧 BearCoin (BRR) – Birthday Bullrun
Days to birthday	Effect
30	+0.1%/day
14	+0.4%/day
7	+1%/day
1	+20%
Birthday	FULL MOONING 🚀
## 🟩 Remaining Market

BGI, REKE, BEM, REG → light random volatility.

## 🛠️ Tech Stack
Frontend

Next.js 16 (App Router)

React 18

Tailwind CSS v4

Custom useWebSocket() hook

Deployed on Vercel

Backend

Python

FastAPI

Uvicorn (WebSocket server)

GitHub API integrations

Random volatility engine

Deployed on Render

## 📂 Project Structure
src/
  app/
    layout.js
    page.js
    globals.css
  components/
    livestocks.jsx
    NeonH1.jsx
    stocklivechart.jsx
    usewebsocket.jsx

## ⚙️ Running Locally

Install packages:

npm install


Start dev server:

npm run dev


Visit:
http://localhost:3000

## 🔌 WebSocket Usage Example
const { connected, lastMsg } = useWebSocket(
  "wss://bearstocks-backend.onrender.com/ws",
  {
    autoReconnect: true,
    reconnectInterval: 3000,
  }
);


Status indicators:

🟢 BEARECTED

🔴 UNBEARECTED — attempting reconnection…

## 🌐 Deployment
Frontend – Vercel

Connect GitHub repository

Automatic builds and deployments

No environment variables required

Backend – Render (Python)

FastAPI + Uvicorn

WebSocket endpoint: /ws

Required environment variable:

GITHUB_TOKEN=<your_token>

## 🎯 Future Plans

Mini sparklines per coin

BearTerminal™ (Bloomberg-style power view)

Portfolio with buy/sell simulation

Flash-crash & moon-event alerts

Admin dashboard

Theme switch + sound effects

## 🐻 About the Project

BearStocks blends:

coding

gaming vibes

meme-markets

real APIs

a suit-wearing bear

and a Python-powered market engine

into one realtime universe that evolves together with your GitHub grind.