import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  urlLogin="http://localhost:8084/api/v2/home/users/signin";


  constructor(private HttpClient:HttpClient) {

   }

   logIn( email:string ,password:string){
     return this.HttpClient.post(this.urlLogin,{email,password},{ observe: "response"})
     

   }

}
