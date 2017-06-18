import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository-readme',
  templateUrl: './repository-readme.component.html',
  styleUrls: ['./repository-readme.component.css']
})
export class RepositoryReadmeComponent {
  @Input() readme: string;
  constructor() { }

}
