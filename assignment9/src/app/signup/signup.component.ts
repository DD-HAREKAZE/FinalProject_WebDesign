import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService} from '../service/user.service';
import { User } from '../model/user.model';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, NgForm, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})

export class SignupComponent implements OnInit {
  user: User;
  registerForm: FormGroup; /*sign up debug */
  loading: false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.minLength(6)],
      city: ['', Validators.required],
      zip: ['', Validators.required]
      });
  }

  get f() {return this.registerForm.controls; }

  creteUser() {
    console.log(this.registerForm.value);
    this.userService.create(this.registerForm.value)
      .subscribe(data => {
          console.log('user register', data)
          this.router.navigate(['/profile']);
      });
  }

}
