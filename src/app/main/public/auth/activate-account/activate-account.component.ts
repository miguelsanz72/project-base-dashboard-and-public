import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-activate-account',
    templateUrl: './activate-account.component.html',
    styleUrls: ['./activate-account.component.scss'],
})
export class ActivateAccountComponent implements OnInit {
    token: string;
    loading: boolean;

    constructor() {
        this.token = '...';
        this.loading = false;
    }

    ngOnInit(): void {}
}
