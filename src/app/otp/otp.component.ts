import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  
  user:any;
  verify:number;
  result:number;
  otp:number;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userobject'));
  }

getotp(){
  console.log(this.user);
  this.service.verification(this.user.emailId, this.user.userName, this.user.contact).subscribe((result: any) => {
  this.verify = result; });
  }

submitotp() {
  if (this.verify === this.otp) {
    this.service.registerUser(this.user).subscribe((details: any) => {console.log(details)});
    this.router.navigate(['login']);
  }
  else {
    alert("Invalid OTP");
  }
}}