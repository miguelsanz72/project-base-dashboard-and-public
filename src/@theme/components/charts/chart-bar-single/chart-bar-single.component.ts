import { Component, Input, OnInit } from '@angular/core';
import { IChartSimple, TypeChartBar } from '@theme/models';
import { dataSingle } from '../fake';

@Component({
    selector: 'app-chart-bar-single',
    templateUrl: './chart-bar-single.component.html',
    styleUrls: ['../charts.components.scss'],
})
export class ChartBarSingleComponent implements OnInit {
    @Input() data: IChartSimple[];
    @Input() title: string;
    @Input() height: number;
    @Input() typeChartShow: TypeChartBar;

    @Input() showXAxis = false;
    @Input() showYAxis = true;
    @Input() gradient = false;
    @Input() showLegend = false;
    @Input() showXAxisLabel = true;
    @Input() showYAxisLabel = false;
    @Input() colorScheme = 'ocean';
    @Input() xAxisLabel: string;
    @Input() yAxisLabel: string;

    constructor() {
        this.data = dataSingle;
        this.title = 'Chart Multi';
        this.height = 300;
        this.xAxisLabel = 'x Label';
        this.yAxisLabel = 'y Label';
        this.typeChartShow = 'vertical';
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
