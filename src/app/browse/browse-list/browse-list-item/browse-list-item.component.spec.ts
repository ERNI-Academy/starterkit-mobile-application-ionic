import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponents } from 'ng-mocks';
import { getTranslocoModule } from '../../../../testing/transloco-testing.module';
import InfoItem from '../../../shared/models/info-item';

import { BrowseListItemComponent } from './browse-list-item.component';

describe('BrowseListItemComponent', () => {
  let spectator: Spectator<BrowseListItemComponent>;

  const createComponent = createComponentFactory({
    component: BrowseListItemComponent,
    imports: [IonicModule.forRoot(), getTranslocoModule()],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        item: new InfoItem({
          id: 'MyInfoItemId',
          title: 'MyInfoItem',
          description: 'MyInfoDescription',
        }),
      },
    });
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('renders the title and description of the item', () => {
    expect(spectator.query('h2')).toHaveText('MyInfoItem');
    expect(spectator.query('p')).toHaveText('MyInfoDescription');
  });

  it('renders the remove item button', () => {
    const button = spectator.query('ion-item-option');
    expect(button).toBeTruthy();
    expect(button).toHaveText('Remove');
  });

  it('handles the click event of the remove button', () => {
    let output: string;
    spectator
      .output<string>('removeItemEvent')
      .subscribe((res) => (output = res));

    spectator.click('ion-item-option');
    expect(output).toEqual('MyInfoItemId');
  });
});
