import { InMemoryStorageService } from '../app/shared/services/storage-service/in-memory-storage.service';

export const environment = {
  production: false,
  testMode: true,
  services: {
    storageServiceType: InMemoryStorageService,
  },
};
