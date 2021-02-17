import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Output() play: EventEmitter<number> = new EventEmitter<number>();
  @Output() repeat: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  getPlay() {
    this.play.emit(Math.floor(Math.random() * 1000));
  }

  getRepeat() {
    this.repeat.emit(Math.floor(Math.random() * 1000));
  }

  getNext() {
    this.next.emit(Math.floor(Math.random() * 1000));
  }

}
