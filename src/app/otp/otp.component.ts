import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  userforgot:any;
  otp:number;
  userotp:number;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userforgot = JSON.parse(localStorage.getItem('userForgot'));
    this.service.verification(this.userforgot.emailId, this.userforgot.userName, this.userforgot.contact).subscribe((result2: any) => {this.otp = result2;  console.log(result2);});
    alert('OTP is sent to registered mailID');
}

validateOTP() : void {
  console.log(this.otp);
  console.log(this.userotp);
  if (this.otp == this.userotp) {
    this.router.navigate(['forgot']);
  }
  else {
    alert("Invalid OTP");
  }
}

}