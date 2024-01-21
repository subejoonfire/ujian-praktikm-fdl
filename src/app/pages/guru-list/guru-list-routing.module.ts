import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuruListPage } from './guru-list.page';

const routes: Routes = [
  {
    path: '',
    component: GuruListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuruListPageRoutingModule {}
