# Installation
npm i @juniorfixhow/durationjs

# Usage
const { checkTimeSince, timeRemaining, countDown } = require("@juniorfixhow/durationjs"); //commonjs
<br>
import { checkTimeSince, timeRemaining, countDown } from "@juniorfixhow/durationjs"; //module

# checkTimeSince
This function checks for the time difference between the current date-time and the past.

const past = checkTimeSince(new Date("2024-04-11T09:21:04.459Z"));
<br>
console.log(past + ' ago')

# timeRemaining
This function checks for the time difference between the future date-time and the current one.
<br>
const time = new Date(new Date().setHours(new Date().getHours()+5)); //this is supposed to be the future date-time.
<br>
const future = timeRemaining(time)
<br>
console.log(future + ' remaining')

# countDown
This function counts down from a future date and stops when it reaches the current date-time
<br>

### Example Usage

```javascript
import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const timer = countDown('2024-04-13T12:00:00');

    const intervalId = setInterval(() => {
      const time = timer.getFormattedTime();
      setFormattedTime(time);
    }, 1000);

    // Call the stop method and clear the interval when the component unmounts
    return () => {
      timer.stop();
      clearInterval(intervalId);
    };
  }, []);

  return <div>{formattedTime}</div>;
};