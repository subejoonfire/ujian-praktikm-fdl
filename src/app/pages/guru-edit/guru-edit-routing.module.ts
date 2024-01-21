import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuruEditPage } from './guru-edit.page';

const routes: Routes = [
  {
    path: '',
    component: GuruEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuruEditPageRoutingModule {}
