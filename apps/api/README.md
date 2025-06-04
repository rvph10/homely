# Homely API Server

A secure, self-hosted family management system backend built with Node.js, Express, and TypeScript.

## 🏠 Overview

The Homely API provides a privacy-focused backend for managing family activities, tasks, calendars, and notes. Designed to run on Raspberry Pi or any self-hosted environment, prioritizing data ownership and family privacy.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The server will start on `http://localhost:3001`

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check-types` - Type checking

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## 📡 API Endpoints

### Health Check

- `GET /health` - Basic health check
- `GET /health/status` - Detailed system status

### API v1

- `GET /api/v1/` - API welcome and endpoint list
- `GET /api/v1/family` - Family management (placeholder)
- `GET /api/v1/tasks` - Task management (placeholder)
- `GET /api/v1/calendar` - Calendar events (placeholder)
- `GET /api/v1/notes` - Notes and reminders (placeholder)

## 🏗️ Architecture

```
src/
├── index.ts              # Server entry point
├── middleware/           # Express middleware
│   ├── errorHandler.ts   # Global error handling
│   └── notFoundHandler.ts# 404 handling
└── routes/              # API route handlers
    ├── health.ts        # Health check endpoints
    └── api.ts           # Main API routes
```

## 🔒 Security Features

- **Helmet.js** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate limiting** - (Planned)
- **Input validation** - (Planned)
- **Authentication** - (Planned)

## 🛠️ Development

### Adding New Routes

1. Create route file in `src/routes/`
2. Import and use in `src/index.ts`
3. Follow TypeScript patterns
4. Document all endpoints

### Error Handling

The API uses centralized error handling:

```typescript
// Custom error with status code
const error = new Error("Resource not found") as any;
error.statusCode = 404;
throw error;
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Raspberry Pi Deployment

Optimized for resource-constrained environments:

- Minimal dependencies
- Efficient memory usage
- Compression enabled
- Production error handling

## 🔮 Roadmap

- [ ] Database integration (SQLite/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Family member management
- [ ] Task assignment & tracking
- [ ] Calendar synchronization
- [ ] File upload & storage
- [ ] Real-time notifications
- [ ] Mobile-friendly responses

## 🤝 Contributing

1. Follow TypeScript best practices
2. Add comprehensive documentation
3. Write tests for new features
4. Consider family privacy in all implementations

## 📝 License

Private family use - Not for commercial distribution
