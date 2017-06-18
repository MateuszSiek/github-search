import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';

import { AmChartsService } from "@amcharts/amcharts3-angular";

import { CommitActivity, DailyCommitData } from "../models/commit-activity";

@Component({
  selector: 'app-commit-stats',
  templateUrl: './commit-stats.component.html',
  styleUrls: ['./commit-stats.component.css']
})
export class CommitStatsComponent implements OnInit, OnDestroy {
  @ViewChild('chartdiv') private chartdiv;
  @Input() weeklyCommits: CommitActivity[];
  private chart: any;
  constructor(private amChartsService: AmChartsService) { }

  getDailyCommitsData(weeklyCommits): DailyCommitData[] {
    let dailyCommits: DailyCommitData[] = [];
    weeklyCommits.forEach((week) => {
      let days = week.days;
      days.forEach((day, i) => {
        let startingDate = new Date(1000 * (week.week + i * 60 * 60 * 24));
        let dateString = startingDate.toISOString().slice(0, 10);
        dailyCommits.push({ date: dateString, value: day })
      })
    })
    return dailyCommits;
  }

  ngOnInit() {
    let dailyCommitsData = this.getDailyCommitsData(this.weeklyCommits);
    this.renderChart(dailyCommitsData);
  }

  renderChart(data: DailyCommitData[]): void {
    this.chart = this.amChartsService.makeChart(this.chartdiv.nativeElement, {
      "dataProvider": data,
      "type": "serial",
      "theme": "light",
      "marginRight": 20,
      "marginLeft": 20,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled": true,
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth": true
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "graphs": [{
        "id": "g1",
        "balloon": {
          "drop": true,
          "adjustBorderColor": false,
          "color": "#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 3,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 40,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 1,
        "cursorColor": "#258cbb",
        "limitToGraph": "g1",
        "valueLineAlpha": 0.2,
        "valueZoomable": true
      },
      "valueScrollbar": {
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 8
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      }
    });
  }

  ngOnDestroy() {
    this.amChartsService.destroyChart(this.chart);
  }
}
