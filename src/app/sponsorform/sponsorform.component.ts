import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsorform',
  templateUrl: './sponsorform.component.html',
  styleUrls: ['./sponsorform.component.css']
})
export class SponsorformComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  text:string;
  event: any;
  x:number;
  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.event = JSON.parse(localStorage.getItem('eventDetails'));
    this.x = this.event.user.userId;
    console.log(this.x);
  }

  sponsorShip() {
    this.text = "Hello I am " + this.name + " I would like to sponsor the event " + this.event.eventName + 
    " . Here are my details : " + this.email + " Sponsor message : " + this.message; 
    this.service.sponsorship(this.x, this.text).subscribe((result: any) => { console.log(result);});
  }}
