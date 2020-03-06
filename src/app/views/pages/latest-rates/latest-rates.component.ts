import { Component, OnInit } from '@angular/core';
import { RatesService } from 'src/app/services/rates.service';
import { Rates } from 'src/app/models/rates.model';
import { Router } from '@angular/router';

export interface LatestRate {
  currency: string;
  spot: number;
  incDec: boolean;
}



@Component({
  selector: 'app-latest-rates',
  templateUrl: './latest-rates.component.html',
  styleUrls: ['./latest-rates.component.scss']
})
export class LatestRatesComponent implements OnInit {
  currentBase = 'USD';
  currencyList: string[];
  displayedColumns: string[] = ['currency', 'spot', 'incDec', 'chart'];
  dataSource;
  fromDate: Date;
  toDate: Date;
  baseData: Rates;

  constructor(private ratesService: RatesService, private router: Router) { }

  ngOnInit() {
    this.fromDate = new Date();
    this.fromDate.setDate(new Date().getDate() - 4);
    this.toDate = new Date();

    this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(success => {
      this.baseData = success;
      this.currencyList = this.baseData.getCurrencyListOnly();
      this.dataSource = this.baseData.getLatestRatesTableModel();
    });
  }

  onBaseCurrencyChange() {
    this.ratesService.getHistoricalRateWithBaseAndTimeInterval(this.currentBase, this.fromDate, this.toDate).subscribe(success => {
      this.baseData = success;
      this.dataSource = this.baseData.getLatestRatesTableModel();
    });
  }

  navigateToChart(currency: string) {
    this.router.navigateByUrl('lastthirty/' + currency);
  }
}
