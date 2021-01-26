import { Component, Input, OnInit } from '@angular/core';
import { IChartSimple } from '@system/models';
import { dataSingle } from '../fake';
@Component({
    selector: 'chart-pie-grid',
    templateUrl: './chart-pie-grid.component.html',
    styleUrls: ['../charts.components.scss'],
})
export class ChartPieGridDataComponent implements OnInit {
    @Input() data: IChartSimple[];
    @Input() designatedTotal: number;
    @Input() label: string;
    @Input() colorScheme: {
        domain: string[];
    };
    @Input() height: number;
    @Input() showLegend = false;
    @Input() showLabels = false;
    @Input() tooltipDisabled = true;
    isDoughnut = true;
    legendPosition = 'Right';
    explodeSlices = false;
    arcWidth = 0.4;

    constructor() {
        this.data = dataSingle;
        this.designatedTotal = 10;
        this.label = 'Label';
        this.colorScheme = { domain: ['#5AA454'] };
        this.height = 300;
    }

    ngOnInit(): void {}

    onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
}
