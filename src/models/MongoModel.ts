import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middlewares/errorCatalog';

abstract class MongoModel<T> implements IModel<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);

    return this._model.findOne({ _id });
  }

  // Métodos abaixo por ora servindo como placeholders
  public async update(): Promise<any> {
    return this;
  }

  public async delete(): Promise<any> {
    return this;
  }
}

export default MongoModel;