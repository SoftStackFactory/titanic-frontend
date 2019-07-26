import { Component } from "@angular/core";
import { SurvivorService } from "./survivor.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "titanic";
  user = { gender: null, age: null, was_alone: null };
  constructor(public survivor: SurvivorService) {}

  prediction() {
    let user = {
      gender: parseInt(this.user.gender),
      was_alone: parseInt(this.user.was_alone),
      age: this.user.age
    };
    console.log(user, "my user", this.user);

    this.survivor.getPrediction(user).subscribe(res => console.log(res));
  }
}
