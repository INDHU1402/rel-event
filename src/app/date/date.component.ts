import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {

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
       if(this.date2 > this.date1) {
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

  eventdate : Date;
  howManyDays:number;
  days = ['1','2','3','4','5','6','7','8','9'];
  constructor() { }

  ngOnInit(): void {
  }

  getdate() : Date {
    if (this.howManyDays == 1) {
      console.log(this.eventdate);
      return this.eventdate;
    }
    var d = new Date(this.eventdate.getTime() + (1000 * 60 * 60 * 24 * (this.howManyDays - 1)));
    console.log(d);
    return d;
  }

}
