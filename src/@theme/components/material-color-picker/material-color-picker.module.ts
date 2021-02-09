import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SystemPipesModule } from '@theme/pipes/pipes.module';

import { SystemMaterialColorPickerComponent } from '@theme/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [SystemMaterialColorPickerComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        SystemPipesModule,
    ],
    exports: [SystemMaterialColorPickerComponent],
})
export class SicruxMaterialColorPickerModule {}
