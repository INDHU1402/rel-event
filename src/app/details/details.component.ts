import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userName:string;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.service.getSocialUser(this.userName).subscribe((result1: any) => {
      if(result1) {
        localStorage.setItem('userForgot', JSON.stringify(result1));  
        this.router.navigate(['fp2']);
      }
      else {
        alert("Username doesn't exist");
      }
    });
  }
}
