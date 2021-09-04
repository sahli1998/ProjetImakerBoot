import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntentsService {

  
  //GetAllIntentsUrl
  AllUrlIntents=environment.host2+"/api/v1/bot/"+localStorage.getItem("idCurrentBot")+"/intent";

  //RechercheId
UrlIntents=environment.host2+"/api/v1/bot/intent/";

//AddNewIntent
UrlAddIntent=environment.host2+"/api/v1/bot/"+localStorage.getItem("idCurrentBot")+"/intent";

//DeleteIntentUrl
UrlDeleteIntent=environment.host2+"/api/v1/bot/intent/";

//UpdateIntentUrl
UrlUpdateIntent=environment.host2+"/api/v1/bot/intent/";


//RechercheAllExamleIntents
UrlGetExampleIntents=environment.host2+"/api/v1/bot/intent/";

//UpdateExampleIntent
UrlUpdateExampleIntent=environment.host2+"/api/v1/bot/intent/example/";

//AddExampleIntent
UrlAddExampleIntent=environment.host2+"/api/v1/bot/intent/";


//DeleteExampleIntents
UrlDeleteExampleIntents=environment.host2+"/api/v1/bot/intent/example/";



  constructor(private http:HttpClient) { }



  GetAllIntents(){
     return this.http.get<any[]>(this.AllUrlIntents)

  }

  GetIntentsById(){
    return this.http.get(this.UrlIntents);

  }

  AddIntent(name:any){

    return this.http.post(this.UrlAddIntent,{name:name});


  }
  UpdateIntent(id:any,name:any){

    return this.http.put(this.UrlUpdateIntent+id,{name:name})


  }
  DeleteIntent(id:any){

    return this.http.delete(this.UrlDeleteIntent+id)

  }

  GetExample(id:any){
    return this.http.get(this.UrlGetExampleIntents+id+"/example");
  }

  AddExample(id:any,value:any){
    return this.http.post(this.UrlAddExampleIntent+id+"/example",{value:value});
  }

  UpdateExample(id:any,value:any){
    return this.http.put(this.UrlUpdateExampleIntent+id,{value:value});
  }

  DeleteExample(id:any){
    return this.http.delete(this.UrlDeleteExampleIntents+id);
  }
}
