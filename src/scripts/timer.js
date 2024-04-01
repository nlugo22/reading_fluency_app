// time limit defined in miliseconds
const timeLimit = 10 * 1000; // 1 minute

// Start timer when page is loaded
const startTime = Date.now();

// gran the element that displays the time
const time = document.getElementById("timer");

// function to format the time
function formatTime(miliseconds) {
  const totalSeconds = Math.ceil(miliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// check if time limit has been reached
function checkTimeLimit() {
  const elapsedTime = Date.now() - startTime;
  const remainingTime = timeLimit - elapsedTime;
  
  // update timer
  time.innerText = formatTime(remainingTime);

  if (remainingTime <= 0 ) {
    clearInterval(timerInterval); // stop countdown
 //   window.location.href = "results.html";
  }
}

checkTimeLimit();

const timerInterval = setInterval(checkTimeLimit, 1000);
