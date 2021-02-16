import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Output() play: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() repeat: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  getPlay() {
    this.play.emit(true);
  }

  getRepeat() {
    this.repeat.emit(true);
  }

  getNext() {
    this.next.emit(true);
  }

}
