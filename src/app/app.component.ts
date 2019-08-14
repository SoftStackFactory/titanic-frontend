import { Component } from "@angular/core";
import { SurvivorService } from "./survivor.service";
import { EventEmitter } from 'events';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "titanic";
  user = { gender: null, age: null, was_alone: null };
  result = undefined;
  isModalOpen: boolean = false;


  constructor(public survivor: SurvivorService) {}

  // modalClose(evt){
  // modalClose(){
  //   this.isModalOpen = false;
  // }


  prediction() {
    let user = {
      gender: parseInt(this.user.gender),
      was_alone: parseInt(this.user.was_alone),
      age: this.user.age
    };
    console.log(user, "my user", this.user);
    console.log("inside prediction", this.isModalOpen);
    this.survivor.getPrediction(user)
      .subscribe(res => {
        this.result = res;
        this.isModalOpen = true
        console.log("inside async",this.isModalOpen)
        console.log(res)
        });
  }

  resetUser(){
    console.log("inside reset user", this.isModalOpen);
    this.user = { gender: null, age: null, was_alone: null };
  }

}
