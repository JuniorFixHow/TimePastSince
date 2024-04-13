export const checkTimeSince = (time: Date) => {
    const t2 = new Date();
    let t = (t2.getTime() - time.getTime()) / (1000 * 3600 * 24);
    let hr = (t2.getTime() - time.getTime()) / (1000 * 3600);
    let min = (t2.getTime() - time.getTime()) / (1000 * 60);
  
    if (t > 365) {
      return `${Math.floor(t / 365)} years`;
    } else if (t === 365) {
      return `${Math.floor(t / 365)} year`;
    } else if (t === 30) {
      return `${Math.floor(t / 30)} month`;
    } else if (t > 30 && t < 365) {
      return `${Math.floor(t / 30)} months`;
    } else if (t === 7) {
      return `${Math.floor(t / 7)} week`;
    } else if (t > 7 && t < 30) {
      return `${Math.floor(t / 7)} weeks`;
    } else if (t === 1) {
      return `${Math.floor(t / 1)} yesterday`;
    } else if (t > 1 && t < 7) {
      return `${Math.floor(t / 1)} days`;
    } else if (hr === 1) {
      return `${Math.floor(hr / 1)} an hour`;
    } else if (hr > 1 && hr < 24) {
      return `${Math.floor(hr / 1)} hours`;
    } else if (min === 1) {
      return `${Math.floor(min / 1)} a minute`;
    } else if (min > 1 && min < 60) {
      return `${Math.floor(min / 1)} minutes`;
    } else if (min < 1) {
      return `just now`;
    }
  };



  export const timeRemaining = (time: Date) => {
    const now = new Date();
    let t = (time.getTime() - now.getTime()) / (1000 * 3600 * 24);
    let hr = (time.getTime() - now.getTime()) / (1000 * 3600);
    let min = (time.getTime() - now.getTime()) / (1000 * 60);
  
    if (t > 365) {
      return `${Math.floor(t / 365)} years`;
    } else if (t === 365) {
      return `${Math.floor(t / 365)} year`;
    } else if (t === 30) {
      return `${Math.floor(t / 30)} month`;
    } else if (t > 30 && t < 365) {
      return `${Math.floor(t / 30)} months`;
    } else if (t === 7) {
      return `${Math.floor(t / 7)} week`;
    } else if (t > 7 && t < 30) {
      return `${Math.floor(t / 7)} weeks`;
    } else if (t === 1) {
      return `${Math.floor(t / 1)} tomorrow`;
    } else if (t > 1 && t < 7) {
      return `${Math.floor(t / 1)} days`;
    } else if (hr === 1) {
      return `${Math.floor(hr / 1)} hour`;
    } else if (hr > 1 && hr < 24) {
      return `${Math.floor(hr / 1)} hours`;
    } else if (min === 1) {
      return `${Math.floor(min / 1)} a minute`;
    } else if (min > 1 && min < 60) {
      return `${Math.floor(min / 1)} minutes`;
    } else if (min < 1) {
      return `ending now`;
    }
  };



  export const countDown = (time: string) => {
    let formattedTime = ''; // Variable to store the latest formatted time
  
    const timerInterval = setInterval(() => {
      const futureDate = new Date(time);
      const now = new Date();
  
      if (futureDate > now) {
        const timeDiff = futureDate.getTime() - now.getTime();
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  
        formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      } else {
        clearInterval(timerInterval); // Clear the interval if the future date is reached
      }
    }, 1000);
  
    // Return a function that can be called to stop the timer and get the latest formatted time
    return {
      stop: () => clearInterval(timerInterval),
      getFormattedTime: () => formattedTime,
    };
  };