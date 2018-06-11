import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  leyend1: string = 'Progress Blue';
  progress1: number = 30;
  leyend2: string = 'Progress Green';
  progress2: number = 50;

  constructor() { }

  ngOnInit() {
  }
}
