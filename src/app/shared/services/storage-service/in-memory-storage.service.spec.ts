import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { InMemoryStorageService } from './in-memory-storage.service';

describe('InMemoryStorageService', () => {
  let spectator: SpectatorService<InMemoryStorageService>;
  const createService = createServiceFactory(InMemoryStorageService);

  beforeEach(() => {
    spectator = createService();
  });

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('sets and returns the in memory data', async () => {
    await spectator.service.set('my-testing-key', 'data');
    const dataInMemory = await spectator.service.get('my-testing-key');
    expect(dataInMemory).toEqual('data');
  });
});
