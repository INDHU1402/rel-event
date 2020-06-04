import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: any;

  constructor(private service: UserService,private router: Router) { }
  
  ngOnInit(): void {
  }
  loginSubmit(loginForm: any): void{
    this.service.getUser(loginForm.loginId,loginForm.password).subscribe((result: any) => {
      if(result) {
        this.router.navigate(['home']);
        console.log(result); this.employee = result;  
      }
      else {
        alert('Invalid credentials');
      }
    });
    }

}
