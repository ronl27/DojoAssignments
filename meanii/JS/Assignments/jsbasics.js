//Basic 1
// • Create a variable x as an empty array []. Log this array to your console.
var x = [];
console.log(x)
//
// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
x.push('coding','dojo','rocks');
console.log(x)
//
// • Use .pop() to remove the final element of your array.
x.pop();
console.log(x)
// • Log the final value of x, what is it?
console.log(x)

// Basic 2
// • Create a const called y, and store an empty array there. Log this to your console.
const y = [];
console.log(y)
// • Use .push() to add the number 88 to array y.
y.push(88);
console.log(y)
// • What happened?
// 88 was added to the array of Y

// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
var z = [9, 10, 6, 5, -1, 20, 13, 2]
// • Print every element to the console.
for(var i = 0; i < z.length; i++){
  console.log(z[i])
}
// • Now print every element except the final number.
for(var i = 0; i < z.length - 1; i++){
  console.log(z[i])
}

// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
// • Print the length of all names to the console.
for(var i = 0; i < names.length; i++){
  console.log(names[i].length);
}
// • Now modify your code so only names with a length of 5 print.
for(var i = 0; i < names.length; i++){
  if(names[i].length === 5);
    console.log(names[i]);
}


// Basic 5
// • Create a function yell that takes one parameter called string.
function yell(string){
  var str = 'hello'
  console.log(yell.toUpperCase());
};
return('hello')
// • Make yell return that string in all uppercase.

// • Where could you look to find out more about uppercasing strings in JavaScript?


//ASSIGNMENT IS NOT COMPLETE. Last bullet point of basic 4 and Basic 5 are not complete
