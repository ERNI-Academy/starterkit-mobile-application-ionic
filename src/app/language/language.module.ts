import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguagePage } from './language.page';

import { LanguagePageRoutingModule } from './language-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LanguagePage }]),
    LanguagePageRoutingModule,
    SharedModule,
  ],
  declarations: [LanguagePage],
})
export class LanguagePageModule {}
