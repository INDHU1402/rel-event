import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var jquery: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  Types: any = ['public', 'private']
  Sponsor: any = ['yes', 'no']
  Category: any = ['conference', 'workshop', 'seminar', 'hackathon', 'tech-fest', 'talk', 'training session', 'others']
  eventDetails = {eventType:'', about:'', attendeesCount:'', category:'', eventDate:'', eventName:'',
                  organiserName:'', sponsor:'', ticketPrice:'', venue:'',
                  user: {userId:'', contact:'', emailId:'', password:'', userName:''},
                  professionalList :[{professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:''}]}; 
  User: any;
  
  constructor(private service: UserService, private router: Router) {
  }

  ngOnInit(): void {
  //  this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.User);
    
  }

  /*handleFileInput(file : FileList) {
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event : any) => {
      this.imageUrl = event.target.result;
    };
  }*/

  regEvent(registerForm: any): void {
       this.eventDetails.user.userId = this.User.userId;
    localStorage.setItem("eventdetails",JSON.stringify(this.eventDetails));
    this.router.navigate(['filerProfessional']);
  //  this.service.registerEvent(this.eventDetails).subscribe((result: any) => { result = this.eventDetails; console.log(result) } );
  }
 

}