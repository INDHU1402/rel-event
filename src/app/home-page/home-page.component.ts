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

  constructor(private toaster:ToastrService,private router: Router) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
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
      console.log("inside toaster");
      this.toaster.error('Please login to create event', 'RELEVENT says');
      alert('Please login to create event');
    }
  }

}