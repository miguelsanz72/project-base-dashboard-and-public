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
      import('./main/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
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
