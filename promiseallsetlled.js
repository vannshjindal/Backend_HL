const promise1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 Done"), 1000));
const promise2 = new Promise((reject) => setTimeout(() => reject("Task 2 Failed"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 Done"), 3000));

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        // console.log("Results:", results)
        //1000 lines 
    })
    .catch((err) => {
        console.error("Results:", results)
    })

console.log('abc')
//1000 lines

    await functionDependencyCode([promise1, promise2, promise3]) 
    
    // 1000 lines


    // cb(){
    //     //1000 lines 
    // }