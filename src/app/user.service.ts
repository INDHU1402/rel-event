import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLogged: any;

  
  postFile(regForm,fileToUpload : File){
    const endpoint ='RESTAPI/webapi/myresource/regEvent/';
    const formData:FormData=new FormData();
    console.log("success");
    formData.append('poster',fileToUpload,fileToUpload.name);
    formData.append('eventDetails',JSON.stringify(regForm));
    console.log("1");
    return this.httpClient.post(endpoint,formData);
  }
  registerProf(profForm: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
  
  getUser(userName: any,password: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/UserLogin/' + userName + '/' + password);
   }

   isUsernameExists(userName: string) {
    return this.httpClient.get('RESTAPI/webapi/myresource/CheckUser/' + userName);
   }

  /* getUserByUserName(userName : string) {
    return this.httpClient.get('RELEVENT/webapi/myresource/getUserByUserName/'  + userName);
   }

   forgotpassword(mail: string) {
    return this.httpClient.get('RELEVENT/webapi/myresource/forgotpassword/' + mail);
   }
   
*/
   sponsorship(organiserId : number, text : string) {
    return this.httpClient.get('RESTAPI/webapi/myresource/sponsor/' + organiserId + '/' + text);
   }

   verification(mail : string, name : string, mobile : string) {
    return this.httpClient.get('RESTAPI/webapi/myresource/verification/'+ mail + '/' + name + '/' + mobile);
   }

   registerUser(user: any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/regUser/', user);
   }
  
   getProfessional(professionalName: any,password: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/ProfLogin/' + professionalName + '/' + password);
   }
   
   registerProfessional(professional: any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/regProfessional/', professional);
   }

   getProfessionalList() {
    return this.httpClient.get('RESTAPI/webapi/myresource/ProfList');
   }
   
   getEventList() {
    return this.httpClient.get('RESTAPI/webapi/myresource/EventList'); 
   }

   addBlog(blog: any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/addBlog/', blog);
   }

   addExperience(exp: any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/addExperience/', exp);
   }

   getBlogList() {
    return this.httpClient.get('RESTAPI/webapi/myresource/BlogList');
   }

   registerEvent(eventDetails : any) {
     console.log(eventDetails);
    return this.httpClient.post('RESTAPI/webapi/myresource/regEvent/', eventDetails);
   }

   registerPayment(paymentDetails : any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/regPayment/', paymentDetails);
   }
   getEventById(eventId:number) {
    return this.httpClient.get('RESTAPI/webapi/myresource/getEvent/'+ eventId); 
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
