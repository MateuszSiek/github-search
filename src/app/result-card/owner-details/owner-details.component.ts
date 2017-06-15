import { Component, OnInit, Input } from '@angular/core';

import {Owner} from "../../shared/models/owner";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  @Input() owner: Owner;
  constructor() { }

  ngOnInit() {
  }

}
