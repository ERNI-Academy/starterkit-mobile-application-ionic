export abstract class StorageService {
  public abstract get<T>(key: string): Promise<T>;
  public abstract set<T>(key: string, data: T): Promise<T>;
}
