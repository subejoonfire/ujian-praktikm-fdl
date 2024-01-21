import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuruDetailPageRoutingModule } from './guru-detail-routing.module';

import { GuruDetailPage } from './guru-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuruDetailPageRoutingModule
  ],
  declarations: [GuruDetailPage]
})
export class GuruDetailPageModule {}
