import { Component, Input, OnInit } from '@angular/core';
import { systemAnimations } from '@theme/animations';

@Component({
    selector: 'app-auth-ilustrations-footer',
    templateUrl: './auth-ilustrations-footer.component.html',
    styleUrls: ['./auth-ilustrations-footer.component.scss'],
    animations: systemAnimations,
})
export class AuthIlustrationsFooterComponent implements OnInit {
    @Input() ilustration1: string;
    @Input() ilustration2: string;
    constructor() {
        this.ilustration1 = '';
        this.ilustration2 = '';
    }

    ngOnInit(): void {}
}
