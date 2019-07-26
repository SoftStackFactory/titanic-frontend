import { Component } from '@angular/core';
import { SurvivorService } from './survivor.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'titanic';
  constructor ( public survivor: SurvivorService){
    console.log(this.survivor.baseUrl)
  }

}
