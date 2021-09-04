import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  
  //GetAllEntitiesUrl
  AllUrlEntities=environment.host2+"/api/v1/bot/"+localStorage.getItem("idCurrentBot")+"/entities";

  //RechercheEntitiesUrl
UrlEntities=environment.host2+"/api/v1/bot";

//AddNewEntities
UrlAddEntities=environment.host2+"/api/v1/bot/"+localStorage.getItem("idCurrentBot")+"/entities";

//DeleteEntitiesUrl
UrlDeleteEntities=environment.host2+"/api/v1/bot/entities/";

//UpdateEntitiesUrl
UrlUpdateEntities=environment.host2+"/api/v1/bot/entities/";








  constructor(private http:HttpClient) { }



  GetAllEntities(){
     return this.http.get<any[]>(this.AllUrlEntities)

  }

 

  AddEntities(value:any,synonym:any){

    return this.http.post(this.UrlAddEntities,{value:value,synonym:synonym});


  }
  UpdateEntities(id:any,value:any,synonym:any){

    return this.http.put(this.UrlUpdateEntities+id,{value:value,synonym:synonym})


  }
  DeleteEntities(id:any){

    return this.http.delete(this.UrlDeleteEntities+id)

  }
}
