import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from './layout-auth.component';
import { AuthIlustrationsFooterComponent } from './auth-ilustrations-footer/auth-ilustrations-footer.component';
import { SystemModule } from '@theme/system.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutAuthComponent, AuthIlustrationsFooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SystemModule],
})
export class LayoutAuthModule {}
