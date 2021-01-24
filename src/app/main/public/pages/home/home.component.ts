import { Component, OnInit } from '@angular/core';
import { Result } from 'app/models/charters.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    characters: Result[] = [];
    info: any;

    constructor() {}

    ngOnInit(): void {}
}
