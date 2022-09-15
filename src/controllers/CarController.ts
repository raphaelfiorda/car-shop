import { Request, Response } from 'express';
import CarService from '../services/CarService';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar> = new CarService()) {
    this._service = service;
  }

  public async create(req: Request, res: Response): Promise<Response<ICar>> {
    const { model, year, color, status,
      buyValue, doorsQty, seatsQty } = req.body;
    const car = {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty };
    
    const created = await this._service.create(car);
    return res.status(201).json(created);
  }
}

export default CarController;