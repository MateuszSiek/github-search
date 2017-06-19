import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import {Repository} from "../models/repository";

import { GithubApiService } from "../services/github-api.service";


@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
  @Input() repository: Repository;
  private readme: string;
  private weeklyCommits: any;
  private showReadMe: boolean = false;
  private showCommits: boolean = false;
  private expanded: boolean = false;
  constructor(private githubApiService: GithubApiService) { }


  ngOnInit() {
    // console.log(this);
  }

  loadReadme() {
    this.githubApiService.getReadmeHTML(this.repository.full_name).then((res) => {
      console.log(res);
      this.showReadMe = true;
      this.readme = res;
    });

  }

  loadCommitStats() {
    this.githubApiService.getCommitActivity(this.repository.full_name).then((res) => {
      console.log(res)
      this.showCommits = true;
      if ((res || {}).length) {
        this.weeklyCommits = res;
      }
    });
  }


  toggleDetailData() {
    if (this.expanded) {
      this.expanded = false;
    }
    else {
      this.expanded = true;
      if (!this.readme) {
        this.loadReadme();
      }
      if (!this.weeklyCommits) {
        this.loadCommitStats();
      }
    }
  }

}
