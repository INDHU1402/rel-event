import { Component, OnInit, VERSION } from '@angular/core';
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
  term: string;
  name: string;

  selected_games: { name: string; id: number; selected: boolean; }[];

  searchText:string = "";
  selected_count:number = 0;

  
  // Data Object to List Games
  games = [
    {
      name:'photographer',
      id:1,
      selected:false
    },
    {
      name:'decorator',
      id:2,
      selected:false
    },
    {
      name:'caterer',
      id:3,
      selected:false
    },
    {
      name:'Florist',
      id:4,
      selected:false},
    {
      name:'Dancer',
      id:5,
      selected:false
    },
    {
      name:'Singer',
      id:6,
      selected:false},
    {
      name:'Technician',
      id:7,
      selected:false
    }
  ]
  
  
  // Getting Selected Games and Count
  getSelected(){
     this.selected_games =  this.games.filter( s => {
          return s.selected;
        });
     this.selected_count = this.selected_games.length;    
     //alert(this.selected_games);    
  }
  
  // Clearing All Selections
  clearSelection(){
    this.searchText = "";
    this.games =  this.games.filter( g => {
          g.selected = false;
          return true;
        });
    this.getSelected();    
  }
  
  //Delete Single Listed Game
  deleteGame(id:number){
    this.searchText = "";
    this.games =  this.games.filter( g => {
          if(g.id == id)
          g.selected = false;
          
          return true;
        });
    this.getSelected(); 
  }
  
  clearFilter(){
    this.searchText = "";
  }
  



  constructor(private service: UserService, private router: Router) {

  this.name = `Angular! v${VERSION.full}`;
  this.getSelected();

   }
 

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
     sessionStorage.setItem('chosenProf', JSON.stringify(this.chosenProfessional));
     this.router.navigate(['createEvent']);
   }
 
   removeProfessional(prof : any) : void {
     const i = this.chosenProfessional.findIndex((profs) => {return prof.professionalId === profs.professionalId});
     this.chosenProfessional.splice(i, 1);
     console.log(prof + "removed");
   }

   status() {
    if ((this.selected_games.length) > 0) {
      return true;
    } 
    return false;
  }
}
