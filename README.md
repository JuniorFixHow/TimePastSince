# Installation
npm i @juniorfixhow/durationjs

# Usage
const { checkTimeSince, timeRemaining } = require("@juniorfixhow/durationjs"); //commonjs
import { checkTimeSince, timeRemaining } from "@juniorfixhow/durationjs"; //module

# checkTimeSince
This function checks for the time difference between the current date-time and the past.

const past = checkTimeSince(new Date("2024-04-11T09:21:04.459Z"));
console.log(past + ' ago')

# timeRemaining
This function checks for the time difference between the future date-time and the current one.

const time = new Date(new Date().setHours(new Date().getHours()+5)); //this is supposed to be the future date-time.
const future = timeRemaining(time)
console.log(future + ' remaining')