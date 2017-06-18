import { Component, OnInit, Input } from '@angular/core';

import {Repository} from "../../models/repository";

@Component({
  selector: 'app-general-description',
  templateUrl: './general-description.component.html',
  styleUrls: ['./general-description.component.css']
})
export class GeneralDescriptionComponent implements OnInit {
  @Input() repository: Repository;
  constructor() { }

  ngOnInit() {
  }

  fromLastUpdate() {

  }
}
