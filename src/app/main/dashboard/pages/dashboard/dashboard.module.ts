import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SystemModule } from '@theme/system.module';
import { ComponentsModule } from '@components';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SystemModule, ComponentsModule],
})
export class DashboardModule {}
