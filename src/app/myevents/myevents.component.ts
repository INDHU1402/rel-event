import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {
User:any;
myEvents:any;
  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.service.getmyEventsList(this.User.userId).subscribe((result: any) => {
      console.log(result);this.myEvents= result });
  }
}
