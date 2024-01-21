import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuruEditPageRoutingModule } from './guru-edit-routing.module';

import { GuruEditPage } from './guru-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuruEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GuruEditPage],
  providers: []
})
export class GuruEditPageModule {}
