import { Component, Input, OnInit } from '@angular/core';
import { IChartSimple, IcustomColorsChart } from '@theme/models';
import { colorsChart, dataSingle } from '../fake';

@Component({
    selector: 'app-chart-pie',
    templateUrl: './chart-pie.component.html',
    styleUrls: ['../charts.components.scss'],
})
export class ChartPieComponent implements OnInit {
    @Input() data: IChartSimple[];
    @Input() height: number;
    @Input() title: string;
    @Input() customColors: IcustomColorsChart[];
    // options
    gradient = true;
    showLegend = false;
    showLabels = false;
    isDoughnut = true;
    legendPosition = 'Right';
    explodeSlices = false;
    colorScheme = 'ocean';
    arcWidth = 0.4;

    constructor() {
        this.data = dataSingle;
        this.height = 300;
        this.title = 'Chart Multi';
        this.customColors = colorsChart;
    }

    ngOnInit(): void {}

    onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
}
