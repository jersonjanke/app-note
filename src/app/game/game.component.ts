import { Notes } from './../model/notes';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../service/audio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public correct: boolean;
  public note: number;
  public score = 0;
  public level = 1;
  public isPlay: boolean;
  public note1 = 'Dó';
  public note2 = 'Ré';

  constructor(private audioService: AudioService) { }

  play(): void {
    this.audioService.randomNote(2).subscribe(note => {
      this.note = note;
      this.audioService.playAudio(note, this.level).subscribe((notes: Notes[]) => {
        this.note1 = notes[0].desc;
        this.note2 = notes[1].desc;
      })
    });
  }

  validateNote(action): void {
    this.isPlay = true;
    this.correct = this.note === action;
    this.score = this.score + (this.correct ? 10 : 0);
    this.setNextLevel();
    setTimeout(() => { this.isPlay = false; this.play() }, 2000)
  }

  setNextLevel() {
    if (this.score >= 50) {
      this.level = 2;
    }
    if (this.score >= 100) {
      this.level = 3;

    }
    if (this.score >= 150) {
      this.level = 4;
    }
  }
}
