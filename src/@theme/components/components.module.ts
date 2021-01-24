import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { MaterialModule } from '@theme/material.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [LoadingComponent, MenuIconComponent, ButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoadingComponent, MenuIconComponent, ButtonComponent],
})
export class ComponentsModuleTheme {}
