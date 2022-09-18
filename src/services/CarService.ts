import IService from '../interfaces/IService';
import CarModel from '../models/CarModel';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar> = new CarModel()) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsedObj = await CarZodSchema.safeParseAsync(obj);
    if (!parsedObj.success) throw parsedObj.error;

    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();

    return cars;
  }
}

export default CarService;