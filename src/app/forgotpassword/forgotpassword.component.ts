import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  newpassword : string;
  confirmnewpassword : string;
  userName: string;
  user : any;

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  changepassword() {
    /*this.service.getUserByUserName(this.userName).subscribe((result: any) => { this.user = result; console.log(result);});*/
    console.log(this.user);
    console.log(this.newpassword, this.confirmnewpassword);
  }
}
