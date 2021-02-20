import { Notes } from './../model/notes';
import { Component, Input } from '@angular/core';
import { AudioService } from '../service/audio.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  @Input() set play(value: number) { value ? this.getPlay() : null }
  @Input() set repeat(value: number) { this.getRepeat() }
  @Input() set next(value: number) { value ? this.getNextNote() : null };

  public correct: boolean;
  public randomNote: number;
  public score = 0;
  public level = 1;
  public isPlay: boolean;
  public start: boolean;
  public notes: Notes[];
  public countNotes = 2;
  public audio = new Audio;

  constructor(private audioService: AudioService) { }

  getPlay(): void {
    this.start = true;
    this.audioService.randomNote(this.countNotes).subscribe(randomNote => {
      this.randomNote = randomNote;
      this.audioService.playAudio(randomNote, this.level).pipe(take(1))
      .subscribe((notes: Notes[]) => {
        this.notes = notes;
        this.playAudio(this.notes[this.randomNote].src)
      })
    });
  }

  getRepeat() {
    if (this.notes) {
      this.playAudio(this.notes[this.randomNote].src);
    }
  }

  getNextNote() {
    this.getPlay();
  }

  playAudio(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
  }

  validateNote(note: Notes): void {
    this.isPlay = true;
    this.correct = note.code === this.randomNote;
    this.score = this.score + (this.correct ? 10 : 0);
    this.setNextLevel();
    setTimeout(() => { this.isPlay = false; this.getPlay() }, 2000)
  }

  setNextLevel() {
    if (this.score >= 50) {
      this.level = 2;
      this.countNotes = 2;
    }
    if (this.score >= 100) {
      this.level = 3;
      this.countNotes = 2;
    }
    if (this.score >= 150) {
      this.level = 4;
      this.countNotes = 2;
    }
    if (this.score >= 200) {
      this.level = 5;
      this.countNotes = 3;
    }
    if (this.score >= 250) {
      this.level = 6;
      this.countNotes = 3;
    }
    if (this.score >= 300) {
      this.level = 7;
      this.countNotes = 4;
    }
    if (this.score >= 350) {
      this.level = 8;
      this.countNotes = 4;
    }
    if (this.score >= 400) {
      this.level = 9;
      this.countNotes = 5;
    }
    if (this.score >= 450) {
      this.level = 10;
      this.countNotes = 6;
    }
  }
}
