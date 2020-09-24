import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertsService } from 'angular-alert-module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  exps: [];
  exp1: any;
  name : string;
  email : string;
  num : string;
  msg : string;

  //constructor(private router: Router) { }
  constructor(private alerts: AlertsService, private toaster:ToastrService, private router: Router, private service: UserService) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    this.service.getExpList().subscribe((result: any) => { console.log(result); this.exps = result; } );
  }

  sendmsg() : void {
    this.service.contactUs(this.name, this.msg + ' Here are my details : ' + this.email + ', ' + this.num).subscribe((result: any) => { console.log(result); } );
    alert('Message sent');
  }
  /*status(exp: any) {
    console.log(this.exps.findIndex(exp));
    if (this.exps.findIndex(exp) === 0) {
      return true;
    }
    return false;
  }*/

  culturalEvent(){
    if (this.user != null) {
      this.router.navigate(['culturalEvent']);
    } 
    else {
      // this.alerts.setMessage('Please login to create event','error');
       //this.alerts.setDefaults('timeout',2000 );
       //console.log('it works');
       alert('Please login to create event');
       /*console.log("inside toaster");
       this.toaster.error('Please login to create event', 'RELEVENT says'); */
 
     }
    
  }
  technicalEvent(){
    if (this.user != null) {
      this.router.navigate(['techform']);
    }
    else {
      // this.alerts.setMessage('Please login to create event','error');
       //this.alerts.setDefaults('timeout',2000 );
       //console.log('it works');
       alert('Please login to create event');
       /*console.log("inside toaster");
       this.toaster.error('Please login to create event', 'RELEVENT says'); */
 
     }

  }
 personalEvent(){
  if (this.user != null) {
    this.router.navigate(['personalEvent']);
  }
  else {
    // this.alerts.setMessage('Please login to create event','error');
     //this.alerts.setDefaults('timeout',2000 );
     //console.log('it works');
     alert('Please login to create event');
     /*console.log("inside toaster");
     this.toaster.error('Please login to create event', 'RELEVENT says'); */

   }

  }
  
rd(value){
 localStorage.setItem("category",value);
  
 console.log(value);
  this.router.navigate(['ticket']);
}
  redirect(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    console.log('event user = '+this.user);
    if (this.user != null) {
      this.router.navigate(['event']);
    }
    else {
     // this.alerts.setMessage('Please login to create event','error');
      //this.alerts.setDefaults('timeout',2000 );
      //console.log('it works');
      alert('Please login to create event');
      /*console.log("inside toaster");
      this.toaster.error('Please login to create event', 'RELEVENT says'); */

    }
  }

}