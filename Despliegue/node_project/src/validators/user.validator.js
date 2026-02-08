import { body } from 'express-validator';

export const createUserValidator = [
    body('nombre')
        .exists().withMessage('El nombre es obligatorio')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isString().withMessage('El nombre debe ser una cadena')
        .isLength({ max: 50 }).withMessage('El nombre no puede superar los 50 caracteres'),

    body('email')
        .exists().withMessage('El email es obigatorio')
        .notEmpty().withMessage('El email no puede estar vacío')
        .isEmail().withMessage('El email debe tener un formato válido')
        .isLength({ max: 50 }).withMessage('El email no debe superar los 50 caracteres'),

    body('edad')
        .exists().withMessage('La edad es obligatoria')
        .notEmpty().withMessage('La edad no puede estar vacía')
        .isInt({ min: 0, max: 120 }).withMessage('La edad debe estar entre 0 y 120 años')
        .toInt()
];

export const updateUserValidator = [
    body('nombre')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena')
        .isLength({ max: 50 }).withMessage('El nombre no puede superar los 50 caracteres'),

    body('email')
        .optional()
        .isEmail().withMessage('El email debe tener un formato válido')
        .isLength({ max: 50 }).withMessage('El email no debe superar los 50 caracteres'),

    body('edad')
        .optional()
        .isInt({ min: 0, max: 120 }).withMessage('La edad debe estar entre 0 y 120 años')
        .toInt()
]