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
  eventId: any;
  eventProfs = [];
  currentRate : any ;
  len: number;
  rates = [];

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.service.getmyEventsList(this.User.userId).subscribe((result: any) => {
      console.log(result);this.myEvents= result });

    
      this.eventId = JSON.parse(localStorage.getItem('eventProf'));
      this.service.getProfListofEvent(this.eventId).subscribe((result: any) => {
        console.log(result); this.eventProfs = result
        this.len = (result.length); });
        for (let i = 0; i < this.len; i++) {
          this.rates.push(this.currentRate);
        }
        console.log(this.rates);
      }



  showProfessionals(eventId : number) : void {
    localStorage.setItem('eventProf', JSON.stringify(eventId));
    this.router.navigate(['eventprofs']);
  }

  addRating(id : any, rate : any) : void {

    this.rates.push(id, rate);
    console.log(rate+ "added");
  }

  submit() {
    console.log(this.rates);
  }
}
