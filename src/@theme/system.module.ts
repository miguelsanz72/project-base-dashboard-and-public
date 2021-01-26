import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutosizeModule } from 'ngx-autosize';
import { ComponentsModuleTheme } from './components/components.module';
import { SicruxMaterialColorPickerModule } from './components/material-color-picker/material-color-picker.module';
import { NgVarDirective } from './directives/ng-var.directive';
import { MaterialModule } from './material.module';
import { SystemPipesModule } from './pipes/pipes.module';
@NgModule({
  declarations: [NgVarDirective],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SystemPipesModule,
    SicruxMaterialColorPickerModule,
    RouterModule,
    AutosizeModule,
    ComponentsModuleTheme,
  ],
  exports: [
    SystemPipesModule,
    NgVarDirective,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SicruxMaterialColorPickerModule,
    RouterModule,
    AutosizeModule,
    ComponentsModuleTheme,
  ],
  providers: [],
})
export class SystemModule {}
