import {Pipe, PipeTransform} from 'angular2/core';
/**
 * The default ISO Date is not parseable by ts compiler or some such.
*/
@Pipe({ name: 'betterTime' })
export class BetterTimePipe implements PipeTransform {

    transform(date: number): string {

        let d = new Date(date);
        return d.toLocaleTimeString(
    }
}