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

  prediction() {
    let user = {
      gender: parseInt(this.user.gender),
      was_alone: parseInt(this.user.was_alone),
      age: this.user.age
    };

    this.survivor.getPrediction(user)
      .subscribe(res => {
        this.result = res;
        this.isModalOpen = true
        });
  }

  resetUser(){
    this.user = { gender: 0, age: null, was_alone: 0 };
  }

}
