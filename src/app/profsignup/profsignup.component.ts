import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profsignup',
  templateUrl: './profsignup.component.html',
  styleUrls: ['./profsignup.component.css']
})
export class ProfsignupComponent implements OnInit {

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

  constructor(private service: UserService, private router: Router) {
    this.imageUrl = 'src/assets/img/birthday.jpg';
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
      this.service.isUsernameExists(this.profDetails.professionalName).subscribe((result: any) => { this.check = result;  console.log("result value = " + result);

      if (result) {
        this.service.verification(this.profDetails.mailId, this.profDetails.professionalName,this.profDetails.mobile).subscribe((result1: any) => {this.otp = result1;  console.log(result1);});
      }
      else {
        alert('Username already exists');
      } });
    }
    else {
      alert('Please write correct password');
    }
  }j

}
