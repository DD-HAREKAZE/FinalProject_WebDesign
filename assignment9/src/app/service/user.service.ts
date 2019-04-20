import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) { }

  create(user: User) {
    console.log('user', user);
    return this.http.post('http://localhost:3000' + '/user', user);
  }

  showprofile(user: User) {
    return this.http.get('http://localhost:3000' + '/showProfile');
  }
  /*
  login(user:User){
    return this.http.post(url:'http://localhost:3000'+'')
  }*/
}
