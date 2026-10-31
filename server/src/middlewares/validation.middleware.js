import { body, validationResult } from 'express-validator';
import { BadRequestError, PRODUCT_CATEGORY } from '../utils/index.js';
const withValidationErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

export const validateProductInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('price')
    .notEmpty()
    .withMessage('price is required')
    .isFloat({ gt: 0 })
    .withMessage('price must be greater than 0'),
  body('stock')
    .notEmpty()
    .withMessage('stock is required')
    .isInt({ min: 0 })
    .withMessage('stock must be greater than 0'),
  body('category')
    .isIn(Object.values(PRODUCT_CATEGORY))
    .withMessage(`invalid category`),
  ,
]);
