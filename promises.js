
function greetAfterDelay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello! Promise is resolved after 2 seconds.");
      }, 2000);
    });
  }
  
  console.log("Waiting...");
  
  greetAfterDelay()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  