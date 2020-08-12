import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  Event : any;
  payment : any;
  User : any;
  paymentDetails: any;
  n: any;

  constructor(private service: UserService,private router: Router) {
    this.payment = {cardNum: '',nameOnCard: '',expiryDate: '',amount: '',
    event: {eventType:'', about:'', attendeesCount:'', category:'', eventName:'',guest1:'',guest2:'',guest3:'',
    organiserName:'', sponsor:'', ticketPrice:'', venue:'',eventStartDate:'',eventEndDate:'',poster:'',
    startTime:'',endTime:'',startOverview:'',endOverview:'',time1:'',time2:'',overview1:'',overview2:''},
    user: {userId:'', contact:'', emailId:'', password:'', userName:''}};
   }

  ngOnInit(): void {
    this.Event = JSON.parse(localStorage.getItem('eventDetails'));
    console.log(this.Event);
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.User);
    this.n = JSON.parse(localStorage.getItem('ntickets'));
    console.log(this.n);
  }

  addPayment(paymentForm : any) : void {
    this.payment.amount = this.Event.ticketPrice;
    this.payment.event.eventId = this.Event.eventId;
    this.payment.user.userId = this.User.userId;
    console.log(this.payment);
    this.service.registerPayment(this.payment).subscribe((result: any) => { console.log(result); } );
    this.router.navigate(['bill']);
  }

  /*showBill() {
    localStorage.setItem('howMany', JSON.stringify(this.ntickets));
    this.router.navigate(['bill']);
  }*/

}
