import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import InfoItem from '../../models/info-item';
import { StorageService } from '../storage-service/storage.service';

import {
  InfoItemService,
  INFO_ITEM_LIST_STORAGE_KEY,
} from './info-item.service';

describe('InfoItemService', () => {
  let spectator: SpectatorService<InfoItemService>;
  const createService = createServiceFactory({
    service: InfoItemService,
    providers: [
      MockProvider(StorageService, {
        get: <T>() => Promise.resolve([] as unknown as T),
        set: <T>() => Promise.resolve([] as unknown as T),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('creates an info item and passes it to the storage service', async () => {
    const storageService = spectator.inject(StorageService);
    spyOn(storageService, 'get').and.resolveTo([]);
    spyOn(storageService, 'set').and.resolveTo([]);

    await spectator.service.createInfoItem('Test Title', 'Test Description');
    expect(storageService.set).toHaveBeenCalledWith(
      INFO_ITEM_LIST_STORAGE_KEY,
      [
        jasmine.objectContaining({
          title: 'Test Title',
          description: 'Test Description',
        }),
      ]
    );
  });

  it('gets all info item from the storage service', async () => {
    const storageService = spectator.inject(StorageService);
    const infoItem = new InfoItem({
      title: 'Test Title Two',
      description: 'Not',
    });
    spyOn(storageService, 'get').and.resolveTo([infoItem]);
    const items = await spectator.service.getAllInfoItems();
    expect(items).toEqual([infoItem]);
    expect(storageService.get).toHaveBeenCalledWith(INFO_ITEM_LIST_STORAGE_KEY);
  });

  it('removes by id an item from the storage service', async () => {
    const storageService = spectator.inject(StorageService);
    const infoItem = new InfoItem({
      id: 'myId1',
      title: 'Test Title Two',
      description: 'Not',
    });
    const infoItem2 = new InfoItem({
      id: 'myId2',
      title: 'Test Title Three',
      description: 'Not',
    });
    spyOn(storageService, 'get').and.resolveTo([infoItem, infoItem2]);
    spyOn(storageService, 'set').and.resolveTo([]);
    await spectator.service.removeInfoItem('myId1');
    expect(storageService.set).toHaveBeenCalledWith(
      INFO_ITEM_LIST_STORAGE_KEY,
      [infoItem2]
    );
  });
});
