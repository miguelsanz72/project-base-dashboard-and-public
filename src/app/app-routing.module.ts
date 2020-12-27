import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main/public/public.module').then((m) => m.PublicModule),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./main/private/private.module').then((m) => m.PrivateModule),
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
