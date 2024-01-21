import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SekolahService } from 'src/app/services/sekolah.service';
import { SiswaAddPageRoutingModule } from './siswa-add-routing.module';
import { SiswaAddPage } from './siswa-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    SiswaAddPageRoutingModule
  ],
  declarations: [SiswaAddPage],
  providers: [SekolahService],
})
export class SiswaAddPageModule {}
