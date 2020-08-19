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
prof:any;
  
constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
  }

  addProfessional(prof : any) : void{
   this.chosenProfessional.push(prof);
  console.log(prof + "added");
  }

  done() {
    console.log(this.chosenProfessional);
    localStorage.setItem('chosenProf', JSON.stringify(this.chosenProfessional));
    this.router.navigate(['eventform']);
  }

  removeProfessional(prof : any) : void {
    const i = this.chosenProfessional.findIndex((profs) => {return prof.professionalId === profs.professionalId});
    this.chosenProfessional.splice(i, 1);
    console.log(prof + "removed");
  }
}
