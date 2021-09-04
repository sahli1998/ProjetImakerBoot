import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class BotService {
  public dataForm: FormGroup;
  private baseURL = 'http://localhost:8090/api/v1/bot';
  constructor(private http: HttpClient ) { }



  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseURL}`, formData);
  }
}
