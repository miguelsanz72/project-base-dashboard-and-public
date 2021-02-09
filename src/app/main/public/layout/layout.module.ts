import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SystemModule } from '@theme/system.module';

@NgModule({
    declarations: [NavBarComponent, FooterComponent],
    exports: [NavBarComponent, FooterComponent],
    imports: [CommonModule, SystemModule],
})
export class LayoutModule {}
