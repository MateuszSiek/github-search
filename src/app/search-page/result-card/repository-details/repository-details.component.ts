import { Component, OnInit, Input } from '@angular/core';

import {Repository} from "../../models/repository";

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {
  @Input() repository: Repository;
  constructor() { }

  ngOnInit() {
  }

}
