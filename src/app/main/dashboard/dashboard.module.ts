import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { SystemModule } from '@theme/system.module';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: 'pages',
                loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
            },
        ],
    },
];

@NgModule({
    declarations: [ContentComponent],
    imports: [CommonModule, RouterModule.forChild(routes), LayoutModule, SystemModule],
})
export class DashboardModule {}
