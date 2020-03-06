import { Component, OnInit } from '@angular/core';
import { Rates } from 'src/app/models/rates.model';
import { RatesService } from 'src/app/services/rates.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-last-thirty',
  templateUrl: './last-thirty.component.html',
  styleUrls: ['./last-thirty.component.scss']
})
export class LastThirtyComponent implements OnInit {
  referenceCurrency = 'USD';
  currentBase = 'TRY';
  currencyList: string[];
  fromDate: Date;
  toDate: Date;
  baseData: Rates;

  // options
  view: any[] = [800,400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  showYAxisLabel = true;
  yAxisLabel = 'Currency';
  dataSource: any;

  colorScheme = {
    domain: ['#1111A4']
  };

  constructor(private ratesService: RatesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      if (event.cur) {
        this.currentBase = event.cur;
      }
    });

    this.fromDate = new Date();
    this.fromDate.setDate(new Date().getDate() - 30); // to get the last 30 days
    this.toDate = new Date();

    this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.referenceCurrency, this.fromDate, this.toDate).subscribe(success => {
      this.baseData = success;
      this.currencyList = this.baseData.getCurrencyListOnly();
      this.dataSource = this.baseData.getChartDataModel(this.currentBase);
    });
  }

  onBaseCurrencyChange() {
    console.log(this.view);
    this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.referenceCurrency, this.fromDate, this.toDate).subscribe(success => {
      this.baseData = success;
      this.dataSource = this.baseData.getChartDataModel(this.currentBase);
    });
  }
}
