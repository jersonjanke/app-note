import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private notes = [];

  constructor() { }

  playAudio(id: number, level: number): void {
    switch(level) {
      case 1: {
        this.notes = [
          { note:  "./assets/notes/do.mp3" },
          { note:  "./assets/notes/re.mp3" }
        ]
      }
      case 2: {
        this.notes = [
          { note:  "./assets/notes/mi.mp3" },
          { note:  "./assets/notes/fa.mp3" }
        ]
      }
      case 3: {
        this.notes = [
          { note:  "./assets/notes/sol.mp3" },
          { note:  "./assets/notes/la.mp3" }
        ]
      }
      case 4: {
        this.notes = [
          { note:  "./assets/notes/si.mp3" },
          { note:  "./assets/notes/do.mp3" }
        ]
      }
    }

    let audio = new Audio();
    audio.autoplay = true;
    audio.src = this.notes[id].note;
    audio.load();
    audio.play();
  }

  randomNote(notes: number) {
    return Math.floor(Math.random() * notes);
  }
}
