import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var jQuery: any
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  User: any;
  editObject: any;
  myEvents: any;
  eventProfs = [];
  myBookedEvents: any;
  myBlogs: any;
  eventId:number;
  to:string;
  rates = [];
  profs = [];
  rates1: string;
  profs1: string;

  constructor(private service: UserService, private router: Router) { 
    this.editObject = {userId:'',userName: '',contact: '', emailId: '',password: ''};
  }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.service.getmyEventsList(this.User.userId).subscribe((result: any) => {
      console.log(result); this.myEvents = result
    });
    this.service.getmyBookedEventsList(this.User.userId).subscribe((result: any) => {
      console.log(result); this.myBookedEvents = result
    });
    this.service.getmyBlogsList(this.User.userId).subscribe((result: any) => {
      console.log(result);this.myBlogs= result });
  }

  readmore(blog: any) {
    localStorage.setItem('Blog', JSON.stringify(blog));
    this.router.navigate(['readblog']);
  }
  
  shareEvent() {
    console.log('event id = ' + this.eventId);
    console.log('user id = ' + this.User.userId);
    console.log('to = ' + this.to);
    this.service.shareMyEvent(this.eventId, this.User.userId, this.to).subscribe((result: any) => {console.log(result); });
  }

  goToEvent(event: any): void {
    localStorage.setItem('eventDetails', JSON.stringify(event));
    this.router.navigate(['showEvent']);
  }

  showEditPopup(user: any) {
    this.editObject = user;
    jQuery('#userModel').modal('show');
  }

  updateUser() {
    this.service.updateUser(this.editObject).subscribe();
    console.log(this.editObject);
    this.router.navigate(['dashboard']);
  }

  getProfs(eventId: number) {
    this.service.getProfListofEvent(eventId).subscribe((result: any) => {
      console.log(result); this.eventProfs = result
    });
  }

  setEvent(id : number) {
    this.eventId = id;
  }

  addRating(id : any, rate : any) : void {
    this.profs.push(id)
    this.rates.push(rate);
    console.log(rate+ "added");
  }

  submit() {
    this.rates1 = this.rates.toString();
    this.profs1 = this.profs.toString();
    this.service.rateEvent(this.profs1, this.rates1).subscribe((result: any) => {console.log(result); });
    console.log("added rating");
  }

}