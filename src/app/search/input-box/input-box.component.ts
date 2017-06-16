import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';



@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input() searchInputMethod: 'manual' | 'auto' = 'manual';
  @Input() debounceTime: number = 200;
  @Output() queryChange: EventEmitter<string> = new EventEmitter<string>();

  private query: string = '';
  private queryControl: FormControl = new FormControl();;

  constructor() { }

  ngOnInit() {
    this.queryControl.valueChanges
      .debounceTime(this.debounceTime)
      .subscribe((newValue: string) => this.inputChanged(newValue));
  }

  inputChanged(newValue: string) {
    this.query = newValue;
    if (this.searchInputMethod === 'auto') {
      this.fireQueryChangeEvent();
    }
  }

  fireQueryChangeEvent() {
    this.queryChange.emit(this.query);
  }

}
