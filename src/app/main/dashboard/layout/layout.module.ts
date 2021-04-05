import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeModule } from '@theme/theme.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@components';

@NgModule({
    declarations: [NavBarComponent, SidebarComponent, FooterComponent],
    exports: [NavBarComponent, SidebarComponent, FooterComponent],
    imports: [CommonModule, ThemeModule, TranslateModule.forChild(), ComponentsModule],
})
export class LayoutModule {}
