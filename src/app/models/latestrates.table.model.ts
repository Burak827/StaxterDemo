import { DifferenceEnum } from './difference.enum';

export class LatestRatesTableModel {
    public currency: string;
    public spot: number;
    public incDec: DifferenceEnum;
}
