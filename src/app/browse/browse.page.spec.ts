import { IonicModule } from '@ionic/angular';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator';
import { MockComponents } from 'ng-mocks';
import { getTranslocoModule } from '../../testing/transloco-testing.module';
import InfoItem from '../shared/models/info-item';
import { InfoItemService } from '../shared/services/info-item-service/info-item.service';
import { BrowseAddItemModalComponent } from './browse-add-item-modal/browse-add-item-modal.component';
import { BrowseListComponent } from './browse-list/browse-list.component';

import { BrowsePage } from './browse.page';

describe('BrowsePage', () => {
  let spectator: Spectator<BrowsePage>;

  const mockInfoItem = new InfoItem({
    title: 'MockItem',
    description: 'MockItemDescription',
    id: 'MockItemId',
  });

  const createComponent = createComponentFactory({
    component: BrowsePage,
    imports: [IonicModule.forRoot(), getTranslocoModule()],
    providers: [mockProvider(InfoItemService)],
    declarations: [
      MockComponents(BrowseListComponent, BrowseAddItemModalComponent),
    ],
  });

  beforeEach(() => {
    spectator = createComponent({ props: { list: [mockInfoItem] } });
    const infoItemService = spectator.inject(InfoItemService);
    infoItemService.removeInfoItem.and.returnValue(Promise.resolve([]));
    infoItemService.getAllInfoItems.and.returnValue(
      Promise.resolve([InfoItemService])
    );
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('renders a title with the text "Browse"', () => {
    const title = spectator.query('ion-title');
    expect(title).toBeTruthy();
    expect(title).toHaveText('Browse');
  });

  it('renders the browse list', () => {
    const browseList = spectator.query(BrowseListComponent);
    expect(browseList).toBeTruthy();
    expect(browseList.items.length).toBe(1);
    expect(browseList.items[0].title).toEqual('MockItem');
  });

  it('calls the info item service in order to remove an item by id when onRemoveItem is called', async () => {
    const infoItemService = spectator.inject(InfoItemService);
    const itemIdToRemove = 'MockItemId';
    await spectator.component.onRemoveItem(itemIdToRemove);
    expect(infoItemService.removeInfoItem).toHaveBeenCalledOnceWith(
      itemIdToRemove
    );
  });

  it('gets and sets the info items when init', () => {
    const infoItemService = spectator.inject(InfoItemService);
    expect(infoItemService.getAllInfoItems).toHaveBeenCalled();
  });

  it('calls the info item service to create new info items when modal dismisses with data', () => {
    const infoItemService = spectator.inject(InfoItemService);
    spectator.component.onAddItemModalDismiss({
      detail: {
        data: new InfoItem({
          title: 'TestTitle',
          description: 'TestDescription',
        }),
      },
    } as CustomEvent);
    expect(infoItemService.createInfoItem).toHaveBeenCalledWith(
      'TestTitle',
      'TestDescription'
    );
  });

  it('does nothing when the modal dismisses without data', () => {
    const infoItemService = spectator.inject(InfoItemService);
    spectator.component.onAddItemModalDismiss({
      detail: {
        data: null,
      },
    } as CustomEvent);
    expect(infoItemService.createInfoItem).not.toHaveBeenCalled();
  });
});
