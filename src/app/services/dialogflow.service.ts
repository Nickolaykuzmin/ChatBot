import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class DialogflowService {

  private baseURL: string = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: string = environment.token;

  constructor(private http: HttpClient){}

  public getResponse(query: string):Observable<any> {
    let data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    };

    return this.http.post(`${this.baseURL}`,data,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
    })
  }
}
