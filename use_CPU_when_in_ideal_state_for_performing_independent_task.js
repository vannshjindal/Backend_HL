  function main(callbackFun) {
    console.log("Wait for 3 seconds...");
    setTimeout(() => {
        callbackFun()
    }, 5000);
  }
  
  function callback1(){
    let a  = 1
    console.log(`dependent task ${a}`)
    console.log(`1000 lines`)
  }

  function callback2(){
    console.log(`independent task`)
  }

  main(callback1);
  callback2()
  