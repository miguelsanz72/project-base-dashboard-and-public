import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SystemModule } from '@theme/system.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations: [NavBarComponent, SidebarComponent, FooterComponent],
  exports: [NavBarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    SystemModule,
    TranslateModule.forChild(),
    ComponentsModule,
  ],
})
export class LayoutModule {}
