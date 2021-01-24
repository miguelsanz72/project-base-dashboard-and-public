import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ItemsMenu {
    icon: string;
    label: string;
}

@Component({
    selector: 'app-menu-icon',
    templateUrl: './menu-icon.component.html',
    styleUrls: ['./menu-icon.component.scss'],
})
export class MenuIconComponent implements OnInit {
    @Input() icon: string;
    @Input() class: string;
    @Input() items: ItemsMenu[];
    @Output() menuEvent: EventEmitter<any>;

    constructor() {
        this.icon = 'more_vert';
        this.class = '';
        this.items = [
            {
                icon: 'dialpad',
                label: 'Item',
            },
        ];
        this.menuEvent = new EventEmitter();
    }

    ngOnInit(): void {}

    event(): void {
        this.menuEvent.emit();
    }
}
