import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import { BehaviorSubject, Observable} from 'rxjs';
import { appConfig} from '../app.config';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post('http://localhost:3000' + '/auth', user);
  }


  /*
  login(username: string, password: string) {
      return this.http.post<any>(appConfig.apiUrl + '/users/authenticate',
        { username: username, password: password }).pipe(map(user => {
        if ( user && password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }*/
}
