import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { MaterialModule } from '@theme/material.module';
import { ButtonComponent } from './button/button.component';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  declarations: [LoadingComponent, MenuIconComponent, ButtonComponent],
  imports: [CommonModule, MaterialModule, ChartsModule],
  exports: [LoadingComponent, MenuIconComponent, ButtonComponent, ChartsModule],
})
export class ComponentsModuleTheme {}
