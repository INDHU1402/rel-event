import { Component, OnInit, VERSION } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-event',
  templateUrl: './personal-event.component.html',
  styleUrls: ['./personal-event.component.css']
})
export class PersonalEventComponent implements OnInit {

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
    cart: any;
    
    
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
    
  
  
  
    myFilter1 = (d: Date | null): boolean => {
  
      this.date1 = Number(new Date().toDateString().slice(8,-5));
      this.month1 = new Date().getMonth();
      this.year1 = Number(new Date().toDateString().slice(-4));
    
      this.date2 = Number(d.toDateString().slice(8,-5));
      this.month2 = d.getMonth();
      this.year2 = Number(d.toDateString().slice(-4));
  
     if (this.year2 > this.year1) {
       return true;
     }
  
     else if (this.year2 == this.year1) {
       if (this.month2 > this.month1) {
        return true;
      }
       if (this.month2 == this.month1){
         if(this.date2 > this.date1 + 1) {
           return true;
         }
         else {
           return false;
         }
       }
     }
  
     return false;
    }
  
    date1:number;
    month1:number;
    year1:number;
  
    date2:number;
    month2:number;
    year2:number;
    fileToUpload:File;
     reader:FileReader;
     imageUrl:String;
     Types: any = ['public', 'private']
   
     howManyDays:number;
     eventdate:Date;
     d:Date;
     Sponsor: any = ['yes', 'no'];
   
     days = ['1','2','3','4','5','6','7','8','9'];
     Category: any = ['Show', 'Carnival', 'Fest', 'Sport Event', 'Plays', 'Charitable event', 'Art event'];
     eventDetails = {eventType:'', about:'', attendeesCount:'', category:'', eventName:'',guest1:'',guest2:'',guest3:'',
                     organiserName:'', sponsor:'', ticketPrice:'', venue:'',eventStartDate:'',eventEndDate:'',poster:'',
                     startTime:'',endTime:'',startOverview:'',endOverview:'',time1:'',time2:'',overview1:'',overview2:'',
                     user: {userId:'', contact:'', emailId:'', password:'', userName:''},
                     professionalList :[{professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:'', serviceImage:''}]}; 
     User: any;
     constructor(private service: UserService, private router: Router) {
       this.imageUrl = 'src/assets/img/birthday.jpg';
       this.name = `Angular! v${VERSION.full}`;
    this.getSelected();
      }
   
     ngOnInit(): void {
       this.User = JSON.parse(localStorage.getItem('userDetails'));
       console.log(this.User);
       this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
      console.log(this.professionals);
    
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
  
     getdate() : Date {
      if (this.howManyDays == 1) {
        console.log(this.eventdate);
        return this.eventdate;
      }
      this.d = new Date(this.eventdate.getTime() + (1000 * 60 * 60 * 24 * (this.howManyDays - 1)));
      console.log(this.d);
      return this.d;
    }
  
  
     eventSubmit(regForm:any): void {
       this.eventDetails.professionalList = this.chosenProfessional;
       this.eventDetails.user.userId = this.User.userId;
       console.log(this.eventDetails);
       this.eventDetails.eventStartDate = this.eventdate.toDateString();
       this.eventDetails.eventEndDate = this.getdate().toDateString();
       
       this.service.postFile(this.eventDetails,this.fileToUpload).subscribe(
         data => { 
           console.log('success1');
           this.imageUrl='/assets/img/bg.jpg';
         }
         );
     //  this.service.registerEvent(this.eventDetails).subscribe((result: any) => { result = this.eventDetails; console.log(result) } );
     }
     handleFileInput(file:FileList){
       console.log("in handle");
       
       this.fileToUpload = file.item(0);
       this.reader = new FileReader();
       this.reader.readAsDataURL(this.fileToUpload);
       this.reader.onload= (event:any)=>{
         this.imageUrl= event.target.result;
       };
     }
  
     
   
     done() {
       console.log(this.chosenProfessional);
  
       this.router.navigate(['personalEvent']);
     }
  
     status() {
      if ((this.selected_games.length) > 0) {
        return true;
      } 
      return false;
    }
  
   
  }
  