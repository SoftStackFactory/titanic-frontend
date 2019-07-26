import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SurvivorService {
  baseUrl: string = "https://titanic-model-demo.herokuapp.com/" 
  constructor(private http: HttpClient) { }

  getPrediction( person ){
     return this.http.post( `${this.baseUrl}/"predict`, person )
  }
}
