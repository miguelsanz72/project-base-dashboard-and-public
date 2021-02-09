import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnDestroy {
    @Input() displayedColumns: string[] = [];
    @Input() dataSource = new MatTableDataSource();
    @Input() dataSearchTerm = new EventEmitter<Event>();
    @Output() clickData = new EventEmitter<any>();
    @Output() changeSlider = new EventEmitter<any>();

    private _unsubscribeAll: Subject<any>;
    searchTerm = '';

    constructor() {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.dataSearchTerm.pipe(takeUntil(this._unsubscribeAll)).subscribe({
            next: (data: Event) => {
                const filterValue = (data.target as HTMLInputElement).value;
                this.searchTerm = filterValue;
                this.dataSource.filter = filterValue.trim().toLowerCase();
            },
        });
    }

    click(data: any): void {
        this.clickData.emit(data);
    }

    changeSlide(data: any, checked: boolean): void {
        const dataEvent = {
            data,
            checked,
        };
        this.changeSlider.emit(dataEvent);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
