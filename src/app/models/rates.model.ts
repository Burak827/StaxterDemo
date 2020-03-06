import { Deserializable } from './deserializable.interface';
import { RateList } from './rateList.model';
import { LatestRatesTableModel } from './latestrates.table.model';
import { DifferenceEnum } from './difference.enum';
import { TopFiveTableModel } from './top.five.table.model';
import { ChartDataModel } from './chart.data.model';

export class Rates implements Deserializable {
    public rateList: RateList[];
    public base: string;
    public startDate: Date;
    public endDate: Date;

    constructor() { }

    deserialize(input: any): this {
        this.startDate = new Date(input.start_at);
        this.endDate = new Date(input.end_at);
        this.base = input.base;

        const rateList: RateList[] = [];

        for (const rate in input.rates) {
            if (input.rates.hasOwnProperty(rate)) {
                rateList.push(new RateList().deserialize({
                    date: rate,
                    rates: input.rates[rate]
                }));
            }
        }

        // sorting the chart model according to dates
        rateList.sort((a: RateList, b: RateList) => {
            // return a.name - b.percentage : b.percentage - a.percentage;
            return a.date > b.date ? 1 : -1;
        });

        this.rateList = rateList;
        return this;
    }

    getLatestRatesTableModel(): LatestRatesTableModel[] {
        const model: LatestRatesTableModel[] = [];
        const rates = this.rateList[0].rates;

        // make sure rates are sorted in terms of days are decreasing
        this.rateList.sort((a: any, b: any) => {
            return b.date.getTime() - a.date.getTime();
        });

        for (const rate in rates) {
            if (rates.hasOwnProperty(rate) &&
                rates[rate].currencyName !== this.base // no need show the base currency itself on the table
            ) {
                const rateObject = rates[rate];
                const previousDayValue = this.getSpecificDayCurrency(this.rateList[1].rates, rates[rate].currencyName);
                const row = new LatestRatesTableModel();

                row.currency = rateObject.currencyName;
                row.spot = rateObject.value;
                row.incDec = rateObject.value > previousDayValue ? DifferenceEnum.Increasing :
                    (rateObject.value === previousDayValue ? DifferenceEnum.Same : DifferenceEnum.Decreasing);
                model.push(row);
            }
        }

        return model;
    }

    getSpecificDayCurrency(rates, currencyName): number {
        for (const rate in rates) {
            if (rates.hasOwnProperty(rate) &&
                rates[rate].currencyName === currencyName
            ) {
                return rates[rate].value;
            }
        }

        return 1;
    }

    getTopFive(trend: boolean): TopFiveTableModel[] {
        // trend true for increase, false for decrease
        let model: TopFiveTableModel[] = [];

        // make sure rates are sorted in terms of days are decreasing
        this.rateList.sort((a: any, b: any) => {
            return b.date.getTime() - a.date.getTime();
        });

        const rates = this.rateList[0].rates; // getting the last day(assuming today)

        for (const rate in rates) {
            if (rates.hasOwnProperty(rate) &&
                rates[rate].currencyName !== this.base // no need show the base currency itself on the table
            ) {
                const rateObject = rates[rate];
                const previousDayValue = this.getSpecificDayCurrency(this.rateList[1].rates, rates[rate].currencyName);
                const row = new TopFiveTableModel();
                const diff = Math.round((Math.abs(rateObject.value - previousDayValue)) * 1000) / 1000;

                row.currency = rateObject.currencyName;
                row.difference = rateObject.value - previousDayValue;
                row.percentage = (diff / (rateObject.value > previousDayValue ? previousDayValue : rateObject.value)) * 100;
                model.push(row);
            }
        }

        model.sort((a: any, b: any) => {
            return trend ? a.percentage - b.percentage : b.percentage - a.percentage;
        });

        model = model.slice(0, 5);

        return model;
    }

    getCurrencyListOnly(): string[] {
        const currencyList: string[] = [];
        const rates = this.rateList[0].rates;
        for (const rate in rates) {
            if (rates.hasOwnProperty(rate)) {
                const rateObj = rates[rate];
                currencyList.push(rateObj.currencyName);
            }
        }
        return currencyList;
    }

    getDateStringForAPI(date: Date): string {
        const mm = date.getMonth() + 1; // getMonth() is zero-based
        const dd = date.getDate();

        return [date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('-');
    }

    getChartDataModel(currency: string): ChartDataModel[] {
        const rateListToLoop: RateList[] = this.rateList;
        const chartDataList: ChartDataModel[] = [];

        for (const rateDay in rateListToLoop) {
            if (rateListToLoop.hasOwnProperty(rateDay)) {
                const rateDayObj = rateListToLoop[rateDay];
                const dayString = this.getDateStringForAPI(rateDayObj.date);
                let curVal: any;


                for (const rate in rateDayObj.rates) {
                    if (rateDayObj.rates.hasOwnProperty(rate)
                        && rateDayObj.rates[rate].currencyName === currency) {
                        curVal = rateDayObj.rates[rate].value;
                        break;
                    }
                }

                chartDataList.push(
                    new ChartDataModel({
                        name: dayString,
                        value: curVal
                    })
                );


            }
        }

        return chartDataList;
    }
}
