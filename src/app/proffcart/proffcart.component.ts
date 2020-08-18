import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proffcart',
  templateUrl: './proffcart.component.html',
  styleUrls: ['./proffcart.component.css']
})
export class ProffcartComponent implements OnInit {
professionals:any;
chosenProfessional = [];
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
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
}
