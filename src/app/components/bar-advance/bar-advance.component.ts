import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-bar-advance',
    templateUrl: './bar-advance.component.html',
    styleUrls: ['./bar-advance.component.scss'],
})
export class BarAdvanceComponent implements OnInit {
    @Input() total: number;
    @Input() data: any;
    @Input() actual: number;
    @Input() totalInseconds: boolean;
    @Input() calculatePercent: boolean;
    @Input() percentAdvance: number;
    colorAdvance: string;

    constructor() {
        this.total = 100;
        this.data = 30;
        this.actual = 0;
        this.totalInseconds = false;
        this.calculatePercent = true;
        this.percentAdvance = 0;
        this.colorAdvance = 'bg-danger';
    }

    ngOnInit(): void {
        if (typeof this.data === 'object') {
            const actual = this.data[0].value;
            this.actual = actual;
        } else {
            this.actual = this.data;
        }
        if (this.calculatePercent) {
            let total = 0;
            if (this.totalInseconds) {
                total = this.total * 3600;
            } else {
                total = this.total;
            }
            const percent = this.actual / total;
            this.percentAdvance = percent;
            //this.colorAdvance = this._globalFunctionsService.setColorAdvance(percent);
        } else {
            // this.colorAdvance = this._globalFunctionsService.setColorAdvance(this.percentAdvance);
        }
    }
}
