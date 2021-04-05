import { NgModule } from '@angular/core';
import {
    ConvertSH,
    DateAgoPipe,
    DateDuePipe,
    ExtensionPipe,
    ValidColorPipe,
    ImgProfilePipe,
    KeysPipe,
    TypeofPipe,
    UniquePipe,
} from './index';
import { SumArrPipe } from './sum-arr.pipe';
@NgModule({
    declarations: [
        TypeofPipe,
        ImgProfilePipe,
        ValidColorPipe,
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
        ValidColorPipe,
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
