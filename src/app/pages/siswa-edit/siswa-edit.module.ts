import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';
import { SiswaEditPageRoutingModule } from './siswa-edit-routing.module';

import { SiswaEditPage } from './siswa-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    SiswaEditPageRoutingModule
  ],
  declarations: [SiswaEditPage],
  providers : [SekolahService]
})
export class SiswaEditPageModule {}
