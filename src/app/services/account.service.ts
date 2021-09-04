import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  
   //CurrentEmail
  

  //ResetPassword 
  ResetPasswordUrl=environment.host+"/api/v2/home/users/changePassword"

 

  //change DATA Of Account
AccountUrl=environment.host+"/api/v2/home/users/updateAccount?email="+localStorage.getItem("iMakerBotEmail");


ResetPassword(RecentPassword:string,NewPassword:string,repeatNewPassword:string){
  return this.http.put<any>(this.ResetPasswordUrl,{ lastPassword:RecentPassword,newPassword:NewPassword,repeatNewPassword:repeatNewPassword},{headers: new HttpHeaders({'Authorization':localStorage.getItem("Token")}),observe: 'response'})


}


UpdateAccount(email:any,websiteCompany:any,CompanyNumber:any,Phone:any,password:any,language:any,timeZone:any,fullName:any){
  return this.http.put(this.AccountUrl,{email:email,companyEmployeesNumber:CompanyNumber,companyWebsite:websiteCompany,fullName:fullName,language:language,password:password,phoneNumber:Phone,timeZone:timeZone})

}






}