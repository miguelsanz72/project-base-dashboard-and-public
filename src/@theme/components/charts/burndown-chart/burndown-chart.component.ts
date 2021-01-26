import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataChart } from './data';
@Component({
    selector: 'app-burndown-chart',
    templateUrl: './burndown-chart.component.html',
    styleUrls: ['./burndown-chart.component.scss'],
})
export class BurndownChartComponent implements OnInit {
    multi: any[] = [];
    legend = true;
    showLabels = true;
    animations = true;
    xAxis = true;
    yAxis = true;
    showYAxisLabel = true;
    showXAxisLabel = true;
    xAxisLabel = 'Días';
    yAxisLabel = 'Tareas';
    timeline = true;
    colorScheme = {
        domain: ['#5AA454', '#E44D25'],
    };
    public dialogRef: MatDialogRef<BurndownChartComponent>;
    constructor(@Inject(MAT_DIALOG_DATA) public _data: any) {}

    ngOnInit(): void {
        this.multi = dataChart;
    }

    onSelect(data): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}
