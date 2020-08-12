import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  events : any;
  cat :string;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  
    this.cat = localStorage.getItem("category");
    console.log(this.cat);
    this.service.getEventList(this.cat).subscribe((result: any) => { console.log(result); this.events = result} );
  }

  goToEvent(event : any) : void {
    localStorage.setItem('eventDetails', JSON.stringify(event));
    this.router.navigate(['showEvent']);
  }

}
