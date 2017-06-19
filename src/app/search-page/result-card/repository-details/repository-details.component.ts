import { Component, Input } from '@angular/core';

import {Repository} from "../../models/repository";

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent{
  @Input() repository: Repository;
}
