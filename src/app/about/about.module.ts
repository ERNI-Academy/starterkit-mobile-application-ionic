import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';

import { AboutPageRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutContentComponent } from './about-content/about-content.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    SharedModule,
  ],
  declarations: [AboutPage, AboutContentComponent],
  providers: [],
})
export class AboutPageModule {}
