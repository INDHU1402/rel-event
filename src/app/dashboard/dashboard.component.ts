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
  
  getProfs(eventId: number) {
    this.service.getProfListofEvent(eventId).subscribe((result: any) => {
      console.log(result); this.eventProfs = result
    });
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

}