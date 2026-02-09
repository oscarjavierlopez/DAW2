import { Router } from "express";
import { UsersApiController } from '../controllers/api.controller.js';
import { createUserValidator } from '../validators/user.validator.js';
import { updateUserValidator } from "../validators/user.validator.js";

const router = Router();

router.get('/', UsersApiController.getAllUsers);
router.get('/:id', UsersApiController.getUserById);
router.post('/', createUserValidator, UsersApiController.createUser);
router.patch('/:id', updateUserValidator, UsersApiController.updateUser);
router.delete('/:id', UsersApiController.deleteUser);

export default router;