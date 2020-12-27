import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { CardS1Component } from './cards/card-s1/card-s1.component';
import { CardS2Component } from './cards/card-s2/card-s2.component';



@NgModule({
  declarations: [LoadingComponent, CardS1Component, CardS2Component],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
