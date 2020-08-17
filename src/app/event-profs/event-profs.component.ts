import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-profs',
  templateUrl: './event-profs.component.html',
  styleUrls: ['./event-profs.component.css']
})
export class EventProfsComponent implements OnInit {
  eventId: any;
  eventProfs: any;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.eventId = JSON.parse(localStorage.getItem('eventProf'));
    this.service.getProfListofEvent(this.eventId).subscribe((result: any) => {
      console.log(result); this.eventProfs = result });
  }

}
