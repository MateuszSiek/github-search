import { Component, Input } from '@angular/core';

import {Owner} from "../../models/owner";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent {
  @Input() owner: Owner;
}
