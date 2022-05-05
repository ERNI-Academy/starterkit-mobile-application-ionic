import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowseAddItemModalComponent } from './browse-add-item-modal.component';

describe('BrowseAddItemModalComponent', () => {
  let component: BrowseAddItemModalComponent;
  let fixture: ComponentFixture<BrowseAddItemModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseAddItemModalComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseAddItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
