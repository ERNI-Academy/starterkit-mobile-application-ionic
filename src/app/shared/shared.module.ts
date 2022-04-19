import { NgModule } from '@angular/core';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';

@NgModule({
  providers: [TranslocoPipe],
  declarations: [],
  imports: [TranslocoModule],
  exports: [TranslocoModule],
})
export class SharedModule {}
