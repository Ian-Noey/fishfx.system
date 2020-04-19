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

  public ticksPerMillisecond: number = 10000;
  private millisecondsPerTick: number = 1.0 / this.ticksPerMillisecond;

  public ticksPerSecond: number = this.ticksPerMillisecond * 1000;   // 10,000,000
  private secondsPerTick: number = 1.0 / this.ticksPerSecond;         // 0.0000001

  public ticksPerMinute: number = this.ticksPerSecond * 60;         // 600,000,000
  private minutesPerTick: number = 1.0 / this.ticksPerMinute; // 1.6666666666667e-9

  public ticksPerHour: number = this.ticksPerMinute * 60;        // 36,000,000,000
  private hoursPerTick: number = 1.0 / this.ticksPerHour; // 2.77777777777777778e-11

  public ticksPerDay: number = this.ticksPerHour * 24;          // 864,000,000,000
  private daysPerTick: number = 1.0 / this.ticksPerDay; // 1.1574074074074074074e-12

  private millisPerSecond: number = 1000;
  private millisPerMinute: number = this.millisPerSecond * 60; //     60,000
  private millisPerHour: number = this.millisPerMinute * 60;   //  3,600,000
  private millisPerDay: number = this.millisPerHour * 24;      // 86,400,000

  // public maxSeconds = Number.MAX_VALUE / this.ticksPerSecond;
  // public minSeconds = Number.MIN_VALUE / this.ticksPerSecond;

  public maxMilliSeconds = Number.MAX_VALUE / this.ticksPerMillisecond;
  public minMilliSeconds = Number.MIN_VALUE / this.ticksPerMillisecond;

  // public ticksPerTenthSecond = this.ticksPerMillisecond * 100;
  public get ticks() {
    return this._ticks;
  }

  public get days() {
    return this._ticks / this.ticksPerDay;
  }

  public get hours() {
    return (this._ticks / this.ticksPerHour) % 24;
  }

  public get milliseconds() {
    return (this._ticks / this.ticksPerMillisecond) % 1000;
  }

  public get minutes() {
    return (this._ticks / this.ticksPerMinute) % 60;
  }

  public get seconds() {
    return (this._ticks / this.ticksPerSecond) % 60;
  }

  public get totalDays() {
    return this._ticks * this.daysPerTick;
  }

  public get totalHours() {
    return this._ticks * this.hoursPerTick;
  }

  public get totalMilliseconds() {
    const temp: number = this._ticks * this.millisecondsPerTick;
    if (temp > this.maxMilliSeconds)
      return this.maxMilliSeconds;

    if (temp < this.minMilliSeconds)
      return this.minMilliSeconds;

    return temp;
  }

  public get totalMinutes() {
    return this._ticks * this.minutesPerTick;
  }

  public get totalSeconds() {
    return this._ticks * this.secondsPerTick;
  }

}