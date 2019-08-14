import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()opened;
  @Input()predictionResult;
  @Output()openedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClose(){
    console.log("inside onClose() before setting this.opened = false", this.opened);
    this.opened = false;
    this.openedChange.emit();
    // this.close.emit(10);
    console.log("inside onClose() after setting this.open=false ", this.opened)
    //this.openedChange.emit(this.opened); // the event has to run but we dont have to pass the output, we dont have to emit a function passing an argument
  }
}
