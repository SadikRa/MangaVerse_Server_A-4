import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: Joi.ObjectSchema) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.validateAsync(req.body);
    next();
  });
};

export default validateRequest;
