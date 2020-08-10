import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profevents',
  templateUrl: './profevents.component.html',
  styleUrls: ['./profevents.component.css']
})
export class ProfeventsComponent implements OnInit {
  Prof: any;
  myEvents: any;

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.Prof = JSON.parse(localStorage.getItem('profDetails'));
    this.service.getMyEvents(this.Prof.professionalId).subscribe((result: any) => {
      console.log(result);this.myEvents= result });
  }

}
