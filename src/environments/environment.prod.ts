import { LocalStorageService } from '../app/shared/services/storage-service/local-storage.service';

export const environment = {
  production: true,
  testMode: false,
  services: {
    storageServiceType: LocalStorageService,
  },
};
