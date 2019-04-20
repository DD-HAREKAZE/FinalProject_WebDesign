import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userObject: object;
  currentUser: string;

  constructor(
    private router: Router,
    public modalService: NgbModal) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('user'));
    if (this.userObject != null) {
   //   const namekey = 'fn';
      this.currentUser = this.userObject['firstName'];
    }
  }

  logout(wanttologout) {
    console.log("in");
    this.modalService.open(wanttologout, {
    }).result.then((result) => {
      if (result === 'yes') {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/');
      } else {
        return;
      }
    });
  }

  viewMyProfile() {
    this.router.navigateByUrl('/profile' );
  }
}
