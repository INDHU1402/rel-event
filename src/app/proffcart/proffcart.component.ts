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
n:string;
prof:any;
  constructor(private service: UserService, private router: Router) { 
    this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
    console.log("in constructor");

  }

  ngOnInit(): void {
   
    console.log("ngOnInit");
  }
  addProfessional(prof1 : any) : void{
   this.chosenProfessional.push(prof1);
   localStorage.setItem('n', JSON.stringify(prof1));
   this.prof = JSON.parse(localStorage.getItem('n'));
    console.log(prof1 + "added");
  }

  removeProfessional(prof : any) : void {
    const i = this.chosenProfessional.findIndex((profs) => {return prof.professionalId === profs.professionalId});
    this.chosenProfessional.splice(i, 1);
    console.log(prof + "removed");
  }
}
