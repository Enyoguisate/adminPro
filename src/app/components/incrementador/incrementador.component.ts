import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('name') leyend: string = 'Leyend';
  @Input('value') progress: number = 50;
  @Output('updateValue') returnChangedValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange($event: number) {
    if ($event >= 100) {
      this.progress = 100;
    } else  if ($event <= 0) {
      this.progress = 0;
    } else {
      this.progress = $event;
    }
    this.txtProgress.nativeElement.value = this.progress;
    this.returnChangedValue.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

  changeValue(value: number) {
    if (value > 0) {
      if (this.progress >= 100 && this.progress > 0) {
        this.progress = 100;
        this.returnChangedValue.emit(this.progress);
        return;
      }else {
        this.progress = this.progress + value;
        this.returnChangedValue.emit(this.progress);
      }
    }else {
      if (this.progress <= 0 && this.progress < 100) {
        this.progress = 0;
        this.returnChangedValue.emit(this.progress);
        return;
      }else {
        this.progress = this.progress + value;
        this.returnChangedValue.emit(this.progress);
      }
    }
  }

}
