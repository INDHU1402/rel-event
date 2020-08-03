import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  serviceType: any = ['photographer', 'food supplier', 'decorator', 'entertainer', 'venue owner', 'others'];
  check: boolean;
  otp:number;
  userotp:number;
  confirmPassword:string;
  user = {userName:'', contact:'', emailId:'', password:''};
  constructor(private service: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.user);
    console.log(this.confirmPassword);
    if (this.user.password === this.confirmPassword) {
      this.service.isUsernameExists(this.user.userName).subscribe((result: any) => { this.check = result;  console.log("result value = " + result);

      if (result) {
        this.service.verification(this.user.emailId, this.user.userName,this.user.contact).subscribe((result1: any) => {this.otp = result1;  console.log(result1);});
      }
      else {
        alert('Username already exists');
      } });
    }
    else {
      alert('Please write correct password');
    }
  }

  validateOTP() : void {
    console.log(this.otp);
    console.log(this.userotp);
    if (this.otp == this.userotp) {
      this.service.registerUser(this.user).subscribe((details: any) => {console.log(details)});
      this.router.navigate(['login']);
    }
    else {
      alert("Invalid OTP");
    }
  }

  registerProf(profForm: any): void {
    if (profForm.password === profForm.confirmpassword) {
      delete profForm.confirmpassword;
      this.service.registerProfessional(profForm).subscribe((result: any) => { console.log(result); });
      console.log(profForm);
      this.router.navigate(['login']);
    }
    else {
      alert('Please write correct password');
    }
  }

}