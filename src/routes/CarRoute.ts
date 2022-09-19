import { Router } from 'express';
import CarController from '../controllers/CarController';

const router = Router();

const carController = new CarController();

router.post('/', (req, res) => carController.create(req, res));
router.get('/', (req, res) => carController.read(req, res));
router.get('/:id', (req, res) => carController.readOne(req, res));
router.put('/:id', (req, res) => carController.update(req, res));
router.delete('/:id', (req, res) => carController.delete(req, res));

export default router;