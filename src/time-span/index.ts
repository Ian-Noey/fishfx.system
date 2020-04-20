import { dateTime } from '..';

export default class timeSpan {
  constructor(biggerTime: dateTime, smallerTime: dateTime) {
    this._biggerTime = biggerTime;
    this._smallerTime = smallerTime;

    //TODO: 在js中tickes是毫秒数，不像C#中的刻度。同时要考虑到时区的问题，北京时区是从1970-1-1 08:00:00开始计算。
    //TODO：同时需要考虑，在js中计算精度问题。
    this._ticks = this._biggerTime.tickes - this._smallerTime.tickes;
  }

  private _biggerTime?: dateTime;
  private _smallerTime?: dateTime;
  private _ticks: number = 0;


  // public ticksPerTenthSecond = this.ticksPerMillisecond * 100;
  public get ticks() {
    return this._ticks;
  }

  // public get days() {
  //   return Math.round(this._ticks / this.ticksPerDay);
  // }

  // public get hours() {
  //   return Math.round((this._ticks / this.ticksPerHour) % 24);
  // }

  // public get milliseconds() {
  //   return Math.round((this._ticks / this._ticks) % 1000);
  // }

  // public get minutes() {
  //   return Math.round((this._ticks / this.ticksPerMinute) % 60);
  // }

  // public get seconds() {
  //   return Math.round((this._ticks / this.ticksPerSecond) % 60);
  // }

  // public get totalDays() {
  //   return Math.round(this._ticks * this.daysPerTick);
  // }

  // public get totalHours() {
  //   return Math.round(this._ticks * this.hoursPerTick);
  // }

  // public get totalMilliseconds() {
  //   if (this._ticks > this.maxMilliSeconds)
  //     return this.maxMilliSeconds;

  //   if (this._ticks < this.minMilliSeconds)
  //     return this.minMilliSeconds;

  //   return this._ticks;
  // }

  public get totalMinutes() {
    return Math.round(this._ticks / 1000 / 60);
  }

  public get totalSeconds() {
    return Math.round(this._ticks / 1000);
  }

}