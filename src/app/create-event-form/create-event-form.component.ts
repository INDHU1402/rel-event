import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.css']
})
export class CreateEventFormComponent implements OnInit {

  fileToUpload:File;
   reader:FileReader;
   imageUrl:String;
   Types: any = ['public', 'private']
   professionals: any;
   term:string;
   Sponsor: any = ['yes', 'no']
   chosenProfessional = [];
   Category: any = ['workshop', 'seminar', 'hackathon', 'fest', 'talk', 'show', 'exhibition'];
   eventDetails = {eventType:'', about:'', attendeesCount:'', category:'', eventName:'',guest1:'',guest2:'',guest3:'',
                   organiserName:'', sponsor:'', ticketPrice:'', venue:'',eventStartDate:'',eventEndDate:'',poster:'',
                   startTime:'',endTime:'',startOverview:'',endOverview:'',time1:'',time2:'',overview1:'',overview2:'',
                   user: {userId:'', contact:'', emailId:'', password:'', userName:''},
                   professionalList :[{professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:'', serviceImage:''}]}; 
   User: any;
   constructor(private service: UserService, private router: Router) {
     this.imageUrl = 'src/assets/img/birthday.jpg';
    }
 
   ngOnInit(): void {
     this.User = JSON.parse(localStorage.getItem('userDetails'));
     console.log(this.User);
     this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
   }
   addProfessional(prof : any) : void{
     this.chosenProfessional.push(prof);
     console.log(prof + "added");
   }
 
   goTocart() {
    console.log(this.eventDetails);
    localStorage.setItem('event', JSON.stringify(this.eventDetails));
    this.router.navigate(['cart']);
  }

   removeProfessional(prof : any) : void {
     const i = this.chosenProfessional.findIndex((profs) => {return prof.professionalId === profs.professionalId});
     this.chosenProfessional.splice(i, 1);
     console.log(prof + "removed");
   }

   eventSubmit(regForm:any): void {
    this.chosenProfessional = JSON.parse(localStorage.getItem('chosenProf'));
    this.eventDetails = JSON.parse(localStorage.getItem('event'));
    console.log("event object " + this.eventDetails);
    console.log(this.chosenProfessional);
    this.eventDetails.professionalList = this.chosenProfessional;
    this.eventDetails.user.userId = this.User.userId;
    console.log(this.eventDetails);
    this.service.postFile(this.eventDetails,this.fileToUpload).subscribe(
      data => { 
        console.log('success1');
        this.imageUrl='/assets/img/bg.jpg';
      }
      );
    alert('Event created successfully!');
    this.router.navigate(['']);
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
}