import { Deserializable } from './deserializable.interface';
import { Rate } from './rate.model';

export class RateList implements Deserializable {
    public date: Date;
    public rates: Rate[];

    deserialize(input: any): this {
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
        return this;
    }
}
