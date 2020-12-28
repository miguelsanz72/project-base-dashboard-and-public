import { NgModule } from '@angular/core';
import {
  ConvertSH,
  DateAgoPipe,
  DateDuePipe,
  ExtensionPipe,
  FilterColorPipe,
  ImgProfilePipe,
  KeysPipe,
  TypeofPipe,
  UniquePipe,
} from './index';
@NgModule({
  declarations: [
    TypeofPipe,
    ImgProfilePipe,
    FilterColorPipe,
    KeysPipe,
    DateAgoPipe,
    DateDuePipe,
    ConvertSH,
    ExtensionPipe,
    UniquePipe,
  ],
  imports: [],
  exports: [
    TypeofPipe,
    ImgProfilePipe,
    FilterColorPipe,
    KeysPipe,
    DateAgoPipe,
    DateDuePipe,
    ConvertSH,
    ExtensionPipe,
    UniquePipe,
  ],
  providers: [UniquePipe],
})
export class SystemPipesModule {}
