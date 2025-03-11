let countdown = 5; 

console.log("Countdown starts...");

function startCountdown() {
    if (countdown > 0) {
    console.log(`Time left: ${countdown} seconds`);
    countdown--;

    setTimeout(startCountdown, 1000); 
  } else {
    console.log("Time's up!");
  }
}

setTimeout(startCountdown, 1000); 
