let counterValue = 0;
let timerValue = 9990; // milliseconds (9.99 seconds)
let timerInterval;

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const timerElement = document.getElementById("timer");

function updateCounter(value) {
  counterValue = Math.max(0, counterValue + value);
  counterElement.textContent = counterValue;
}

function updateTimer(value) {
  timerValue = value;
  const seconds = (timerValue / 1000).toFixed(2);
  timerElement.textContent = seconds;
}

incrementButton.addEventListener("click", () => {
  updateCounter(1);
  updateTimer(9990);
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (timerValue > 0) {
      updateTimer(timerValue - 10);
    }
  }, 10);
});

decrementButton.addEventListener("click", () => {
  updateCounter(-1);
  clearInterval(timerInterval);
});