import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [ProfileComponent, FavoritesComponent],
  imports: [CommonModule],
})
export class PagesModule {}
