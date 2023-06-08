import { RequestHandler } from "express";

import { ObjectSchema } from "joi";

interface RequestValidationError extends Error {
  status?: number;
}

export const validation = (schema: ObjectSchema): RequestHandler => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const validationError: RequestValidationError = new Error(error.message);
      validationError.status = 400;
      next(validationError);
    } else {
      next();
    }
  };
};
