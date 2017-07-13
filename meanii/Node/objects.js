// var hero = {};
// hero = {
//   name: 'James',
//   strength: 10,
//   power:['Mage'],
// }
//
// console.log(hero.name, hero.strength);
// console.log(hero['strength']); // you can even call the object this way
//
// // you can reassign any of the properties at any time.
// hero.name = 'steve';
// hero.strength = 11;
// console.log(hero.name, hero.strength)


var donut = {
  frosting: 'glazed',
  type: 'old fashioned'
}

console.log(donut.frosting, donut.type)

var glazeddonut = [
  {
    frosting: 'glazed',
    type: 'old fashioned',
    age: '10',
    time: 'minutes',
  },
  {
    frosting: 'glazed',
    type: 'old fashioned',
    age: '5',
    time: 'minutes',
  }
]

// console.log(glazeddonut[1])

var purchase;

if ((glazeddonut[0].age < 25 && glazeddonut[0].time == 'minutes') || glazeddonut[0].time == 'seconds'){
  purchase = glazeddonut[0];
} else {
  console.log('sorry it was out longer')
}
