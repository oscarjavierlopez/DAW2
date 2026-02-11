import { Router } from "express";
import { EventosApiController } from '../controllers/eventos.controller.js';


const router = Router();

router.get('/', EventosApiController.index);
router.post('/', EventosApiController.create);
router.patch('/:id', EventosApiController.update);
router.delete('/:id', EventosApiController.delete);

export default router;