import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsPage } from './tabs.page';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

describe('TabsPage', () => {
  let spectator: Spectator<TabsPage>;
  const createComponent = createComponentFactory({
    component: TabsPage,
    imports: [IonicModule.forRoot(), RouterTestingModule, getTranslocoModule()],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
