import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-gatherings',
  templateUrl: './personal-gatherings.component.html',
  styleUrls: ['./personal-gatherings.component.css']
})
export class PersonalGatheringsComponent implements OnInit {

  fileToUpload:File;
  reader:FileReader;
  imageUrl:String;
  Types: any = ['public', 'private']
  professionals: any;
  term:string;
  Sponsor: any = ['yes', 'no']
  chosenProfessional = [];
  Category: any = ['conference', 'workshop', 'hackathon', 'fest', 'talk', 'tradeShow'];
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

  removeProfessional(prof : any) : void {
    const i = this.chosenProfessional.findIndex((profs) => {return prof.professionalId === profs.professionalId});
    this.chosenProfessional.splice(i, 1);
    console.log(prof + "removed");
  }
  eventSubmit(regForm:any): void {
    this.eventDetails.professionalList = this.chosenProfessional;
    this.eventDetails.user.userId = this.User.userId;
    console.log(this.eventDetails);
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
}
