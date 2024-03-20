import express from 'express'
const router = express.Router();
import responsable from '../Controladores/responsableController.js'
router.get('/',responsable.findAll);
router.get('/:id',responsable.findById);
router.post('/',responsable.post);
router.put('/:id',responsable.put);
router.delete('/:id',responsable.deleteId);

export default router;