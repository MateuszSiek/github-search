import { Pipe, PipeTransform } from '@angular/core';

type InputFormat = ('date' | 'string');
type OutputFormat = ('default' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years');

@Pipe({ name: 'dateSince' })
export class DateSincePipe implements PipeTransform {

  public transform(value: any, outputFormat: OutputFormat = 'default'): string {
    const dateTimestamp: number = Date.parse(value);
    const currentTimestamp: number = (new Date()).getTime();
    if (isNaN(dateTimestamp) || dateTimestamp > currentTimestamp) {
      return '';
    }
    let diffMs = Math.abs(currentTimestamp - dateTimestamp);

    return this.getFormatedDateSinceString(diffMs, outputFormat);
  }

  private getFormatedDateSinceString(diffMs: number, outputFormat: OutputFormat): string {
    const numberOfSince = this.getTimeSince(diffMs);
    let formatedString = '';
    if (outputFormat === 'default') {
      formatedString = this.getDefaultDateSinceString(numberOfSince);
    }
    else {
      let value = numberOfSince[outputFormat];
      if (isNaN(value)) {
        return '';
      }
      formatedString = `${value} ${outputFormat.slice(0, -1)}`;

      if (value > 1) {
        formatedString += 's';
      }
    }

    formatedString += ' ago';
    return formatedString;
  }

  private getDefaultDateSinceString({ seconds, minutes, hours, days, weeks, months, years }): string {
    let returnString: string = '';
    let diffValue: number = 0;

    if (years > 0) {
      diffValue = years;
      returnString = `${years} year`;
    }
    else if (months > 0) {
      diffValue = months;
      returnString = `${months} month`
    }
    else if (weeks > 0) {
      diffValue = weeks;
      returnString = `${weeks} week`
    }
    else if (days > 0) {
      diffValue = days;
      returnString = `${days} day`
    }
    else if (hours > 0) {
      diffValue = hours;
      returnString = `${hours} hour`
    }
    else if (minutes > 0) {
      diffValue = minutes;
      returnString = `${minutes} minute`
    }
    else if (seconds > 0) {
      diffValue = seconds;
      returnString = `${seconds} second`
    }

    returnString += diffValue > 1 ? 's' : '';
    return returnString
  }

  private getTimeSince(diffMs: number): any {
    let seconds = Math.round(diffMs / 1000);
    let minutes = Math.round(seconds / 60);
    let hours = Math.round(minutes / 60);
    let days = Math.round(hours / 24);
    let weeks = Math.round(days / 7);
    let months = Math.round(weeks / 4.35);
    let years = Math.round(months / 12);
    return { seconds, minutes, hours, days, weeks, months, years }
  }
}
