// getting DOM elements
const time = document.getElementById("timer");
const result = document.getElementById('resultContainer');

// set up how long count-down lasts
const seconds = 10;
const startTime = Date.now();
const timeLimit = 1000 * seconds;

// update the display time every second
const timerInterval = setInterval(checkTimeLimit, 1000);

// logic for the timer in the right corner
function checkTimeLimit() {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = timeLimit - elapsedTime;

    // update timer
    time.innerText = formatTime(remainingTime);

    if (remainingTime <= 0) {
        clearInterval(timerInterval); // stop countdown
    }
}

// function to format the time
function formatTime(milliseconds) {
  const totalSeconds = Math.ceil(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// run a timeout before results displayed
setTimeout(() => {
    result.classList.toggle('hidden');
    console.log("Results have posted.");
}, timeLimit);

checkTimeLimit();