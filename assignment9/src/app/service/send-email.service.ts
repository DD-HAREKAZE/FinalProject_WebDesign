import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private  http: HttpClient) { }

  sendEmail(user: User) {
    console.log('Your email address is:', user);
    return this.http.post('http://localhost:3000' + '/email', user);
  }
}
