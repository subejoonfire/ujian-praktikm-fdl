import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { SiswaDetailPageRoutingModule } from './siswa-detail-routing.module';
import { SekolahService } from 'src/app/services/sekolah.service';
import { SiswaDetailPage } from './siswa-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SiswaDetailPageRoutingModule
  ],
  declarations: [SiswaDetailPage],
  providers: [SekolahService],

})
export class SiswaDetailPageModule {}
