import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService} from '../service/login.service';
import { first } from 'rxjs/operators';
import { User} from '../model/user.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})

export class LoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
   // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  submitLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.loginService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data['user']));
          this.router.navigate(['/profile']);
        },
        error => {
          this.loading = false;
          document.getElementById('invalidCredentials').style.display = 'inline';
        });
  }

}
