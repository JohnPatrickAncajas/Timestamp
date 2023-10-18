function updateClock() {
    const NOW = new Date();
    const SECONDS = NOW.getSeconds();
    const MINUTES = NOW.getMinutes();
    const HOURS = NOW.getHours();
    const DAY = NOW.getDate();
    const MONTH = NOW.getMonth() + 1;
    const YEAR = NOW.getFullYear();

    let secondsElement = 0;
    let minutesElement = 0;
    let hoursValue = HOURS;
    let dayPeriod = "AM";

    if (HOURS >= 12) {
        dayPeriod = "PM";

        if (HOURS > 12) {
            hoursValue = HOURS - 12;
            dayPeriod = "PM";
        }
    } 

    if (SECONDS >= 10) {
        secondsElement = "";
    }

    if (MINUTES >= 10) {
        minutesElement = "";
    }

    const timeElement = document.getElementById("time");
    timeElement.innerHTML = `${hoursValue}:${minutesElement}${MINUTES}:${secondsElement}${SECONDS} ${dayPeriod}<br>${DAY}/${MONTH}/${YEAR}`;

    // Provide a quote based on time, day, and month

    let quote = "The value of time is immeasurable.";

    if (HOURS >= 6 && HOURS < 12) {
        quote = "Good morning! Make the most of your day!";
    } else if (HOURS >= 12 && HOURS < 18) {
        quote = "Good afternoon! Time for a break.";
    } else if (HOURS >= 18 && HOURS < 24) {
        quote = "Good evening! Reflect on your day.";
    }

    if (DAY === 1) {
        quote = "It's a new month, embrace change!";
    } else if (DAY === 31) {
        quote = "The month is coming to an end, plan for the next.";
    }

    if (MONTH === 1) {
        quote = "Happy New Year! A fresh start awaits.";
    } else if (MONTH === 7) {
        quote = "July is here, enjoy the summer!";
    }

    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = `${quote}`;
}

setInterval(updateClock, 1000);

updateClock();