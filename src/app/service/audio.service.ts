import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notes } from '../model/notes';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playAudio(id: number, level: number): Observable<Notes[]> {
    let notes = [];
    let audio = null;

    switch(level) {
      case 1: {
        notes = [
          { note:  "./assets/notes/do.mp3", desc: "Dó" },
          { note:  "./assets/notes/re.mp3", desc: "Ré" }
        ]
        break;
      }
      case 2: {
        notes = [
          { note:  "./assets/notes/mi.mp3", desc: "Mi" },
          { note:  "./assets/notes/fa.mp3", desc: "Fá" }
        ]
        break;
      }
      case 3: {
        notes = [
          { note:  "./assets/notes/sol.mp3", desc: "Sol" },
          { note:  "./assets/notes/la.mp3", desc: "Lá" }
        ]
        break;
      }
      case 4: {
        notes = [
          { note:  "./assets/notes/si.mp3", desc: "Si" },
          { note:  "./assets/notes/do.mp3", desc: "Dó" }
        ]
        break;
      }
    }

    audio = new Audio();
    audio.src = notes[id].note;
    audio.load();
    audio.play();
    
    setTimeout(() => { audio.pause() }, 3000)

    return of(notes)
  }

  randomNote(notes: number) {
    return of(Math.floor(Math.random() * notes));
  }
}
