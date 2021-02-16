import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, repeat, takeWhile } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isPlay: boolean;
  public isRepeat: boolean;
  public isNext: boolean;

  getPlay(e) {
    this.isPlay = e;
  }

  getRepeat(e) {
    this.isRepeat = e;
  }

  getNext(e) {
    this.isNext = e;
  }

}
