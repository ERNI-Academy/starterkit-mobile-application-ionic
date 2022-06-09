import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

import { LanguagePage } from './language.page';

describe('LanguagePage', () => {
  let spectator: Spectator<LanguagePage>;
  const createComponent = createComponentFactory({
    component: LanguagePage,
    imports: [IonicModule.forRoot(), getTranslocoModule(), FormsModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
