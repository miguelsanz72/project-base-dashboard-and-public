import { Component, Input, OnInit } from '@angular/core';
import { IChartSimple, IChartStacked, TypeChartBar } from '@system/models/charts.model';
import { colorsChart, dataMulti } from '../fake';

@Component({
    selector: 'app-chart-stacked-bar',
    templateUrl: './chart-stacked-bar.component.html',
    styleUrls: ['../charts.components.scss'],
})
export class ChartStackedBarComponent implements OnInit {
    @Input() data: IChartStacked[];
    @Input() title: string;
    @Input() height: number;
    @Input() customColors: IChartSimple[];
    @Input() typeChartShow: TypeChartBar;
    @Input() showXAxis = false;
    @Input() showYAxis = true;
    @Input() gradient = false;
    @Input() showLegend = false;
    @Input() showXAxisLabel = true;
    @Input() showYAxisLabel = false;
    @Input() colorScheme = 'fire';
    @Input() xAxisLabel: string;
    @Input() yAxisLabel: string;

    constructor() {
        this.data = dataMulti;
        this.title = 'Chart Multi';
        this.height = 300;
        this.customColors = colorsChart;
        this.xAxisLabel = 'x Label';
        this.yAxisLabel = 'y Label';
        this.typeChartShow = 'horizontal';
    }

    ngOnInit(): void {}

    onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data: any): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: any): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}
