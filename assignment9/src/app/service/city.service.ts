import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  listCity() {
    return this.http.get('http://localhost:3000' + '/citys' );
  }
}
