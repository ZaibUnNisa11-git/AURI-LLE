# AURIÈLLE

AURIÈLLE is a luxury jewellery e-commerce project with an elegant, feminine, premium visual identity. Development is staged; this repository currently provides the Stage 1 foundation and design system.

## Stack

- Frontend: React + Vite + JavaScript
- Backend: Node.js + Express
- Database: MongoDB using modular Mongoose configuration and models
- Styling: responsive CSS design system with global custom properties

## Project structure

```text
AURI-LLE/
├── README.md
├── .gitignore
├── .env.example
├── docs/
│   └── future-chatbot-integration.md
├── frontend/
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── components/Common/SectionHeading.jsx
│       ├── components/Layout/{AnnouncementBar,TopNav,SiteFooter}.jsx
│       ├── config/appConfig.js
│       ├── services/chatbotService.js
│       └── styles/global.css
└── backend/
    ├── .env.example
    ├── package.json
    ├── server.js
    ├── config/{db,environment}.js
    ├── controllers/healthController.js
    ├── middleware/errorHandler.js
    ├── models/{Category,Order,Product,User}.js
    └── routes/healthRoutes.js
```

## Requirements

- Node.js 18 or newer (Node 20 LTS recommended)
- npm 9 or newer
- MongoDB, if you want to test database connectivity (the API health route can run without a configured MongoDB URI)

## Install and configure

From the repository root:

```bash
cd frontend && npm install
cd ../backend && npm install
cd ..
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Alternatively, the backend can read a root `.env`; create it from `.env.example` instead of `backend/.env`. Backend-specific `.env` values take precedence. Do not commit `.env` files.

## Run the applications

In two terminals from the repository root:

```bash
# Terminal 1 — backend
cd backend
npm run dev

# Terminal 2 — frontend
cd frontend
npm run dev
```

Open the Vite URL (normally `http://localhost:5173`). The backend health endpoint is `http://localhost:5000/api/health`.

Verify the frontend production build with:

```bash
cd frontend
npm run build
```

The API starts listening even if MongoDB is unavailable. The health endpoint reports MongoDB's connection state as `disconnected`, `connecting`, or `connected`. To use MongoDB, set `MONGODB_URI` to a working connection string. Never use a production credential in local examples.

## Environment variables

- Backend: `PORT`, `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV`, `FRONTEND_URL`
- Frontend: `VITE_API_BASE_URL`, `VITE_CHATBOT_ENABLED`, `VITE_CHATBOT_WEBHOOK_URL`
- Frontend `VITE_` values are public build-time configuration; do not put private keys or credentials in them. Keep the chatbot disabled in this stage.

## Current stage

Stage 1 establishes the brand palette, typography, responsive base layout, application scaffolding, modular MongoDB models/configuration, and environment examples. The catalogue, real product imagery/data, cart, checkout, accounts, and admin tools are not implemented yet.

The n8n concierge is not built or active. Its integration notes and disabled configuration placeholder are separate from the storefront. Do not set a private webhook credential in frontend environment variables; a future private integration should be proxied through the backend.
