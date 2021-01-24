import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardS1Component } from './cards/card-s1/card-s1.component';
import { CardS2Component } from './cards/card-s2/card-s2.component';
import { IconImageFisrtLetterComponent } from './icon-image-fisrt-letter/icon-image-fisrt-letter.component';
import { SystemModule } from '@theme/system.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormEmailComponent } from './forms/form-email/form-email.component';
import { FormPasswordComponent } from './forms/form-password/form-password.component';

@NgModule({
  declarations: [
    IconImageFisrtLetterComponent,
    CardS1Component,
    CardS2Component,
    FormEmailComponent,
    FormPasswordComponent,
  ],
  exports: [
    IconImageFisrtLetterComponent,
    FormEmailComponent,
    FormPasswordComponent,
  ],
  imports: [CommonModule, SystemModule, TranslateModule.forChild()],
})
export class ComponentsModule {}
