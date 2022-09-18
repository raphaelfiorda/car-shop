import IService from '../interfaces/IService';
import CarModel from '../models/CarModel';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middlewares/errorCatalog';

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

  public async readOne(_id: string): Promise<ICar | null> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.ObjectNotFound);

    return car;
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    const parsedObj = await CarZodSchema.safeParseAsync(obj);
    if (!parsedObj.success) throw parsedObj.error;

    const carUpdated = await this._car.update(_id, obj);
    if (carUpdated === null) throw new Error(ErrorTypes.ObjectNotFound);
    
    return carUpdated;
  }
}

export default CarService;