import { Component, OnInit, ViewChild } from '@angular/core';
import { RatesService } from 'src/app/services/rates.service';
import { Rates } from 'src/app/models/rates.model';
import { TopFiveTableModel } from 'src/app/models/top.five.table.model';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {
  @ViewChild('group', { static: true }) trendButtonGroup: MatButtonToggleGroup;

  currencyList: string[];
  currentBase = 'USD';
  displayedColumns: string[] = ['currency', 'difference', 'percentage'];
  dataSource: TopFiveTableModel[];
  baseData: Rates;
  fromDate: Date;
  toDate: Date;

  constructor(private ratesService: RatesService) { }

  ngOnInit() {
    this.fromDate = new Date();
    this.fromDate.setDate(new Date().getDate() - 10);
    this.toDate = new Date();

    this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(success => {
      this.baseData = success;
      this.currencyList = this.baseData.getCurrencyListOnly();
      this.dataSource = this.baseData.getTopFive(this.trendButtonGroup.value === 'increase');
    });
  }

  onChangeTrend() {
    this.dataSource = this.baseData.getTopFive(this.trendButtonGroup.value === 'increase');
  }

  onBaseCurrencyChange() {
    this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(success => {
      this.baseData = success;
      this.dataSource = this.baseData.getTopFive(this.trendButtonGroup.value === 'increase');
    });
  }
}
