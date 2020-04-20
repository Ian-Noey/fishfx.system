import { dateTime } from '..';

export default class timeSpan {
  constructor(biggerTime: dateTime, smallerTime: dateTime) {
    this._biggerTime = biggerTime;
    this._smallerTime = smallerTime;
    this._ticks = this._biggerTime.tickes - this._smallerTime.tickes;
  }

  private _biggerTime?: dateTime;
  private _smallerTime?: dateTime;
  private _ticks: number = 0;

  public get ticks() {
    return this._ticks;
  }

  public get days() {
    return Math.round(this._ticks / 1000 / 60 / 60 / 24);
  }

  public get hours() {
    return Math.round((this._ticks / 1000 / 60 / 60) % 24);
  }

  public get milliseconds() {
    return Math.round(this._ticks % 1000);
  }

  public get minutes() {
    return Math.round((this._ticks / 1000 / 60) % 60);
  }

  public get seconds() {
    return Math.round((this._ticks / 1000) % 60);
  }

  public get totalDays() {
    return Math.round(this._ticks / 1000 / 60 / 60 / 24);
  }

  public get totalHours() {
    return Math.round(this._ticks / 1000 / 60 / 60);
  }

  public get totalMinutes() {
    return Math.round(this._ticks / 1000 / 60);
  }

  public get totalSeconds() {
    return Math.round(this._ticks / 1000);
  }

  public get totalMilliseconds() {
    if (this._ticks > Number.MAX_VALUE)
      return Number.MAX_VALUE;

    if (this._ticks < Number.MIN_VALUE)
      return Number.MIN_VALUE;

    return this._ticks;
  }

}