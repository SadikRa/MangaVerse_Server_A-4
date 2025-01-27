import { Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (err: any, req: Request, res: Response) => {
  const statusCode = err.status || 500;

  const errorBody = {
    message: err.message || "Something went wrong",
    success: false,
    error: {
      name: err.name || "Error",
      ...(err.errors && { errors: err.errors }),
    },
  };

  if (err.details) {
    errorBody.error = { ...errorBody.error, ...err.details };
  }

  res.status(statusCode).json(errorBody);
};