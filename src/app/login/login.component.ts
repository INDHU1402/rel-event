import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any;
  link : string;
  mail : string;
  constructor(private service: UserService,private router: Router) { }
  
  ngOnInit(): void {

  }
/*
  resetPassword() {
    this.service.forgotpassword(this.mail).subscribe((result: any) => {console.log(result);});
    alert('Please Enter the OTP to continue');
    this.router.navigate(['otp']);
  }*/
  
  loginSubmit(loginForm: any): void{
    this.service.getUser(loginForm.userName,loginForm.password).subscribe((result: any) => {
      console.log(result);
      localStorage.setItem('userDetails', JSON.stringify(result));
      if(result) {
        this.service.setUserLoggedIn();
        this.router.navigate(['home']);
      }
      else {
        alert('Invalid credentials');
      }});
    }

  profSubmit(profForm: any): void{
    this.service.getProfessional(profForm.professionalName,profForm.password).subscribe((result: any) => {
      console.log(result);
      localStorage.setItem('profDetails', JSON.stringify(result));
        if(result) {
          this.service.setUserLoggedIn();
          this.router.navigate(['home']); 
        }
        else {
          alert('Invalid credentials');
        }});
      }

    navigateToSignUp(): void {
      this.router.navigate(['signup']);
    }

}
