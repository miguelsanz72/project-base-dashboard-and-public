import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { MaterialModule } from '@theme/material.module';
import { ButtonComponent } from './button/button.component';
import { ChartsModule } from './charts/charts.module';
import { StoreModule } from '@ngrx/store';
import { uiReducer } from '@reducers';

@NgModule({
    declarations: [LoadingComponent, MenuIconComponent, ButtonComponent],
    imports: [CommonModule, MaterialModule, ChartsModule, StoreModule.forFeature('UI', uiReducer)],
    exports: [LoadingComponent, MenuIconComponent, ButtonComponent, ChartsModule],
})
export class ComponentsModuleTheme {}
