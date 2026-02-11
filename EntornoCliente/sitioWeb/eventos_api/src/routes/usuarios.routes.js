import { Router } from "express";
import { EventosApiController } from '../controllers/eventos.controller.js';


const router = Router();

router.post('/', EventosApiController.login);


export default router;