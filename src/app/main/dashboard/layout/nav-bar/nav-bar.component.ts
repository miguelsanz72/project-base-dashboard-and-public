import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, userDefault } from '@models';
import { ItemsMenu } from '@theme/components/menu-icon/menu-icon.component';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    user: IUser;
    showNotifications: boolean;

    itemsMenu: ItemsMenu[];

    constructor(private route: Router) {
        this.user = userDefault;
        this.showNotifications = false;
        this.itemsMenu = [
            {
                icon: 'dark_mode',
                label: 'Dark mode',
            },
        ];
    }

    ngOnInit(): void {}

    async goToProfile(): Promise<void> {
        await this.route.navigate(['dashboard/pages/profile']);
    }
}
