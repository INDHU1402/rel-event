import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  pass : String;
  password: String;
  user: any;
  editObject: any;
  constructor(private service: UserService, private router: Router) { 
    this.editObject = {userId:'',userName: '',contact: '', emailId: '',password: ''};
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.user);
    this.editObject = this.user;
    console.log(this.editObject);
  }

  update() {
    if (this.pass === this.password) {
      this.editObject.password = this.password;
      this.service.updateUser(this.editObject).subscribe();
      console.log(this.editObject);
    }
    else {
      alert('Password did not match');
    }
  }

}
