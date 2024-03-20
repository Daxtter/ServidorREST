import express from 'express'
const router = express.Router();
import activo from '../Controladores/activoController.js'
import activoM from '../modelos/activoModel.js'
router.get('/',activo.findAll);
router.get('/:id',activo.findById);
router.post('/',activo.post);
router.put('/:id',activo.put);
router.delete('/:id',activo.deleteId);

export default router;
 