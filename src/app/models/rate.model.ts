import { Deserializable } from './deserializable.interface';

export class Rate implements Deserializable {
    public currencyName: string;
    public value: number;

    deserialize(input: any): this {
        this.currencyName = input.key;
        this.value = input.value;
        return this;
    }
}
