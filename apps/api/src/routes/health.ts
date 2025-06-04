import { Router, Request, Response } from "express";

const router = Router();

/**
 * Basic health check endpoint
 * Used for monitoring server availability
 */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Homely API is healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
  });
});

/**
 * Detailed system status endpoint
 * Provides more comprehensive health information
 */
router.get("/status", (req: Request, res: Response) => {
  const memoryUsage = process.memoryUsage();

  res.status(200).json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
    version: process.env.npm_package_version || "1.0.0",
    system: {
      node: process.version,
      platform: process.platform,
      arch: process.arch,
      memory: {
        used: Math.round((memoryUsage.heapUsed / 1024 / 1024) * 100) / 100,
        total: Math.round((memoryUsage.heapTotal / 1024 / 1024) * 100) / 100,
        external: Math.round((memoryUsage.external / 1024 / 1024) * 100) / 100,
      },
    },
  });
});

export default router;
