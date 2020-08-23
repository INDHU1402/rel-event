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
  eventProfs = [];
  currentRate : any ;
  len: number;
  rates = [];
  to:string;
  eventId:number;
  howManyBooked:Number;

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.service.getmyEventsList(this.User.userId).subscribe((result: any) => {
      console.log(result);this.myEvents= result });
      }

  getProfs(eventId: number) {
    this.service.getProfListofEvent(eventId).subscribe((result: any) => {
      console.log(result); this.eventProfs = result
      this.len = (result.length); });
      for (let i = 0; i < this.len; i++) {
        this.rates.push(this.currentRate);
      }
      console.log(this.rates);
  }

  setEvent(id : number) {
    this.eventId = id;
  }

  shareEvent() {
    console.log(this.eventId);
    console.log(this.User.userId);
    console.log(this.to);
    this.service.shareMyEvent(this.eventId, this.User.userId, this.to).subscribe((result: any) => {console.log(result); });
  }

  addRating(id : any, rate : any) : void {
    this.rates.push(id, rate);
    console.log(rate+ "added");
  }

  submit() {
    console.log(this.rates);
  }
}
