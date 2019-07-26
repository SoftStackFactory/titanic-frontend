import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ENV } from "@app/env";

@Injectable({
  providedIn: "root"
})
export class SurvivorService {
  baseUrl: string = ENV.baseUrl;
  constructor(private http: HttpClient) {}

  getPrediction(person) {
    console.log(this.baseUrl);
    return this.http.post(`${this.baseUrl}/predict`, person);
  }
}
