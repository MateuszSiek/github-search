import { Component, Input } from '@angular/core';

import {Repository} from "../../models/repository";

@Component({
  selector: 'app-general-description',
  templateUrl: './general-description.component.html',
  styleUrls: ['./general-description.component.css']
})
export class GeneralDescriptionComponent{
  @Input() repository: Repository;
}
