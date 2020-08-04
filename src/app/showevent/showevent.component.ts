import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.css']
})
export class ShoweventComponent implements OnInit {
  event : any;
  event1:any
  eventStartdate: any;
  s:String;
  text:String;
  d:String;
  constructor(private service: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.event = JSON.parse(localStorage.getItem('eventDetails'));
    this.service.getEventById(this.event.eventId).subscribe((result: any) => { console.log(result); this.event1 = result} );
  
    this.eventStartdate = new Date(this.event.eventStartDate);
    this.s = new String(this.eventStartdate);
    this.text=this.s.slice(3,-31);
    var b = ",";
var position = 4;
var output = [this.text.slice(0,4), b, this.text.slice(position)].join('');
console.log(output);
    localStorage.setItem("EventDate",output);
       console.log(this.event);
  }
  
  payment() {
    this.router.navigate(['payment']);
  }

  Sponsor(event : any) : void {
    localStorage.setItem('eventDetails', JSON.stringify(event));
    this.router.navigate(['sponsor']);
  }

}
