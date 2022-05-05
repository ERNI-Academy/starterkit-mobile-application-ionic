import { environment } from '../../../environments/environment';
import { StorageService } from './storage-service/storage.service';

export const STORAGE_SERVICE = {
  provide: StorageService,
  useClass: environment.services.storageServiceType,
};
