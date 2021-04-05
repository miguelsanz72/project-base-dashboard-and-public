import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BurndownChartComponent } from './burndown-chart/burndown-chart.component';
import { ChartBarSingleComponent } from './chart-bar-single/chart-bar-single.component';
import { ChartPieGridDataComponent } from './chart-pie-grid/chart-pie-grid.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartStackedBarComponent } from './chart-stacked-bar/chart-stacked-bar.component';

@NgModule({
    declarations: [
        ChartStackedBarComponent,
        ChartBarSingleComponent,
        ChartPieGridDataComponent,
        ChartPieComponent,
        BurndownChartComponent,
    ],
    imports: [CommonModule, NgxChartsModule],
    exports: [
        ChartStackedBarComponent,
        ChartBarSingleComponent,
        ChartPieGridDataComponent,
        ChartPieComponent,
        BurndownChartComponent,
    ],
    entryComponents: [],
})
export class ChartsModule {}
