import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardS1Component } from './cards/card-s1/card-s1.component';
import { CardS2Component } from './cards/card-s2/card-s2.component';
import { IconImageFisrtLetterComponent } from './icon-image-fisrt-letter/icon-image-fisrt-letter.component';
import { ThemeModule } from '@theme/theme.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormEmailComponent } from './forms/form-email/form-email.component';
import { FormPasswordComponent } from './forms/form-password/form-password.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { BarAdvanceComponent } from './bar-advance/bar-advance.component';
import { WhiteScreenComponent } from './white-screen/white-screen.component';

@NgModule({
    declarations: [
        IconImageFisrtLetterComponent,
        CardS1Component,
        CardS2Component,
        FormEmailComponent,
        FormPasswordComponent,
        DataTableComponent,
        HeaderPagesComponent,
        BarAdvanceComponent,
        WhiteScreenComponent,
    ],
    exports: [
        IconImageFisrtLetterComponent,
        FormEmailComponent,
        FormPasswordComponent,
        HeaderPagesComponent,
        BarAdvanceComponent,
        WhiteScreenComponent,
    ],
    imports: [CommonModule, ThemeModule, TranslateModule.forChild()],
})
export class ComponentsModule {}
