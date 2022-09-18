import { Router } from 'express';
import CarController from '../controllers/CarController';
// import CarService from '../services/CarService';
// import CarModel from '../models/CarModel';

const router = Router();

const carController = new CarController();

router.post('/', (req, res) => carController.create(req, res));
router.get('/', (req, res) => carController.read(req, res));

export default router;