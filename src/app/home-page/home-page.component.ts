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

  //constructor(private router: Router) { }
  constructor(private alerts: AlertsService,private toaster:ToastrService,private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
  }
  
rd(value){
 localStorage.setItem("category",value);
  
 console.log(value);
  this.router.navigate(['ticket']);
}
tech(){

  this.router.navigate(['createEvent']);
}
cultural(){

  this.router.navigate(['cultural']);
}

PersonalGathering(){

  this.router.navigate(['personalGathering']);
}


  redirect(): void {
    
    if (this.user) {
      this.router.navigate(['createEvent']);
    }
    else {
      this.alerts.setMessage('Please login to create event','error');
      this.alerts.setDefaults('timeout',2000 );
      console.log('it works');
      alert('Please login to create event');
      /*console.log("inside toaster");
      this.toaster.error('Please login to create event', 'RELEVENT says'); */

    }
  }

}