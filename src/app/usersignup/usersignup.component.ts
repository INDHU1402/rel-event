import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  serviceType: any = ['photographer', 'food supplier', 'decorator', 'entertainer', 'venue owner', 'others'];
  check: boolean;
  otp:number;
  userotp:number;
  profotp:number;
  confirmPassword:string;
  user = {userName:'', contact:'', emailId:'', password:''};
  fileToUpload:File;
  reader:FileReader;
  imageUrl:String;
  profDetails= {professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:'',serviceImage:'',password:''};

  constructor(private authService: SocialAuthService, private service: UserService, private router: Router) {
    this.imageUrl = 'src/assets/img/birthday.jpg';
  }

  ngOnInit(): void {

  }
  isLoading = false;
  
  toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);};

  register(): void {
    console.log(this.user);
    console.log(this.confirmPassword);
    if (this.user.password === this.confirmPassword) {
      this.service.isUsernameExists(this.user.userName).subscribe((result: any) => { this.check = result;  console.log("result user value = " + result);
      this.service.isProfessionalExists(this.user.userName).subscribe((result3: any) => { this.check = result3;  console.log("result prof value = " + result3);
      if (result && result3) {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        this.service.verification(this.user.emailId, this.user.userName,this.user.contact).subscribe((result1: any) => {this.otp = result1;  console.log(result1);});
      }
      else {
        alert('Username already exists');
      } }); });
    }
    else {
      alert('Please write correct password');
    }
  }
   handleFileInput(file:FileList){
     console.log("in handle");
     
     this.fileToUpload = file.item(0);
     this.reader = new FileReader();
     this.reader.readAsDataURL(this.fileToUpload);
     this.reader.onload= (event:any)=>{
       this.imageUrl= event.target.result;
     };
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
  validateOTPProf(): void {
    console.log(this.otp);
    console.log(this.profotp);
    if (this.otp == this.profotp) {
      this.service.postserviceImage(this.profDetails,this.fileToUpload).subscribe(
        data => {
          console.log('success1');
          this.imageUrl='/assets/img/bg.jpg';
          this.router.navigate(['login']);
        }
       
        );
    }
    else {
      alert("Invalid OTP");
    }
  }

  registerProf(): void {
    console.log(this.user);
    console.log(this.confirmPassword);
    if (this.profDetails.password === this.confirmPassword) {
      this.service.isUsernameExists(this.user.userName).subscribe((result: any) => { this.check = result;  console.log("result user value = " + result);
      this.service.isProfessionalExists(this.user.userName).subscribe((result3: any) => { this.check = result3;  console.log("result prof value = " + result3);
      if (result && result3) {
        this.service.verification(this.profDetails.mailId, this.profDetails.professionalName,this.profDetails.mobile).subscribe((result1: any) => {this.otp = result1;  console.log(result1);});
      }
      else {
        alert('Username already exists');
      }
    });
  });
    }
    else {
      alert('Please write correct password');
    }
  }
}
