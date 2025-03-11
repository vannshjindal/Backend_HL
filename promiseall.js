const promise1 = new Promise((resolve) => setTimeout(() => resolve(" Task 1 Done"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(" Task 2 Done"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(" Task 3 Done"), 3000));

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log("All tasks finished:", results))
  .catch((error) => console.log("One of the tasks failed:", error));



// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 Done"), 1000));
// const promise2 = new Promise((_, reject) => setTimeout(() => reject("Task 2 Failed"), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 Done"), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((results) => console.log("All tasks finished:", results))
//   .catch((error) => console.log("One of the tasks failed:", error));
