import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class LocalStorageService extends StorageService {
  public async get<T>(key: string): Promise<T> {
    const data = localStorage.getItem(key);
    if (!data) {
      throw new Error('LocalStorageService: Key not found');
    }
    try {
      return JSON.parse(data) as T;
    } catch {
      throw new Error(
        `LocalStorageService: Error to parse object, data: ${data}`
      );
    }
  }
  public async set<T>(key: string, data: T): Promise<T> {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }
}
