let counter = 1;

const intervalID = setInterval(() => {
  console.log(`Counter: ${counter}`);
  counter++;

  if (counter > 5) {
    //clearInterval(intervalID);
    console.log("Stopped after 5 times!");
  }
}, 1000);
