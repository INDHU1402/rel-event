import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails'));
  }

  redirect(): void {
    if (this.user) {
      this.router.navigate(['createEvent']);
    }
    else {
      alert('Please login to create event');
    }
  }

}