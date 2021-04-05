import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeModule } from '@theme/theme.module';

@NgModule({
    declarations: [NavBarComponent, FooterComponent],
    exports: [NavBarComponent, FooterComponent],
    imports: [CommonModule, ThemeModule],
})
export class LayoutModule {}
