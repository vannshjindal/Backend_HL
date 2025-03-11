function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function example() {
    console.log("Wait for 3 seconds...");
    await delay(3000);
    console.log("Done waiting!");
  }
  
  example();
  