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
  cat:string;
  eventDetails = {eventType:'', about:'', attendeesCount:'', category:'', eventName:'',guest1:'',guest2:'',guest3:'',
  organiserName:'', sponsor:'', ticketPrice:'', venue:'',eventStartDate:'',eventEndDate:'',poster:'',
  startTime:'',endTime:'',startOverview:'',endOverview:'',time1:'',time2:'',overview1:'',overview2:'',
  user: {userId:'', contact:'', emailId:'', password:'', userName:''},
  professionalList :[{professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', 
  serviceName:'', serviceType:'', serviceImage:''}]}; 

  constructor(private toastr:ToastrService,private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
  }
  showToatr() {
    this.toastr.error('Please login to create event', 'RELEVENT says'); 
  }
rd(value){
 localStorage.setItem("category",value);
  
 console.log(value);
  this.router.navigate(['ticket']);
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