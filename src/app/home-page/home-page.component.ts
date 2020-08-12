import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  service: any;
<<<<<<< HEAD
  //constructor(private router: Router) { }
  constructor(private alerts: AlertsService,private toastr:ToastrService,private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
  }
  //showToatr() {
    //this.toastr.error('Please login to create event', 'RELEVENT says'); 
  //}

=======

  constructor(private toaster:ToastrService,private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
  }
 
rd(value){
 localStorage.setItem("category",value);
  
 console.log(value);
  this.router.navigate(['ticket']);
}
>>>>>>> 47985a56b5266a477c2e61931dbbaeac9ef63992
  redirect(): void {
    
    if (this.user) {
      this.router.navigate(['createEvent']);
    }
    else {
<<<<<<< HEAD
      //this.showToatr();
      this.alerts.setMessage('Please login to create event','error');
      this.alerts.setDefaults('timeout',1000 );
      console.log('it works');
      //alert('Please login to create event');
=======
      console.log("inside toaster");
      this.toaster.error('Please login to create event', 'RELEVENT says');
      alert('Please login to create event');
>>>>>>> 47985a56b5266a477c2e61931dbbaeac9ef63992
    }
  }

}