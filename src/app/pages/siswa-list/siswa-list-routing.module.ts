import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiswaListPage } from './siswa-list.page';

const routes: Routes = [
  {
    path: '',
    component: SiswaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiswaListPageRoutingModule {}
