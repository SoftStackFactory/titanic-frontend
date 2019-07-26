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
    this.survivor.getPrediction(this.user).subscribe(res => console.log(res));
  }

  gender(gender) {
    return gender === "male" ? 1 : 0;
  }

  alone(alone) {
    return alone ? 1 : 0;
  }
}
