import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import InfoItem from '../../shared/models/info-item';
import { BrowseListItemComponent } from './browse-list-item/browse-list-item.component';

import { BrowseListComponent } from './browse-list.component';

describe('BrowseListComponent', () => {
  let spectator: Spectator<BrowseListComponent>;
  const createComponent = createComponentFactory({
    component: BrowseListComponent,
    imports: [IonicModule.forRoot()],
    declarations: [MockComponent(BrowseListItemComponent)],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        items: [
          new InfoItem({ title: 'Hello World' }),
          new InfoItem({ title: 'Hello World 2' }),
        ],
      },
    });
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('emits an event when removeItemEvent is recivied', () => {
    let output: string;
    spectator
      .output<string>('removeItemEvent')
      .subscribe((res) => (output = res));

    spectator.triggerEventHandler(
      BrowseListItemComponent,
      'removeItemEvent',
      'MyId'
    );

    expect(output).toEqual('MyId');
  });

  it('renders info items', () => {
    const itemComponents = spectator.queryAll(BrowseListItemComponent);
    expect(itemComponents.length).toEqual(2);
  });
});
