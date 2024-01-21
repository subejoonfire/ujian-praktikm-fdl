import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';
import { GuruAddPageRoutingModule } from './guru-add-routing.module';

import { GuruAddPage } from './guru-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuruAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GuruAddPage],
  providers : [SekolahService],
})
export class GuruAddPageModule {}
