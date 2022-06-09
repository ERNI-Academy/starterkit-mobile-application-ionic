import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let spectator: SpectatorService<LocalStorageService>;
  const createService = createServiceFactory(LocalStorageService);

  beforeEach(() => {
    spectator = createService();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('sets and returns the localStorage data', async () => {
    await spectator.service.set('my-testing-key', 'data');
    const dataInLocalStorage = await spectator.service.get('my-testing-key');
    expect(dataInLocalStorage).toEqual('data');
  });
});
