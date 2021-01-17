import { Component, OnInit } from '@angular/core';
import { ApiService } from '@system/services/api.service';
import { Result } from 'app/models/charters.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  characters: Result[] = [];
  info: any;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getCharters();
  }

  getCharters() {
    this._apiService.getCharters('character').subscribe((resp: any) => {
      this.characters = resp.results;
      this.info = resp.info;
    });
  }

  next() {
    const route = this.info.next.replace(
      'https://rickandmortyapi.com/api/',
      ''
    );
    this._apiService.getCharters(route).subscribe((resp: any) => {
      this.characters = resp.results;
      this.info = resp.info;
      console.log(this.characters);
    });
  }

  prev() {
    const route = this.info.prev.replace(
      'https://rickandmortyapi.com/api/',
      ''
    );
    if (this.info.prev == null) {
      return;
    }
    this._apiService.getCharters(route).subscribe((resp: any) => {
      this.characters = resp.results;
      this.info = resp.info;
      console.log(this.characters);
    });
  }
}
