import { Component, Input, OnInit } from '@angular/core';
import { systemAnimations } from '@theme/animations';

@Component({
    selector: 'app-white-screen',
    templateUrl: './white-screen.component.html',
    styleUrls: ['./white-screen.component.scss'],
    animations: systemAnimations,
})
export class WhiteScreenComponent implements OnInit {
    @Input() icon: string;
    @Input() title: string;
    @Input() subTitle: string;

    constructor() {
        this.icon = 'assets/images/icons/binocular.svg';
        this.title = 'Title';
        this.subTitle = 'Sub Title';
    }

    ngOnInit(): void {}
}
