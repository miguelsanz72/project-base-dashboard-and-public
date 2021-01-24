import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  userCDefault,
  UserClass,
  userMDefault,
  UserModel,
} from '@models/index';
import { ItemsMenu } from '@theme/components/menu-icon/menu-icon.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  userProfile: UserClass;
  user: UserModel;
  showNotifications: boolean;

  itemsMenu: ItemsMenu[];

  constructor(private route: Router) {
    this.userProfile = new UserClass(userCDefault);
    this.user = new UserModel(userMDefault);
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
    if (this.user.type === 'owner') {
      await this.route.navigate(['dashboard/pages/profile-boss']);
    } else if (this.user.type === 'member') {
      await this.route.navigate(['dashboard/pages/profile-enterprise']);
    }
  }
}
