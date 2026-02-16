import { Router } from "express";
import { EventosUsuariosController } from "../controllers/eventos_usuarios.controller.js";

const router = Router();

router.get('/:idUsuario', EventosUsuariosController.getUserEvents);
router.post('/', EventosUsuariosController.create);
router.delete('/:idUsuario/:idEvento', EventosUsuariosController.delete);


export default router;
