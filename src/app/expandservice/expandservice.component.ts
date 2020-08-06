import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expandservice',
  templateUrl: './expandservice.component.html',
  styleUrls: ['./expandservice.component.css']
})
export class ExpandserviceComponent implements OnInit {
  prof: any;

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  shareExperience(){
    this.prof = JSON.parse(localStorage.getItem('profDetails'));
    console.log(this.prof);
    if (this.prof) {
      this.router.navigate(['share']);
    }
    else {
      alert('Login as professional to share your experience');
    }
  }

}
