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
  professionals: any;
  chosenProfessional = [];
  eventDetails = {eventId:'', eventType:'', about:'', attendeesCount:'', category:'', eventDate:'', eventName:'',
                  organiserName:'', sponsor:'', ticketPrice:'', venue:'',
                  user: {userId:'', contact:'', emailId:'', password:'', userName:''},
                  professionalList :[{professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:''}]};
  //fileToUpload: File;
  //reader: FileReader;
  //imageUrl: string; 
  User: any;
  
  constructor(private service: UserService, private router: Router) {
    //this.imageUrl = '/assets/img/bg4.jpg';
   }

  ngOnInit(): void {
    this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    console.log(this.User);
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

  /*handleFileInput(file : FileList) {
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event : any) => {
      this.imageUrl = event.target.result;
    };
  }*/

  regEvent(registerForm: any): void {
    this.eventDetails.professionalList = this.chosenProfessional;
    this.eventDetails.user = this.User;
    console.log(this.eventDetails.professionalList);
    //this.service.registerEvent(this.eventDetails, this.fileToUpload).subscribe((result: any) => { result = this.eventDetails; console.log(result) } );
    this.service.registerEvent(this.eventDetails).subscribe((result: any) => { result = this.eventDetails; console.log(result) } );
  }
 

}