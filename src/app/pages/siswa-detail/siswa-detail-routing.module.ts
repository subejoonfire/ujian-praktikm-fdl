import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiswaDetailPage } from './siswa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SiswaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiswaDetailPageRoutingModule {}
