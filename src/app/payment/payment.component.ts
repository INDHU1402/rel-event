import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  Event: any;
  payment: any;
  User: any;
  paymentDetails: any;
  n: any;
  validity: string;
  cardType: string;
  payotp: number;
  otp: number;

  constructor(private service: UserService, private router: Router) {
    this.payment = {
      cardNum: '', nameOnCard: '', expiryDate: '', amount: '',
      event: {
        eventType: '', about: '', attendeesCount: '', category: '', eventName: '', guest1: '', guest2: '', guest3: '',
        organiserName: '', sponsor: '', ticketPrice: '', venue: '', eventStartDate: '', eventEndDate: '', poster: '',
        startTime: '', endTime: '', startOverview: '', endOverview: '', time1: '', time2: '', overview1: '', overview2: ''
      },
      user: { userId: '', contact: '', emailId: '', password: '', userName: '' }
    };
  }

  ngOnInit(): void {
    this.Event = JSON.parse(localStorage.getItem('eventDetails'));
    console.log(this.Event);
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.User);
    this.n = JSON.parse(localStorage.getItem('ntickets'));
    console.log(this.n);
  }

  addPayment(): void {
    this.payment.amount = this.Event.ticketPrice;
    this.payment.event.eventId = this.Event.eventId;
    this.payment.user.userId = this.User.userId;
    console.log(this.payment);
    this.service.validateCard(this.payment.cardNum).subscribe((result1: any) => {
      console.log(result1);
      console.log(this.payment.cardNum.slice(0, 2));
      if (result1) {
        this.service.verification1(this.User.emailId, this.User.userName).subscribe((result2: any) => { this.otp = result2; console.log(result2); });
        if (this.payment.cardNum[0] == '4') {
          this.cardType = "Visa";
          console.log(this.cardType);
        }
        if (this.payment.cardNum.slice(0, 2) == "51") {
          this.cardType = "Master";
          console.log(this.cardType);
        }
        if (this.payment.cardNum.slice(0, 2) == '31') {
          this.cardType = "American Express";
          console.log(this.cardType);
        }
      }
      else {
        alert('Invalid card number');
      }
    });
  }

  validateOTP(): void {
    console.log(this.otp);
    console.log(this.payotp);
    if (this.otp == this.payotp) {
      this.service.registerPayment(this.payment).subscribe((result: any) => { console.log(result); });
      this.router.navigate(['bill']);
    }
    else {
      alert("Invalid OTP");
    }
  }

  /*showBill() {
    localStorage.setItem('howMany', JSON.stringify(this.ntickets));
    this.router.navigate(['bill']);
  }*/

}
