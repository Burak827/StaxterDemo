import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyValue' })
export class CurrencyValuePipe implements PipeTransform {
    // pipe to show only 4 decimal parts
    transform(value: number): string {
        return value.toFixed(4);
    }
}
