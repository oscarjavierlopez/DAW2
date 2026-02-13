import { Router } from "express";
import { MunicipiosController } from '../controllers/municipios.controller.js';


const router = Router();

router.get('/', MunicipiosController.index);

export default router;