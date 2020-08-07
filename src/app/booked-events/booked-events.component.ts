import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booked-events',
  templateUrl: './booked-events.component.html',
  styleUrls: ['./booked-events.component.css']
})
export class BookedEventsComponent implements OnInit {
  User:any;
  myBookedEvents:any;
    constructor(private service: UserService,private router: Router) { }
  
    ngOnInit(): void {
      this.User = JSON.parse(localStorage.getItem('userDetails'));
      this.service.getmyBookedEventsList(this.User.userId).subscribe((result: any) => {
        console.log(result);this.myBookedEvents= result });
    }
  }
