// 'use strict';

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // const italianFoods = new Set([
// //   'pasta',
// //   'gnocchi',
// //   'tomatoes',
// //   'olive oil',
// //   'garlic',
// //   'basil',
// // ]);

// // const mexicanFoods = new Set([
// //   'tortillas',
// //   'beans',
// //   'rice',
// //   'tomatoes',
// //   'avocado',
// //   'garlic',
// // ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };
// //   order: function(starterImdex,mainIndex)
// //   {
// //      return [this.starterMenu[starterImdex], this.mainMenu[mainIndex]]
// //   },
// // };

// // const {name,openingHours,categories}=restaurant
// // // console.log(name,openingHours,categories);

// // const {
// //   name:resturantName,
// //   openingHours:hours,
// // categories:tags,
// // }=restaurant
// // // console.log(resturantName,hours,tags);

// // //spread operator

// // const arr=[7,8,9];
// // const badNewArr=[1,2,arr[0],arr[1],arr[2]]
// // // console.log(badNewArr);

// // const newArr=[1,2,...arr]
// // // console.log(...newArr);

// // const newMenu=[...restaurant.mainMenu,'Paratha']
// // // console.log(...newMenu);

// // //copy array

// // const mainMenuCopy=[...restaurant.mainMenu];

// // //join 2 array

// // const newMenucopy=["paratha","Chole Bhature"]

// // // console.log(...mainMenuCopy,...newMenucopy);

// // let players1=['a','b','c','d','e','f','g','h','i','j','k']
// // let players2=['l','m','n','o','p','q','r','s','t','u','v']

// // const [gk,...fieldPlayer]=players1
// // // console.log(gk,fieldPlayer);

// // const allPlayers=[...players1,...players2]
// // // console.log(allPlayers);

// // const menu=[...restaurant.starterMenu,...restaurant.mainMenu]

// // for(const item of menu)
// // {
// //   console.log(item);

// // }
// // for(const [i,el] of menu.entries())
// // {
// //   console.log(`${[i+1]}: ${[el]}`);

// // }

// const abc = 0;
// const xyz = abc || 10;
// // console.log(xyz);

// // let [first, ,second]= restaurant.categories
// // console.log(first,second);
// // [first,second]=[second,first]
// // console.log(first,second);

// // const [starter,mainCourse]=restaurant.order(2,0)
// // console.log(starter,mainCourse);

// const rest1 = {
//   name: 'Capri',
//   numOfGuest: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// rest1.numOfGuest = rest1.numOfGuest || 10;
// // rest2.numOfGuest=rest2.numOfGuest || 10
// // console.log(rest1);
// // console.log(rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, players] of game.scored.entries());
// // console.log(`Goal ${i+1}: ${players}`);

// let avg = 0;
// const odds = Object.values(game.odds);
// //  console.log("Hi",odds);

// for (const odd of odds) avg += odd;
// avg /= odds.length;
// // console.log(avg);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   // console.log(`Odd of ${teamStr}: ${odd}`);
// }

// //Set

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'burger',
//   'maggi',
//   'pizza',
//   'maggi',
// ]);
// const UpdatedorderSet = new Set([
//   'pasta',
//   'pizza',
//   'burger',
//   'maggi',
//   'pizza',
//   'maggi',
//   'chawmin',
// ]);
// // console.log(new Set([...orderSet,...UpdatedorderSet]));
// const unionIn = orderSet.union(UpdatedorderSet);
// const Interaction = orderSet.difference(UpdatedorderSet);

// // console.log([...unionIn]);
// // console.log([...Interaction]);

// const va = [1, 2, 3, 4, 5, 5, 5, 4, 6, 5, 6];
// const newz = new Set(va);
// // console.log([...newz]);

// //Map

// const rest = new Map();
// rest.set('name', 'Class');
// rest.set(1, 'Fire', 'italy');
// // console.log(rest.set(2,'India','UK'));

// rest
//   .set('categories', ['Italian', 'Pizzaeria', 'Veg'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are close');

//  console.log(rest.get('name'));
// console.log(rest.get(true));
// // const time=1
// // console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

// const question = new Map([
//   ['qestion', 'What is the best programming language?'],
//   [1, 'Java'],
//   [2, 'JavaScript'],
//   [3, 'C'],
//   ['correct', 2],
//   [true, 'Correct'],
//   [false, 'Wrong Answer'],
// ]);
// // console.log(question);

// //quiz app

// for (const [key, value] of question) 
//   if (typeof key === 'number')
//     console.log("hi");
//     const answer = Number(prompt('Your answer'));
//     const QuizAnswer = question.get('correct') === answer;
//     // console.log(question.get(QuizAnswer));  

  
    
// // football quiz

// const gameEvents=new Map([
//   [17,'Goal'], //['keys','values]
//   [36,'Subst'],
//   [47,'Goal'],
//   [61,'Subst'],
//   [64,'yellow card'],
//   [69,'Red card'],
//   [70,'Subst'],
//   [72,'Subst'],
//   [76,'Goal'],
//   [80,'Goal'],
//   [92,'Yellow Card']
// ])
// const events=new Set(gameEvents.values());
// // console.log(events);

// gameEvents.delete(64)
// // console.log(`An events happened ,on average ,every ${90/gameEvents.size} minutes`);

// const time=[...gameEvents.keys()].pop();
// // console.log(`An events happened ,on average ,every ${time/gameEvents.size} minutes`);

// for (const [min,event] of gameEvents) {
//   const half=min<=45?'FIRST':'SECOND';
//   // console.log(`[${half} HALF] ${min}:${event}`);
// }

// const airline='TAP Air portugal'
// const plane='A320'

// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);


// //Comparing emails

// const email='itsmerit37@gmail.com'
// const loginemail='  itSmerIt37@gmail.com \n'
// const lowerEmail=loginemail.toLowerCase();
// const trimEmail=lowerEmail.trim()
// console.log(lowerEmail);
// console.log(trimEmail);
// if(email===trimEmail)
//   console.log('correct');

// const stra="Hi welcome";
// const resullt=stra.slice(3)
// const spresult=stra.split('w')
// console.log(stra);
// console.log(resullt);
// console.log(spresult);


// document.body.append(document.createElement('textarea'))
// document.body.append(document.createElement('button'))
// const text=document.querySelector('textarea').value;
// document.querySelector('button').addEventListener('click',function()
// {
//   const text=document.querySelector('textarea').value;
//   const rows=text.split('\n')
//   for(const row of rows)
//   {
//    const [first,second]= row.toLowerCase().trim().split('_')
//    const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`;
//    console.log(output.padEnd(20, ' '));
   
//   }
  
   
// })

const flights=
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384772;fao93766109;11:45+_Delayed_Arrival;hel743929980;fao93766109;12:05+_Departure;fao93766109:11:45;lis2323639855;12:30'
for (const flight of flights.split('+')) {
  const [type, from, to, time]=flight.split(';')
  const outputt=`${type.startsWith('_Delayed')?'*':''}${type.replaceAll('_',' ')} ${from.toUpperCase().slice(0,3)} to ${to.toUpperCase().slice(0,3)} (${time.replace(':','h')})`;
  console.log(outputt);
  
}
// console.log(flight.split('+'));
// document.body.append(document.createElement('textarea'))
// document.body.append(document.createElement('button'))
// document.addEventListener('click',function()
// {
// const text=document.querySelector('textarea').value
// })
  