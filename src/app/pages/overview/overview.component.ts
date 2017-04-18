import {Component} from '@angular/core';
import {OverviewService} from "./overview.service";

@Component({
  selector: 'overview',
  styleUrls: ['./overview.scss'],
  templateUrl: './overview.html'
})
export class Overview {

  data:any;
  hourlyData:any;
  weeklyData:any;
  dailyData:any;
  overallData:any;

  constructor(private _overviewService:OverviewService) {
  }

  ngOnInit() {
    this.data = this._overviewService.getAll();

    this._overviewService
        .getHourlyReport()
        .subscribe(p => this.hourlyData = p);

    this._overviewService
        .getWeeklyTotalReport()
        .subscribe(p => this.overallData = p);

    this._overviewService
        .getDailyReport()
        .subscribe(p => this.dailyData = p);

    this._overviewService
        .getWeeklyClientReport()
        .subscribe(p => this.weeklyData = p);
  }

  getResponsive(padding, offset) {
    return this._overviewService.getResponsive(padding, offset);
  }

}
