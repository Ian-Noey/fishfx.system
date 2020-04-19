import timeSpan from '../time-span';
export default class dateTime {
  private _tickes: number = 0;

  constructor(ticks?: number) {
    this._tickes = ticks ?? 0;
  }

  public static get now() {
    return new dateTime(new Date().getTime());
  }

  public get tickes() {
    return this._tickes;
  }
}