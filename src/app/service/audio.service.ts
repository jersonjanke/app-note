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
          { code: 0, src:  "./assets/notes/do.mp3", desc: "Dó" },
          { code: 1 ,src:  "./assets/notes/re.mp3", desc: "Ré" }
        ]
        break;
      }
      case 2: {
        notes = [
          { code: 0, src:  "./assets/notes/mi.mp3", desc: "Mi" },
          { code: 1, src:  "./assets/notes/fa.mp3", desc: "Fá" }
        ]
        break;
      }
      case 3: {
        notes = [
          { code: 0, src:  "./assets/notes/sol.mp3", desc: "Sol" },
          { code: 1, src:  "./assets/notes/la.mp3", desc: "Lá" }
        ]
        break;
      }
      case 4: {
        notes = [
          { code: 0, src:  "./assets/notes/si.mp3", desc: "Si" },
          { code: 1, src:  "./assets/notes/do.mp3", desc: "Dó" }
        ]
        break;
      }
      case 5: {
        notes = [
          { code: 0, src:  "./assets/notes/mi.mp3", desc: "Mi" },
          { code: 1, src:  "./assets/notes/sol.mp3", desc: "Dó" },
          { code: 2, src:  "./assets/notes/si.mp3", desc: "Si" }
        ]
        break;
      }
      case 6: {
        notes = [
          { code: 0, src:  "./assets/notes/fa.mp3", desc: "Fá" },
          { code: 1, src:  "./assets/notes/do.mp3", desc: "Dó" },
          { code: 2, src:  "./assets/notes/re.mp3", desc: "Ré" }
        ]
        break;
      }
      case 7: {
        notes = [
          { code: 0, src:  "./assets/notes/sol.mp3", desc: "Sol" },
          { code: 1, src:  "./assets/notes/mi.mp3", desc: "Mi" },
          { code: 2, src:  "./assets/notes/la.mp3", desc: "Lá" },
          { code: 3, src:  "./assets/notes/re.mp3", desc: "Ré" },
        ]
        break;
      }
      case 8: {
        notes = [
          { code: 0, src:  "./assets/notes/do.mp3", desc: "Dó" },
          { code: 1, src:  "./assets/notes/re.mp3", desc: "Ré" },
          { code: 2, src:  "./assets/notes/mi.mp3", desc: "Mi" },
          { code: 3, src:  "./assets/notes/fa.mp3", desc: "Fá" },
          { code: 4, src:  "./assets/notes/sol.mp3", desc: "Sol" },
        ]
        break;
      }
      case 9: {
        notes = [
          { code: 0, src:  "./assets/notes/do.mp3", desc: "Dó" },
          { code: 1, src:  "./assets/notes/re.mp3", desc: "Ré" },
          { code: 2, src:  "./assets/notes/mi.mp3", desc: "Mi" },
          { code: 3, src:  "./assets/notes/fa.mp3", desc: "Fá" },
          { code: 4, src:  "./assets/notes/sol.mp3", desc: "Sol" },
          { code: 5, src:  "./assets/notes/la.mp3", desc: "Lá" },
        ]
        break;
      }
      case 10: {
        notes = [
          { code: 0, src:  "./assets/notes/do.mp3", desc: "Dó" },
          { code: 1, src:  "./assets/notes/re.mp3", desc: "Ré" },
          { code: 2, src:  "./assets/notes/mi.mp3", desc: "Mi" },
          { code: 3, src:  "./assets/notes/fa.mp3", desc: "Fá" },
          { code: 4, src:  "./assets/notes/sol.mp3", desc: "Sol" },
          { code: 5, src:  "./assets/notes/la.mp3", desc: "Lá" },
          { code: 6, src:  "./assets/notes/si.mp3", desc: "Si" },
        ]
        break;
      }
    }

    return of(notes)
  }

  randomNote(notes: number) {
    return of(Math.floor(Math.random() * notes));
  }
}
