import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  // Métodos abaixo por ora servindo como placeholders
  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(): Promise<any> {
    return this;
  }

  public async update(): Promise<any> {
    return this;
  }

  public async delete(): Promise<any> {
    return this;
  }
}

export default MongoModel;