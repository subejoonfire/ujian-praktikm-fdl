import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SiswaListPageRoutingModule } from './siswa-list-routing.module';
import { SekolahService } from 'src/app/services/sekolah.service';
import { SiswaListPage } from './siswa-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SiswaListPageRoutingModule
  ],
  declarations: [SiswaListPage],
  providers : [SekolahService],
})
export class SiswaListPageModule {}
