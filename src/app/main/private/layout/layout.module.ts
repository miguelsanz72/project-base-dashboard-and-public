import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [NavBarComponent, SidebarComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
