import { IonicModule } from '@ionic/angular';

import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AboutContentComponent } from './about-content.component';
import { getTranslocoModule } from '../../../testing/transloco-testing.module';

describe('AboutContentComponent', () => {
  let spectator: Spectator<AboutContentComponent>;
  const createComponent = createComponentFactory({
    component: AboutContentComponent,
    imports: [IonicModule.forRoot(), getTranslocoModule()],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('renders the "Learn more" button', () => {
    const button = spectator.query('ion-button');
    expect(button).toBeTruthy();
    expect(button).toHaveText('Learn more');
  });

  it('renders the erni logo', () => {
    const logo = spectator.query('ion-img');
    expect(logo).toBeTruthy();
    expect(logo.getAttribute('alt')).toEqual('ERNI Logo');
    expect(logo.getAttribute('src')).toEqual('/assets/images/erni-logo.png');
  });

  it('renders a header with the text "Start developing now"', () => {
    const header = spectator.query('h1');
    expect(header).toBeTruthy();
    expect(header).toHaveText('Start developing now');
  });
});
