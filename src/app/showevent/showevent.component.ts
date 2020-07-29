import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.css']
})
export class ShoweventComponent implements OnInit {
  event : any;
  eventdate: any;
  s:String;
  text:String;
  d:String;
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.event = JSON.parse(localStorage.getItem('eventDetails'));
    this.eventdate = new Date(this.event.eventDate);
    this.s = new String(this.eventdate);
    this.text=this.s.slice(3,-31);
    var b = ",";
var position = 4;
var output = [this.text.slice(0,4), b, this.text.slice(position)].join('');
console.log(output);
    localStorage.setItem("EventDate",this.eventdate);
       console.log(this.event);
  }
  
  payment() {
    this.router.navigate(['payment']);
  }

}
