import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { City } from '../model/city.model';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  termSearch = localStorage.getItem("SearchItem");



  /*   citys = [
  {location:'Bostonnnnn, MA, USA', image:'assets/images/packages/1.jpg'},
  {location:'Worcesterrrrr, MA, USA', image:'assets/images/packages/2.jpg'}
  ];*/
  citys: City[];
  message: any;

  constructor(private cityService: CityService, private router: Router, public modalService: NgbModal) { }

  ngOnInit() {
    console.log("dd");
    this.cityService.listCity()
      .subscribe(
        data => {
          console.log(data['city']);
          console.log(data['city'][0].image);
          console.log(data['city'].length);
          console.log(JSON.stringify(data['city']));
          this.citys = data['city'];
          console.log(this.citys);
          // localStorage.setItem('user',JSON.stringify(data['user']));



          // this.router.navigate(['/heroes']);
        },
        error => {this.message = {type: 'error', text: 'Invalid username'};}
      );
  }

  onClick(a) {
     this.router.navigate([a]);
  }
}
