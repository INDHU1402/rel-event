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
  username: string;
  check: boolean;
  constructor(private service: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register(registerForm: any): void {
    if (registerForm.password === registerForm.confirmpassword) {
      delete registerForm.confirmpassword;

      this.service.isUsernameExists(registerForm.userName).subscribe((result: any) => { this.check = result;  console.log("result value = " + result);

      if (result) {
        localStorage.setItem('userobject', JSON.stringify(registerForm));
        this.router.navigate(['otp']);
      }
      else {
        alert('Username already exists');
      } });
    }
    else {
      alert('Please write correct password');
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