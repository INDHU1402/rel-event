import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-form',
  templateUrl: './tech-form.component.html',
  styleUrls: ['./tech-form.component.css']
})
export class TechFormComponent implements OnInit {
  
 
  professionals: any;
  chosenProfessional = [];
  term: string;
  name: string;
  value: any;
  ratings = [];
  ids = [];
  selected_games: { name: string; id: number; selected: boolean; }[];
  
  searchText: string = "";
  selected_count: number = 0;


  serviceType: any = ['Photographer', 'Food supplier', 'Decorator', 'Dancer', 'Singer', 'Venue owner', 'Technician', 'Others'];
games = [
    {
      name:'Photographer',
      id:1,
      selected:false
    },
    {
      name:'Decorator',
      id:2,
      selected:false
    },
    {
      name:'Food supplier',
      id:3,
      selected:false
    },
    {
      name:'Venue owner',
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
  i: any;


  // Getting Selected Games and Count
  getSelected() {
    this.selected_games = this.games.filter(s => {
      return s.selected;
    });
    this.selected_count = this.selected_games.length;
    //alert(this.selected_games);    
  }

  // Clearing All Selections
  clearSelection() {
    this.searchText = "";
    this.games = this.games.filter(g => {
      g.selected = false;
      return true;
    });
    this.getSelected();
  }

  //Delete Single Listed Game
  deleteGame(id: number) {
    this.searchText = "";
    this.games = this.games.filter(g => {
      if (g.id == id)
        g.selected = false;

      return true;
    });
    this.getSelected();
  }

  clearFilter() {
    this.searchText = "";
  }

  prof(p : any) {
    localStorage.setItem("prof", JSON.stringify(p));
    this.router.navigate(['professional']);
  }

  
  myFilter1 = (d: Date | null): boolean => {

    this.date1 = Number(new Date().toDateString().slice(8, -5));
    this.month1 = new Date().getMonth();
    this.year1 = Number(new Date().toDateString().slice(-4));

    this.date2 = Number(d.toDateString().slice(8, -5));
    this.month2 = d.getMonth();
    this.year2 = Number(d.toDateString().slice(-4));

    if (this.year2 > this.year1) {
      return true;
    }

    else if (this.year2 == this.year1) {
      if (this.month2 > this.month1) {
        return true;
      }
      if (this.month2 == this.month1) {
        if (this.date2 > this.date1 + 1) {
          return true;
        }
        else {
          return false;
        }
      }
    }

    return false;
  }

  date1: number;
  month1: number;
  year1: number;

  date2: number;
  month2: number;
  year2: number;
  fileToUpload: File;
  reader: FileReader;
  imageUrl: String;
  Types: any = ['public', 'private']

  howManyDays: number;
  eventdate: Date;
  d: Date;
  Sponsor: any = ['yes', 'no'];

  days = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  Category: any = ['Conference','Workshop','Talk','Hackathon','Tradeshow'];
  eventDetails = {
    eventType: '', about: '', attendeesCount: '', category: '', eventName: '', guest1: '', guest2: '', guest3: '',
    organiserName: '', sponsor: '', ticketPrice: '', venue: '', eventStartDate: '', eventEndDate: '', poster: '',
    startTime: '', endTime: '', startOverview: '', endOverview: '', time1: '', time2: '', overview1: '', overview2: '',
    user: { userId: '', contact: '', emailId: '', password: '', userName: '' },
    professionalList: [{ professionalId: '', professionalName: '', address: '', experience: '', mailId: '', mobile: '', serviceName: '', serviceType: '', serviceImage: '' }]
  };
  User: any;
  constructor(private service: UserService, private router: Router) {
    this.imageUrl = 'src/assets/img/birthday.jpg';
    this.getSelected();
  }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.service.getProfessionalList().subscribe((result: any) => {
      console.log(result); this.professionals = result
      for (let i of result) {
        this.service.myrating(i.professionalId).subscribe((op: any) => {
          this.ids.push(op);
          console.log('professional IDs = ' + this.ids);
        });
      }
    });
  }

  isLoading = false;
  
  toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);};

  addProfessional(prof: any): void {
    this.chosenProfessional.push(prof);
    console.log(prof + "added");
  }

  removeProfessional(prof: any): void {
    const i = this.chosenProfessional.findIndex((profs) => { return prof.professionalId === profs.professionalId });
    this.chosenProfessional.splice(i, 1);
    console.log(prof + "removed");
  }

  getdate(): Date {
    if (this.howManyDays == 1) {
      console.log(this.eventdate);
      return this.eventdate;
    }
    this.d = new Date(this.eventdate.getTime() + (1000 * 60 * 60 * 24 * (this.howManyDays - 1)));
    console.log(this.d);
    return this.d;
  }


  getRating(profId: number) {
    this.service.myrating(profId).subscribe((op: any) => {
      console.log(op);
      this.value = op;
    });
  }


  eventSubmit(regForm: any): void {
    this.eventDetails.professionalList = this.chosenProfessional;
    this.eventDetails.user.userId = this.User.userId;
    console.log(this.eventDetails);
    this.eventDetails.eventStartDate = this.eventdate.toDateString();
    this.eventDetails.eventEndDate = this.getdate().toDateString();

    this.service.postFile(this.eventDetails, this.fileToUpload).subscribe(
      data => {
        console.log('success1');
        this.imageUrl = '/assets/img/bg.jpg';
      }
    );
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    //  this.service.registerEvent(this.eventDetails).subscribe((result: any) => { result = this.eventDetails; console.log(result) } );
  }
  handleFileInput(file: FileList) {
    console.log("in handle");

    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }



  done() {
    console.log(this.chosenProfessional);

  }

  status() {
    if ((this.selected_games.length) > 0) {
      return true;
    }
    return false;
  }


}