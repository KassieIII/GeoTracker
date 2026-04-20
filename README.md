# 🗺️ GeoTracker Dashboard

A real-time geolocation tracking dashboard built with React, TypeScript, and Leaflet. Displays live device positions on an interactive map with filtering, search, and device details.

## Features

- **Live Map** — Interactive Leaflet map with device markers and clustering
- **Real-time Updates** — WebSocket connection for live position updates
- **Device List** — Searchable sidebar with device status and last seen time
- **Device Details** — Click marker to see full info (IP, coordinates, speed, battery)
- **Filtering** — Filter by status (online/offline), device type, time range
- **Responsive** — Works on desktop and tablet
- **Dark Mode** — Toggle between light and dark themes

## Tech Stack

- React 18 + TypeScript
- Leaflet + react-leaflet
- TanStack Query (data fetching)
- Zustand (state management)
- Tailwind CSS
- Vite

## Quick Start

```bash
git clone https://github.com/KassieIII/geo-tracker.git
cd geo-tracker
npm install
npm run dev
```

Open `http://localhost:5173`

## Project Structure

```
geo-tracker/
├── src/
│   ├── components/
│   │   ├── Map/
│   │   │   ├── MapView.tsx
│   │   │   ├── DeviceMarker.tsx
│   │   │   └── MarkerCluster.tsx
│   │   ├── Sidebar/
│   │   │   ├── DeviceList.tsx
│   │   │   ├── DeviceCard.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── DeviceDetails/
│   │   │   └── DevicePanel.tsx
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       └── AppLayout.tsx
│   ├── hooks/
│   │   ├── useDevices.ts
│   │   └── useWebSocket.ts
│   ├── store/
│   │   └── deviceStore.ts
│   ├── types/
│   │   └── device.ts
│   ├── utils/
│   │   └── formatters.ts
│   ├── api/
│   │   └── devices.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Environment Variables

Create `.env` file:
```
VITE_API_URL=http://localhost:8000/api/v1
VITE_WS_URL=ws://localhost:8000/ws
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

MIT
