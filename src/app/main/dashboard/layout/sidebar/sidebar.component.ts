import { Component, OnInit } from '@angular/core';
import { SidebarModel } from '@theme/models/sidebar.model';
import { dataSidebar } from './data-sidebar';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    show: boolean;
    sidebar: SidebarModel[];

    constructor() {
        this.show = false;
        this.sidebar = dataSidebar;
    }

    ngOnInit(): void {}
}
