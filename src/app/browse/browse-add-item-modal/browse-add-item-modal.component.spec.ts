import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  byTextContent,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { getTranslocoModule } from '../../../testing/transloco-testing.module';

import { BrowseAddItemModalComponent } from './browse-add-item-modal.component';

describe('BrowseAddItemModalComponent', () => {
  let spectator: Spectator<BrowseAddItemModalComponent>;
  const createComponent = createComponentFactory({
    component: BrowseAddItemModalComponent,
    imports: [IonicModule.forRoot(), getTranslocoModule(), ReactiveFormsModule],
    providers: [MockProvider(ModalController)],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('renders the modal title "Add Item"', () => {
    const title = spectator.query('ion-title');
    expect(title).toHaveText('Add Item');
  });

  it('renders the title and description form elements', () => {
    const formElements = spectator.queryAll('ion-item');
    expect(formElements[0]).toHaveText('Title');
    expect(formElements[0]).toHaveDescendant('ion-input');
    expect(formElements[1]).toHaveText('Description');
    expect(formElements[1]).toHaveDescendant('ion-input');
  });

  it('renders the add item button', () => {
    const addItemButton = spectator.query(
      byTextContent('Add Item', { selector: 'ion-button' })
    );
    expect(addItemButton).toBeTruthy();
  });

  it('renders the close modal button', () => {
    const closeButton = spectator.query(
      byTextContent('Close', { selector: 'ion-button' })
    );
    expect(closeButton).toBeTruthy();
  });

  it('closes de modal with data when add item button is tapped', () => {
    const modalController = spectator.inject(ModalController);
    spyOn(modalController, 'dismiss');
    spectator.component.form.patchValue({
      title: 'Testing Title',
      description: 'Testing Description',
    });
    spectator.click(byTextContent('Add Item', { selector: 'ion-button' }));
    expect(modalController.dismiss).toHaveBeenCalledWith({
      title: 'Testing Title',
      description: 'Testing Description',
    });
  });

  it('closes de modal when close button is tapped', () => {
    const modalController = spectator.inject(ModalController);
    spyOn(modalController, 'dismiss');
    spectator.click(byTextContent('Close', { selector: 'ion-button' }));
    expect(modalController.dismiss).toHaveBeenCalledWith();
  });
});
