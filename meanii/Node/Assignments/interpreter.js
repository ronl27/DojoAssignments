// Problem #1

// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

// Answer:
// functions and variable declarations get hoisted to the top.
// Everything else remains the same
// firstFunc was never invoked, so first_variable after it was set.
// var first_variable;
// function firstFunc(){
//   first_variable = "hi";
//   console.log(first_variable);
// }
// console.log(first_variable);
// first_variable = "Here I am";
// console.log(first_variable);


// Problem # 2
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

// Answer:
// var food; //Declare outer scope food variable
// function eat(){
//   var food;
//   food = "half-chicken";
//   console.log(food); // half-chicken console.log since there is a LOCAL food
//   food = "gone"; // LOCAL food is changed to gone
//   console.log(food); // console log gone
// }
// food = "Chicken"; //outer food is set to chicken
// eat(); // invoking eat so half-chicken and gone will console.log
// console.log(food); // will console.log Chicken

//Problem # 3
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

// Answer:
var new_word; // outer scope variable
function lastFunc(){
  new_word = "Old"; // still referencing the outer scope new_word variable
}
new_word = "New!"
console.log(new_word); //lastFunc wasnt invoked so it will console.log "New"
