export function startTimer(minutes = 10, element) {
  let remainingTime = minutes * 60;

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  }

  function updateTimer() {
    const timeString = formatTime(remainingTime);
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(timerInterval);
    }

    if (element) {
      element.textContent = `${timeString}`;
    }

    return timeString;
  }

  const timerInterval = setInterval(updateTimer, 1000);

  updateTimer();
}
