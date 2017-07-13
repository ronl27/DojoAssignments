// Loops

// This means start at i = 0; as long as i < 10 keep looping; after every loop add 1 to i
// for (var i = 0; i < 10; i++) {     // notice the var keyword preceding our variable name as always
//     console.log(i);
// }
// anatomy: var i = 0; <-- a starting variable usually countable.
// i < 10; <-- logic of when to end (usually just 1 thing, but you can use complex logic if you want to/need to);
// i ++ <-- mechanism for incrementing i to reach the logical end

// var arr = [4,5,6,3,5,4];
// for (var i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// For-in loops

var ninja = {
  name:'Susanna',
  Mean_belt:10,
  ios_belt:10,
  python_belt:10,
  php_belt:9,
  ruby_belt:9.75,
}

for (var key in ninja){
  if(ninja.hasOwnProperty(key)){
    console.log(key);
    console.log(ninja[key]);
  }
}
