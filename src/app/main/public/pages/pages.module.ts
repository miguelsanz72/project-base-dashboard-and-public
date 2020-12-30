import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'single/:id',
    component: SingleComponent,
  },
];

@NgModule({
  declarations: [SingleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
