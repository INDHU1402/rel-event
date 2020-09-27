import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  events : any;
  cat :string;
  term: string;
  cy:any;
  sy:any;
  cm:any;
  sm:any;
  cd:any;
  sd:any;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  
    this.cat = localStorage.getItem("category");
    console.log(this.cat);
    this.service.getEventList(this.cat, "public").subscribe((result: any) => { console.log(result); this.events = result} );
    console.log(this.events);
  }

  goToEvent(event : any) : void {
    localStorage.setItem('eventDetails', JSON.stringify(event));
    this.router.navigate(['showEvent']);
  }
  calTime(startDate:any){
    var date1 = startDate.split('-')
    startDate = date1[1] + '/' +date1[0] +'/' +date1[2];
    this.cy=new Date().getFullYear().toString();
    this.sy=new Date(startDate).getFullYear().toString();
    this.cm=new Date().getMonth().toString();
    this.sm=new Date(startDate).getMonth().toString();
    this.cd=new Date().getDate().toString();
   this.sd= new Date(startDate).getDate().toString();
    if (Number(this.sy) >= Number(this.cy)){
      if (Number(this.sm) >= Number(this.cm)) {
        if (Number(this.sd) > Number(this.cd)){
          return true;
        }
      }
    }
      }

}
