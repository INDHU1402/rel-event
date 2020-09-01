import { Component, OnInit, VERSION } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proffcart',
  templateUrl: './proffcart.component.html',
  styleUrls: ['./proffcart.component.css']
})
export class ProffcartComponent implements OnInit {

/*professionals:any;
chosenProfessional = [];
prof:any;
searchedKeyword: string;


selected_games: { name: string; id: number; selected: boolean; }[];
  name:string;
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

  status() {
    if ((this.selected_games.length) > 0) {
      return true;
    } 
    return false;
  }*/


  constructor() { }

  ngOnInit(): void {
  }

  term: string;

  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ]

}
