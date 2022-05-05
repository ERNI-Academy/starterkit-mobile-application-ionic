import { Injectable } from '@angular/core';
import InfoItem from '../../models/info-item';
import { StorageService } from '../storage-service/storage.service';

const INFO_ITEM_LIST_STORAGE_KEY = 'INFO_ITEM_LIST_STORAGE_KEY';

@Injectable({
  providedIn: 'root',
})
export class InfoItemService {
  constructor(private storageService: StorageService) {}

  public async createInfoItem(
    title: string,
    description: string
  ): Promise<InfoItem> {
    let list = await this.getInfoItems();
    const item = new InfoItem({
      title,
      description,
      id: self.crypto.randomUUID(),
    });
    list = [...list, item];
    await this.saveInfoItems(list);
    return item;
  }

  public getAllInfoItems(): Promise<InfoItem[]> {
    return this.getInfoItems();
  }

  public async removeInfoItem(id: string): Promise<InfoItem[]> {
    let list = await this.getInfoItems();
    list = list.filter((item) => item.id !== id);
    return this.saveInfoItems(list);
  }

  private async getInfoItems(): Promise<InfoItem[]> {
    let list: InfoItem[];
    try {
      list = await this.storageService.get(INFO_ITEM_LIST_STORAGE_KEY);
    } catch (err) {
      list = [];
    }
    return list;
  }

  private async saveInfoItems(list: InfoItem[]): Promise<InfoItem[]> {
    return this.storageService.set<InfoItem[]>(
      INFO_ITEM_LIST_STORAGE_KEY,
      list
    );
  }
}
