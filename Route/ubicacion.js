import express from 'express'
const router = express.Router();
import ubicacion from '../Controladores/ubicacionController.js'
//Se imlementa lo que se utilizará en cada método
router.get('/',ubicacion.findAll);
router.get('/:id',ubicacion.findById);
router.post('/',ubicacion.post);
router.put('/:id',ubicacion.put);
router.delete('/:id',ubicacion.deleteId);

export default router;