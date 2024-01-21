import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'siswa-list',
    loadChildren: () => import('./pages/siswa-list/siswa-list.module').then( m => m.SiswaListPageModule)
  },
  {
    path: 'siswa-add',
    loadChildren: () => import('./pages/siswa-add/siswa-add.module').then( m => m.SiswaAddPageModule)
  },
  {
    path: 'siswa-edit/:id',
    loadChildren: () => import('./pages/siswa-edit/siswa-edit.module').then( m => m.SiswaEditPageModule)
  },
  {
    path: 'siswa-detail/:id',
    loadChildren: () => import('./pages/siswa-detail/siswa-detail.module').then( m => m.SiswaDetailPageModule)
  },
  {
    path: 'guru-list',
    loadChildren: () => import('./pages/guru-list/guru-list.module').then( m => m.GuruListPageModule)
  },
  {
    path: 'guru-add',
    loadChildren: () => import('./pages/guru-add/guru-add.module').then( m => m.GuruAddPageModule)
  },
  {
    path: 'guru-edit/:id',
    loadChildren: () => import('./pages/guru-edit/guru-edit.module').then( m => m.GuruEditPageModule)
  },
  {
    path: 'guru-detail',
    loadChildren: () => import('./pages/guru-detail/guru-detail.module').then( m => m.GuruDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
