import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://rickandmortyapi.com/api/character';
  }

  getCharters() {
    return this.http.get(this.url).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }
}
