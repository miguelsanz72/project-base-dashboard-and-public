import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
})
export class PrivateModule {}
