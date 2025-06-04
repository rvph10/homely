import { Request, Response } from "express";

/**
 * Handle 404 not found routes
 * Provides consistent response for undefined endpoints
 */
export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    error: {
      message: `Route ${req.originalUrl} not found`,
      statusCode: 404,
      timestamp: new Date().toISOString(),
      path: req.path,
      method: req.method,
    },
  });
};
