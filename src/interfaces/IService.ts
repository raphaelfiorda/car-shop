interface IService<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>;
  readOne(_id: string): Promise<T | null>;
  update(id: string, obj: T): Promise<T | null>;
  delete(id: string): Promise<void>;
}

export default IService;