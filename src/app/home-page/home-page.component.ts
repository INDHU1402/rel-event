import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  service: any;
  //constructor(private router: Router) { }
  constructor(private toastr:ToastrService,private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
  }
  showToatr() {
    this.toastr.error('Please login to create event', 'RELEVENT says'); 
  }

  redirect(): void {
    if (this.user) {
      this.router.navigate(['createEvent']);
    }
    else {
      //this.showToatr();
      alert('Please login to create event');
    }
  }

}