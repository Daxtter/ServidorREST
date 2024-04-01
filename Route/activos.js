import express from 'express'
const router = express.Router();
import activo from '../Controladores/activoController.js'
//Se imlementa lo que se utilizará en cada método
router.get('/',activo.findAll);
router.get('/:id',activo.findById);
router.post('/',activo.post);
router.put('/:id',activo.put);
router.delete('/:id',activo.deleteId);

export default router;
 