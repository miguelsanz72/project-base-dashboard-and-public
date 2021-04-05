import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { MaterialModule } from '@theme/material.module';
import { ButtonComponent } from './button/button.component';
import { ChartsModule } from './charts/charts.module';
import { StoreModule } from '@ngrx/store';
import { uiReducer } from '@reducers';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { FilesComponent } from './files/files.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SystemPipesModule } from '@theme/pipes/pipes.module';
import { NgVarDirective } from '@theme/directives';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        LoadingComponent,
        MenuIconComponent,
        ButtonComponent,
        ConfirmDialogComponent,
        ModalUploadComponent,
        FilesComponent,
        UploadFileComponent,
        NgVarDirective,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ChartsModule,
        FlexLayoutModule,
        StoreModule.forFeature('UI', uiReducer),
        TranslateModule.forChild(),
        SystemPipesModule,
    ],
    exports: [
        LoadingComponent,
        MenuIconComponent,
        ButtonComponent,
        ChartsModule,
        FilesComponent,
        UploadFileComponent,
        NgVarDirective,
    ],
    entryComponents: [ConfirmDialogComponent, ModalUploadComponent],
})
export class ComponentsModuleTheme {}
