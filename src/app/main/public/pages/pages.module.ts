import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';



@NgModule({
  declarations: [HomeComponent, SingleComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
