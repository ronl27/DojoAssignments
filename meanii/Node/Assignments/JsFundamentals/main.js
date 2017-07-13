// // FUNDAMENTALS PRT 1
//
// // Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
//   var x = [3,5,'Dojo','Rocks','Michael','Sensei'];
//     for (var i = 0; i < x.length; i++) {
//       console.log(x[i])
//     }
//
// // Add a new value (100) in the array x using a push method.
//   x.push(100);
//   console.log(x)
//
// // Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
//   var x = [3,5,'Dojo','Rocks','Michael','Sensei',['hello','world','javascript is fun']];
//     console.log(x)
//
// // Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
//   var sum = 0;
//   for (var i = 1; i < 501; i++) {
//     sum += i;
//     }
//     console.log(sum);
//
// // Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
//   var arr = [1, 5, 90, 25, -3, 0];
//   var min = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   console.log(min);
//
// // Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
// var arr = [1, 5, 90, 25, -3, 0];
// var sum = arr[0];
// for (var i = 1; i < arr.length; i++){
//   sum += arr[i];
// }
// console.log(sum/arr.length);

// Write a for-in loop that will navigate through the object below (or write your own object):

// var newNinja = {
//   name: 'Jessica',
//   profession: 'coder',
//   favorite_language: 'JavaScript',
//   dojo: 'Dallas'
// };
// for (var i in newNinja){
//   console.log(i + ":" + newNinja[i]);
// }

//FUNDAMENTALS Prt 2

// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumXY(x,y){
  var sum = 0;
  for (var i = 0; i < y + 1; i++){
    sum += i;
  }
  return sum;
}

//Write a loop that will go through an array, find the minimum value, and then return it
function minVal(array){
  if(array){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
}

//Write a loop that will go through an array, find the average of all of the values, and then return it
function findAvg(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}

//Rewrite these 3 as anonymous functions assigned to variables.
var sumXY = function(x,y){
  var sum = 0;
  for(var i = 0; i < y + 1; i++){
    sum += i;
  }
  return sum;
}

var minVal = function minVal(array){
  if(array){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
}

var findAvg = function(array){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}

// Rewrite these as methods of an object

var myObject = {

  sumXY: function(x,y){
    var sum = 0;
    for (var i = 0; i < y + 1; i++){
      sum += i;
    }
    return sum;
  },// end of sumXY
  minVal: function minVal(array){
    if(array){
      var min = arr[0];
      for (var i = 1; i < arr.length; i++){
        if(arr[i] < min){
          min = arr[i];
        }
      }
      return min;
    }// end of minVal
  },
  findAvg: function findAvg(array){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum / arr.length;
  } // end of findAvg
}// end of myObject

//Create a JavaScript object called person with the following properties/methods

// Properties
// name - set this as your own namedistance_traveled - set this initially as zero
var person = {}
  person = {
  name: "Ronnel",
  distance_traveled: 0,
// Methods
// say_name - should alert the object’s name propertysay_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
  say_name:function(){
    console.log(person.name)
  },

  say_something:function(phrase){
    console.log(person.name);
  },

  walk: function(){
    console.log(person.name, "is walking here");
    person.distance_traveled += 3;
    return person;
  },

  run : function(){
    console.log(person.name, 'is running!');
    person.distance_traveled += 10;
    return person;
  },

  crawl : function(){
    console.log(person.name, 'is crawling!');
    person.distance_traveled += 1;
    return person;
  },
  chewgum : function(){
    console.log("I can chew gum, but I cannot chew and walk...")
  }
}

person.walk()

// Fundamentals prt 3
function ninja(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltlevel = 0;
  ninja.levelUp = function(){
    if(ninja.beltlevel < 2){
      ninja.beltlevel += 1;
      ninja.belt = belts[ninja.beltlevel];
    }
    return ninja
  }
  ninja.belts = belts[ninja.beltlevel]
  return ninja;
}
