import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";

import { errorHandler } from "./middleware/errorHandler";
import { notFoundHandler } from "./middleware/notFoundHandler";
import healthRoutes from "./routes/health";
import apiRoutes from "./routes/api";

// Load environment variables
dotenv.config();

/**
 * Create and configure the Express application
 */
const createApp = (): express.Application => {
  const app = express();

  // Security middleware
  app.use(helmet());

  // CORS configuration for family management system
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || "http://localhost:3000",
      credentials: true,
    }),
  );

  // Logging middleware
  app.use(morgan("combined"));

  // Performance middleware
  app.use(compression());

  // Body parsing middleware
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use("/health", healthRoutes);
  app.use("/api/v1", apiRoutes);

  // Error handling middleware (must be last)
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

/**
 * Start the server
 */
const startServer = async (): Promise<void> => {
  try {
    const app = createApp();
    const port = process.env.PORT || 3001;

    app.listen(port, () => {
      console.log(`🚀 Homely API server running on port ${port}`);
      console.log(`📱 Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`🏠 Family management system ready!`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();
