import { NgModule } from '@angular/core';
import {
  ConvertSH,
  DateAgoPipe,
  DateDuePipe,
  ExtensionPipe,
  FilterColorPipe,
  ImgProfilePipe,
  KeysPipe,
  SumArrPipe,
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
    SumArrPipe,
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
    SumArrPipe,
  ],
  providers: [UniquePipe],
})
export class SystemPipesModule {}
