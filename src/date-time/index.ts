import timeSpan from '../time-span';
export default class dateTime {
  private _tickes: number = 0;

  constructor(time: string)
  constructor(ticks?: number)
  constructor(time: any, ticks?: any) {
    if (typeof ticks === "undefined") {
      this._tickes = new Date(time).getTime();
    } else {
      this._tickes = ticks;
    }
  }

  public static get now() {
    return new dateTime(new Date().getTime());
  }

  public get tickes() {
    return this._tickes;
  }
}
