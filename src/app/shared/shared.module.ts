import { NgModule } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';
import { InfoItemService } from './services/info-item-service/info-item.service';
import { STORAGE_SERVICE } from './services/service-bindings';

@NgModule({
  providers: [TranslocoPipe, STORAGE_SERVICE, InfoItemService],
  declarations: [],
  imports: [TranslocoModule],
  exports: [TranslocoModule],
})
export class SharedModule {}
