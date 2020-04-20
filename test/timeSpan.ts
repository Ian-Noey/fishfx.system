import { dateTime, timeSpan } from '../src'

const beginTime: dateTime = new dateTime("2020-4-1 11:22:55");
const endTime: dateTime = new dateTime("2020-7-22 12:52:32");

const span = new timeSpan(endTime, beginTime);
console.log(span.totalSeconds);