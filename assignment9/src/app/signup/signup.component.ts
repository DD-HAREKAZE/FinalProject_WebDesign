import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService} from '../service/user.service';
import { User } from '../model/user.model';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, NgForm, FormControl, Validators, AbstractControl} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})

export class SignupComponent implements OnInit {
  user: User;
  registerForm: FormGroup; /*sign up debug */
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      city: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/(^\d{5}$)|(^\d{5}-\d{4}$)/)]]
      });
  }

  get f() {return this.registerForm.controls; }

  creteUser() {

    this.submitted = true;

    // Stop here if from is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);

    this.loading = true;
    this.userService.create(this.registerForm.value)
      .subscribe(data => {
          console.log('user register', data);
       //   alert('Successfully registered!')
          this.router.navigate(['/home']);
      },
        error => {
        this.loading = false;
        document.getElementById('accountExists').style.display = 'inline';
      });
  }

}
