import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gender, Species } from 'app/models/charters.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://rickandmortyapi.com/api/';
  }

  getCharters(route: string) {
    return this.http.get(`${this.url}/${route}`).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  getCharter(route: string, id: string) {
    return this.http.get(`${this.url}/${route}/${id}`).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  filterCharter(gender: Gender, species: Species) {
    const url = `${this.url}/character/?gender=${gender}&species=${species}`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }
}
