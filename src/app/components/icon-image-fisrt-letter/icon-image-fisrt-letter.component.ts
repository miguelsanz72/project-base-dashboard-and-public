import { Component, Input, OnInit } from '@angular/core';
import { IUser, userDefault } from '@models';
import { systemAnimations } from '@theme/animations';

@Component({
    selector: 'app-icon-image-fisrt-letter',
    templateUrl: './icon-image-fisrt-letter.component.html',
    styleUrls: ['./icon-image-fisrt-letter.component.scss'],
    animations: systemAnimations,
})
export class IconImageFisrtLetterComponent implements OnInit {
    @Input() users: IUser[];
    @Input() user: IUser;
    @Input() width: number;
    @Input() height: number;

    constructor() {
        this.users = [];
        this.user = userDefault;
        this.width = 30;
        this.height = 30;
    }

    ngOnInit(): void {
        console.log(this.user);
    }
}
