import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../model/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userObject: object;
  currentUserFirstName: string;
  currentUserLastName: string;
  currentUserEmail:string;
  currentUserCity:string;
  currentUserZipcode:string;
  temp:any;
  constructor() {
  }

  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('user'));
    if (this.userObject != null) {
      this.currentUserFirstName = this.userObject['firstName'];
      this.currentUserLastName=this.userObject['lastName'];
      this.currentUserEmail=this.userObject['userName'];
      this.currentUserCity=this.userObject['city'];
      this.temp=this.userObject['zip'];
      console.log(this.temp);
      console.log(this.temp.toString());

      if (this.temp == 0){this.currentUserZipcode='00000';}
      if(this.temp>0&&this.temp<10){this.currentUserZipcode='0000'+this.temp.toString();}
      if(this.temp>9&&this.temp < 100){this.currentUserZipcode='000'+this.temp.toString(); }
      if(this.temp>99&&this.temp < 1000){this.currentUserZipcode='00'+this.temp.toString();}
      if(this.temp>999&&this.temp < 10000){this.currentUserZipcode='0'+this.temp.toString(); }
      if(this.temp>9999){this.currentUserZipcode=this.temp.toString();}
      /*this.currentUserZipcode=this.userObject['zip'];*/
    }

  }
}
