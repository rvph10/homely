import { Request, Response, NextFunction } from "express";

/**
 * Custom error interface for better error handling
 */
interface CustomError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

/**
 * Global error handling middleware
 * Provides consistent error responses across the family management API
 */
export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  // Set default error values
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  const isProduction = process.env.NODE_ENV === "production";

  // Log error for debugging (but protect family privacy in production)
  if (!isProduction) {
    console.error("API Error:", {
      message: error.message,
      stack: error.stack,
      url: req.url,
      method: req.method,
      timestamp: new Date().toISOString(),
    });
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message:
        isProduction && statusCode === 500 ? "Something went wrong" : message,
      statusCode,
      ...((!isProduction || statusCode !== 500) && {
        timestamp: new Date().toISOString(),
        path: req.path,
        method: req.method,
      }),
    },
  });
};
