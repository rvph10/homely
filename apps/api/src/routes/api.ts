import { Router, Request, Response } from "express";

const router = Router();

/**
 * API welcome endpoint
 * Provides basic API information and available endpoints
 */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Homely Family Management API",
    version: "1.0.0",
    endpoints: {
      health: "/health",
    },
    timestamp: new Date().toISOString(),
  });
});

export default router;
