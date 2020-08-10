import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private router: Router) { }
 

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
  }
  
 
  redirect(): void {
    if (this.user) {
      this.router.navigate(['createEvent']);
    }
    else {
      alert('Please login to create event');
    }
  }

  bookTicket(): void {
    this.router.navigate(['ticket']);
  }
}
