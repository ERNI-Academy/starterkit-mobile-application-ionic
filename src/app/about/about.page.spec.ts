import { IonicModule } from '@ionic/angular';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { getTranslocoModule } from '../../testing/transloco-testing.module';
import { AboutContentComponent } from './about-content/about-content.component';

import { AboutPage } from './about.page';

describe('AboutPage', () => {
  let spectator: Spectator<AboutPage>;
  const createComponent = createComponentFactory({
    component: AboutPage,
    imports: [IonicModule.forRoot(), getTranslocoModule()],
    declarations: [MockComponent(AboutContentComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('renders the title "About"', () => {
    const title = spectator.query('ion-title');
    expect(title).toBeTruthy();
    expect(title).toHaveText('About');
  });

  it('renders the content area', () => {
    const aboutContent = spectator.query(AboutContentComponent);
    expect(aboutContent).toBeTruthy();
  });
});
