import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'pages',
                loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
            },
            {
                path: 'auth',
                loadChildren: () => import('./auth/layout-auth.module').then((m) => m.LayoutAuthModule),
            },
        ],
    },
];

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
})
export class PublicModule {}
