import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()opened;
  @Input()prediction;
  @Output()openedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.opened = false;
    this.openedChange.emit();
  }
}
