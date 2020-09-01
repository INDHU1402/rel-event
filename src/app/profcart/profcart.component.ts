import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profcart',
  templateUrl: './profcart.component.html',
  styleUrls: ['./profcart.component.css']
})
export class ProfcartComponent implements OnInit {
  professionals: any;
  chosenProfessional = [];

  constructor(private service: UserService, private router: Router) { }
  term: string;

  ngOnInit(): void {
    this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
    console.log(this.professionals);
  }

  addProfessional(prof : any) : void{
    this.chosenProfessional.push(prof);
   console.log(prof + "added");
   }
 
   done() {
     console.log(this.chosenProfessional);
     localStorage.setItem('chosenProf', JSON.stringify(this.chosenProfessional));
     this.router.navigate(['techform']);
   }
 
   removeProfessional(prof : any) : void {
     const i = this.chosenProfessional.findIndex((profs) => {return prof.professionalId === profs.professionalId});
     this.chosenProfessional.splice(i, 1);
     console.log(prof + "removed");
   }

}
