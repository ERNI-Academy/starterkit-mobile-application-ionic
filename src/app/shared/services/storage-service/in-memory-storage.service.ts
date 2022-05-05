import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class InMemoryStorageService extends StorageService {
  private dataStorage: { [key: string]: unknown } = {};

  public async get<T>(key: string): Promise<T> {
    const data = this.dataStorage[key];
    if (!data) {
      throw new Error('InMemoryStorageService: Key not found');
    }
    return data as T;
  }
  public async set<T>(key: string, data: T): Promise<T> {
    this.dataStorage[key] = data;
    return data;
  }
}
