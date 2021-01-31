import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, repeat, takeWhile } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
