import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Rates } from '../models/rates.model';
import { LatestRate } from '../models/latestrate.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from '../utilities/helper.service';

@Injectable({
  providedIn: 'root'
})
export class RatesService {
  apiRootUrl = 'https://api.exchangeratesapi.io/';

  constructor(private http: HttpClient, private helperService: HelperService) { }

  getLatestRate(): Observable<LatestRate> {
    return this.http.get<LatestRate>(this.apiRootUrl + 'latest').pipe(
      map(data => new LatestRate().deserialize(data))
    );
  }

  getLatestRateWithBase(base: string): Observable<LatestRate> {
    const queryParams = {
      params: new HttpParams()
        .set('base', base)
    };

    return this.http.get<LatestRate>(this.apiRootUrl + 'latest', queryParams).pipe(
      map(data => new LatestRate().deserialize(data))
    );
  }

  getHistoricalRateWithBaseAndTimeInterval(base: string, startDate: Date, endDate: Date): Observable<Rates> {
    const queryParams = {
      params: new HttpParams()
        .set('base', base)
        .set('start_at', this.helperService.getDateStringForAPI(startDate))
        .set('end_at', this.helperService.getDateStringForAPI(endDate))
    };

    return this.http.get<Rates>(this.apiRootUrl + 'history', queryParams).pipe(
      map(data => new Rates().deserialize(data))
    );
  }
}
