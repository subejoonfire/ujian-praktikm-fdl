import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuruDetailPage } from './guru-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GuruDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuruDetailPageRoutingModule {}
