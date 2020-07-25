import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLogged: any;

  registerProf(profForm: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
  
  getUser(userName: any,password: any) {
    return this.httpClient.get('RELEVENT/webapi/myresource/UserLogin/' + userName + '/' + password);
   }
   
   registerUser(user: any) {
    return this.httpClient.post('RELEVENT/webapi/myresource1/regUser/', user);
   }
  
   getProfessional(professionalName: any,password: any) {
    return this.httpClient.get('RELEVENT/webapi/myresource/ProfLogin/' + professionalName + '/' + password);
   }
   
   registerProfessional(professional: any) {
    return this.httpClient.post('RELEVENT/webapi/myresource/regProfessional/', professional);
   }

   getProfessionalList() {
    return this.httpClient.get('RELEVENT/webapi/myresource/ProfList');
   }
   
   getEventList() {
    return this.httpClient.get('RELEVENT/webapi/myresource/EventList'); 
   }
   
   /* registerEvent(eventDetails : any, fileToUpload: File) {
     const endpoint = 'RELEVENT/webapi/myresource/regEvent';
     const formData:FormData = new FormData;
     formData.append('Image', fileToUpload, fileToUpload.name);
     formData.append('eventId', eventDetails.eventId);
     formData.append('eventName', eventDetails.eventName);
     formData.append('about', eventDetails.about);
     formData.append('attendeesCount', eventDetails.attendeesCount);
     formData.append('category', eventDetails.category);
     formData.append('eventDate', eventDetails.eventDate);
     formData.append('eventType', eventDetails.eventType);
     formData.append('organiserName', eventDetails.organiserName);
     formData.append('sponsor', eventDetails.sponsor);
     formData.append('ticketPrice', eventDetails.ticketPrice);
     formData.append('venue', eventDetails.venue);
     formData.append('user', eventDetails.user);
     formData.append('professionalList', eventDetails.professionalList);
     return this.httpClient.post(endpoint, formData);
   } */

   registerEvent(eventDetails : any) {
     console.log(eventDetails);
    return this.httpClient.post('RELEVENT/webapi/myresource/regEvent/', eventDetails);
   }

   registerPayment(paymentDetails : any) {
    return this.httpClient.post('RELEVENT/webapi/myresource/regPayment/', paymentDetails);
   }

   setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   setUserLoggedOut(): void { // logout success
    this.isUserLogged = false;
   }
   getUserLogged(): any { // call this in AuthGuard
     return this.isUserLogged;
}

}
