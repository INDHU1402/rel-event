import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.css']
})
export class ShoweventComponent implements OnInit {
  event : any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.event = JSON.parse(localStorage.getItem('eventDetails'));
    console.log(this.event);
  }
  
  payment() {
    this.router.navigate(['payment']);
  }

}
