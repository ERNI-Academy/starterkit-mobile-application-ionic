import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowsePage } from './browse.page';

import { BrowsePageRoutingModule } from './browse-routing.module';
import { BrowseListComponent } from './browse-list/browse-list.component';
import { BrowseListItemComponent } from './browse-list/browse-list-item/browse-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { BrowseAddItemModalComponent } from './browse-add-item-modal/browse-add-item-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BrowsePageRoutingModule,
    SharedModule,
  ],
  declarations: [
    BrowsePage,
    BrowseListComponent,
    BrowseListItemComponent,
    BrowseAddItemModalComponent,
  ],
})
export class BrowsePageModule {}
