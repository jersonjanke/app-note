import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, repeat, takeWhile } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public note: number;
  public score = 0;
  public isCorrect: boolean;

  randomNote() {
    this.note = Math.floor(Math.random() * 7);
    setTimeout(() => {
      this.playAudio(this.note);
    }, 1000);
  }

  clickNote(note) {
    if (note === this.note) {
      this.score = this.score + 10;
    }
    this.randomNote();
  }

  playAudio(id) {
    const notes = [
      { note:  "./assets/notes/do.mp3" },
      { note:  "./assets/notes/fa.mp3" },
      { note:  "./assets/notes/la.mp3" },
      { note:  "./assets/notes/mi.mp3" },
      { note:  "./assets/notes/re.mp3" },
      { note:  "./assets/notes/si.mp3" },
      { note:  "./assets/notes/sol.mp3" }
    ];
    const audio = new Audio();
    audio.autoplay = true;
    audio.src = notes[id].note;
    audio.load();
    audio.play();
  }

}
