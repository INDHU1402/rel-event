import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(loginId: any,password: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/UserLogin/' + loginId + '/' + password);
   }
}

