import { Component, OnInit, Input } from '@angular/core';

import {Repository} from "../shared/models/repository";

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
  @Input() repository: Repository;
  constructor() { }

  ngOnInit() {
  }

}
