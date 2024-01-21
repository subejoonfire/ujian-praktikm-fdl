import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { GuruListPageRoutingModule } from './guru-list-routing.module';

import { GuruListPage } from './guru-list.page';
import { SekolahService } from 'src/app/services/sekolah.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    GuruListPageRoutingModule
  ],
  declarations: [GuruListPage],
  providers: [SekolahService],
})
export class GuruListPageModule {}
