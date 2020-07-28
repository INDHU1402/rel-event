import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-filter-professional',
  templateUrl: './filter-professional.component.html',
  styleUrls: ['./filter-professional.component.css']
})

export class FilterProfessionalComponent implements OnInit {
  term:string;
  
  professionals: any;
  eventDetails : any;
  User:any;
  chosenProfessional = [];
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.eventDetails = JSON.parse(localStorage.getItem('eventdetails'));
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
  }
  addProfessional(prof : any) : void{
    this.chosenProfessional.push(prof);
    console.log(prof + "added");
  }

  removeProfessional(prof : any) : void {
    const i = this.chosenProfessional.findIndex((profs) => {return prof.professionalId === profs.professionalId});
    this.chosenProfessional.splice(i, 1);
    console.log(prof + "removed");
  }
  regEvent(): void {
    this.eventDetails.professionalList = this.chosenProfessional;
    console.log(this.eventDetails.professionalList);
    
    this.service.registerEvent(this.eventDetails).subscribe((result: any) => { result = this.eventDetails; console.log(result) } );
  }

}
