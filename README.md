# AURIÈLLE

AURIÈLLE is a luxury jewellery e-commerce storefront concept designed with an elegant, feminine, premium aesthetic. This project is being built in stages, beginning with a polished foundation, design system, and project structure ready for future storefront and commerce features.

## Stack

- Frontend: React + Vite + JavaScript
- Backend: Node.js + Express
- Database: MongoDB with modular Mongoose models and configuration
- Styling: Global CSS variables with responsive design system
- Future integration: n8n-ready chatbot configuration module (placeholder only, not active)

## Repository structure

```text
AURI-LLE/
├── README.md
├── .gitignore
├── .env.example
├── frontend/
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── components/
│       │   ├── Common/
│       │   │   └── SectionHeading.jsx
│       │   └── Layout/
│       │       ├── AnnouncementBar.jsx
│       │       ├── TopNav.jsx
│       │       └── SiteFooter.jsx
│       ├── config/
│       │   └── appConfig.js
│       ├── services/
│       │   └── chatbotService.js
│       └── styles/
│           └── global.css
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── config/
│   │   ├── db.js
│   │   └── environment.js
│   ├── controllers/
│   │   └── healthController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Category.js
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   └── routes/
│       └── healthRoutes.js
└── docs/
    └── future-chatbot-integration.md
```

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+
- MongoDB running locally or connection string available

### 1) Install dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2) Configure environment variables

Create a `.env` file based on the provided examples:

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

### 3) Start databases and development servers

```bash
# Terminal 1: backend
cd backend
npm run dev

# Terminal 2: frontend
cd frontend
npm run dev
```

The frontend typically runs on `http://localhost:5173` and the backend on `http://localhost:5000`.

## Stage 1 status

This phase establishes the foundational architecture and luxury identity for the storefront, including:

- Premium AURIÈLLE colour palette and typography
- Responsive CSS system and base layout
- Frontend + backend project scaffolding
- Modular database and environment configuration
- n8n chatbot integration placeholder with environment-based configuration

## Notes

- The chatbot is intentionally not active in this stage.
- Payment collection is not enabled in this stage.
- Product data is not yet connected to a live database; the backend is ready for it.

## License

This project is being developed for the AURIÈLLE storefront implementation and is not yet production-deployed.
