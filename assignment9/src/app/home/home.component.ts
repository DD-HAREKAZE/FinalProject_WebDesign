import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SendEmailService} from '../service/send-email.service';
import {User} from '../model/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ SendEmailService ]
})
export class HomeComponent implements OnInit {

  user: User;
  emailForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sendEmailService: SendEmailService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  onSubmit(SearchItem) {
    if (SearchItem == null || SearchItem == '') {


    } else {

      localStorage.setItem('SearchItem', SearchItem);
      this.router.navigate(['/destination']);
    }
  }

 get f() { return this.emailForm.controls; }

  submitEmail() {
    this.submitted = true;

    this.loading = true;
    this.sendEmailService.sendEmail(this.emailForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
        });
  }


}
