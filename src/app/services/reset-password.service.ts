import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

 //token 
 TokenResetPassword!:string  ;
  
 //API OF CONFIRMATION EXISTANCE OF EMAIL
   ConfirmeUrlEmail:string= environment.host+"/api/v2/home/users/ResetPassword";
 
   //API OF CONFIRAMATION OF REST TOKEN 
   ConfirmeTokenUrl:string= environment.host+"/api/v2/home/users/ResetPasswordValidation?token="
 
   //API OF RESET YOUR PASSWORD
   ResetNewPasswordUrl:string= environment.host+"/api/v2/home/users/newPassword/";
 
   //CurrentEmail
 CurrentEmail!:string;
 
 //RepeateYourPassword usefl in guard 
 RepeateYourPassword:any;
 
   constructor(private http:HttpClient) {
        
    }
 
 
   /*SEND EMAIL OF CONFIRMATION COMPTE */
   ConfirmeExistantCompte(email:string){
     return this.http.post<any>(this.ConfirmeUrlEmail,{email : email})
     
 
   }
   ConfirmeToken(token:string){return this.http.get(this.ConfirmeTokenUrl+token);
 
   }
   ResetNewPassword(password:string,repeatNewPassword:string){
     return this.http.post(this.ResetNewPasswordUrl+localStorage.getItem("TokenReset"), { newPassword: password, repeatNewPassword : repeatNewPassword})
 
   }
}
