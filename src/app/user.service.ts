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
    return this.httpClient.post('RELEVENT/webapi/myresource/regUser/', user);
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

   addBlog(blog: any) {
    return this.httpClient.post('RELEVENT/webapi/myresource/addBlog/', blog);
   }

   getBlogList() {
    return this.httpClient.get('RELEVENT/webapi/myresource/BlogList');
   }

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
