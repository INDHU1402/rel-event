import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  num : number;
  amount : number;
  Event: any;
  User: any;

  constructor() { }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.User);
    this.num = JSON.parse(localStorage.getItem('ntickets'));
    console.log(this.num);
    this.Event = JSON.parse(localStorage.getItem('eventDetails'));
    console.log(this.Event);
    this.amount = this.Event.ticketPrice * this.num;
    console.log(this.amount);
  }

}
