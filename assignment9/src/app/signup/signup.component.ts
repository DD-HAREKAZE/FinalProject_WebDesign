import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  creteUser() {
    this.userService.create(this.user)
      .subscribe(data => this.router.navigate(['/'])
      );
  }

}
