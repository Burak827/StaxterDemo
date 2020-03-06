export class ChartDataModel {
    public name: string;
    public value: number;

    public constructor(init?: Partial<ChartDataModel>) {
        Object.assign(this, init);
    }
}
