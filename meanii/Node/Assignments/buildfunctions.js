// // Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
//
// function runningLogger(){
//   console.log("I am running");
// }
//
// //Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
//
// function multiplyByTen(numb){
//   if(typeof(numb) == "number"){
//     return numb*10;
//   }
// }
// console.log(multiplyByTen(5));
//
//
// //Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
//
// function stringReturnOne(){
//   return "Hi";
// }
// console.log(stringReturnOne())
//
// function stringReturnTwo(){
//   return "Hello";
// }
// console.log(stringReturnTwo())
//
// //string Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
//
// function caller(Param){
// // Find out if Param is a function
//   if(typeof Param === "function"){
//     console.log("its a function")
//     param();
//   }
// }
// caller()
//
// // Medium: Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to the function are functions, console.log the value that each function returns when invoked.
//
function myDoubleConsoleLog(paramA, paramB){
  if(typeof paramA === "function"){
    console.log(paramA()) // # 5 will print fifth
  }

  if(typeof paramB === "function"){
    console.log(paramB()) // # 6 will print sixth
  }
}
function returnFive(){
  return 5;
}

function returnHello(){
  return "Hello";
}
// myDoubleConsoleLog(function(){
//   console.log("Hello there")
//   return "Hello"
// },function(){
//   return "Hello everyone!"
// })

// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(paramA){
    console.log("Starting...") // #1 will print first
    setTimeout(function(){
      if(typeof paramA === "function"){
        console.log("About to invoke a function") // # 4 will print fourth
        paramA(returnFive, returnHello);
      }
    }, 4000);
    console.log("Ending?") // # 2 will print second
    return("interesting");
  }
console.log(caller2(myDoubleConsoleLog)); // # 3 will print third
