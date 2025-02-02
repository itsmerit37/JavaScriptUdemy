'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterImdex,mainIndex)
  {
     return [this.starterMenu[starterImdex], this.mainMenu[mainIndex]]
  },
};

const {name,openingHours,categories}=restaurant
console.log(name,openingHours,categories);

const {
  name:resturantName, 
  openingHours:hours,
categories:tags,
}=restaurant
console.log(resturantName,hours,tags);

//spread operator

const arr=[7,8,9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]]
console.log(badNewArr);

const newArr=[1,2,...arr]
console.log(...newArr);

const newMenu=[...restaurant.mainMenu,'Paratha']
console.log(...newMenu);

//copy array

const mainMenuCopy=[...restaurant.mainMenu];

//join 2 array

const newMenucopy=["paratha","Chole Bhature"]

console.log(...mainMenuCopy,...newMenucopy);

let players1=['a','b','c','d','e','f','g','h','i','j','k']
let players2=['l','m','n','o','p','q','r','s','t','u','v']

const [gk,...fieldPlayer]=players1
console.log(gk,fieldPlayer);

const allPlayers=[...players1,...players2]
console.log(allPlayers);








// let [first, ,second]= restaurant.categories
// console.log(first,second);
// [first,second]=[second,first]
// console.log(first,second);

// const [starter,mainCourse]=restaurant.order(2,0)
// console.log(starter,mainCourse);




