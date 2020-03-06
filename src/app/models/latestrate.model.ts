import { Deserializable } from './deserializable.interface';
import { Rate } from './rate.model';

export class LatestRate implements Deserializable {
    public rates: Rate[];
    public base: string;
    public date: Date;

    deserialize(input: any): this {
        const rates: this = Object.assign(this, input);
        this.date = new Date(input.date);
        const rateList: Rate[] = [];

        for (const rate in input.rates) {
            if (input.rates.hasOwnProperty(rate)) {
                rateList.push(new Rate().deserialize({
                    key: rate,
                    value: input.rates[rate]
                }));
            }
        }

        this.rates = rateList;

        return rates;
    }

    getCurrencyListOnly(): string[] {
        const currencyList: string[] = [];
        const rates = this.rates;
        for (const rate in rates) {
            if (rates.hasOwnProperty(rate)) {
                const rateObj = rates[rate];
                currencyList.push(rateObj.currencyName);
            }
        }
        return currencyList;
    }
}
