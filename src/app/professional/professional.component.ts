import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  prof: any;
  myEvents: any;
  status: boolean;

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.prof = JSON.parse(localStorage.getItem('prof'));
    if (this.prof.professionalName == null) {
      this.status = false;
    }
    else {
      this.status = true;
    }
    this.service.getMyEvents(this.prof.professionalId).subscribe((result: any) => {
      console.log(result);this.myEvents= result });
  }

  goToEvent(event: any): void {
    localStorage.setItem('eventDetails', JSON.stringify(event));
    this.router.navigate(['showEvent']);
  }
 

}