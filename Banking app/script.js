'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements=function(movements)
// {
//   containerMovements.innerHTML='';
//   movements.forEach(function (mov, i){
//   const type= mov > 0 ? 'deposit' : 'withdrawal' ;
//   const html=`
//   <div class="movements__row">
//   <div class="movements__type movements__type--${type}">${1 + i} ${type}</div>
//   <div class="movements__value">${mov}€</div>
//   </div> `;
// containerMovements.insertAdjacentHTML('afterbegin', html)
// })
// }

// const calcDisplayBalance=function(acc)
// {
//    acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0)
//   labelBalance.textContent=`${acc.balance}€`
// }

// const calcDisplaySummary=function(acc)
// {
//   const income=acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0)
//   labelSumIn.textContent=`${income}€`

//   const out=movements.filter(mov=>mov<=0).reduce((acc,mov)=>acc+mov,0)
//   labelSumOut.textContent=`${Math.abs(out)}€`

//   const interest=movements.filter(mov=>mov>0).map(deposite=>(deposite*1.2)/100).reduce((acc,interest)=>acc+interest,0)
//   labelSumInterest.textContent=`${interest}€`

  
// }


// const createUserName=function(accs){
// accs.forEach(function(acc)
// {
//   acc.userName=acc.owner.toLowerCase().split(' ').map(name=> name[0])
// .join(''); 
// })
// }
// const updateUI=function(acc)
// {
//   displayMovements(acc.movements)
//   calcDisplayBalance(acc)
//   calcDisplaySummary(acc)
// }
// createUserName(accounts);



// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const calcAverageHumanAge=(ages)=>{
//   const humanAges=ages.map(age=>(age<=2 ? 2*age : 16+age*4)).filter(age=>age>=18).reduce((acc,age)=>acc+age/arr.length,0)
//   return average
// }

// const firstWithdrawal= movements.find(mov=>mov<0);
// // console.log(firstWithdrawal);

// const account=accounts.find(acc=>acc.owner==='Jessica Davis')
// // console.log(account);

// //Event handler
// let currentAccount;
// btnLogin.addEventListener('click',function(e)
// {
//   //prevent from submitting
//   e.preventDefault();
//   currentAccount= accounts.find(acc=>acc.userName===inputLoginUsername.value);
//   console.log(currentAccount);
//   if(currentAccount?.pin===Number(inputLoginPin.value))
//   {
//     //display UI and welcome message

//     labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`
//     containerApp.style.opacity=100;
//    inputLoginUsername.value=inputLoginPin.value='';
//    inputLoginPin.blur();
//     updateUI(currentAccount)
//    console.log('login');
   
//   }
// })

// btnLoan.addEventListener('click',function(e)
// {
//    e.preventDefault();
//     const amount=Math.floor(inputLoanAmount.value);
//     if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*.1))
//     {
//       currentAccount.movements.push(amount)
//       updateUI(currentAccount)
//     }
//     inputLoanAmount.value='';
//     inputLoanAmount.blur();
// })

// btnTransfer.addEventListener('click',function(e)
// {
//   e.preventDefault();
//   console.log('transfer');
//   const amount=Number(inputTransferAmount.value);
//   const recieverAcc=accounts.find(acc=>acc.userName===inputTransferTo.value);
//   console.log(amount,recieverAcc);
//   if(amount>0 && recieverAcc && currentAccount.balance>=amount && recieverAcc?.userName !== currentAccount.userName)
//   {
//     currentAccount.movements.push(-amount)
//     recieverAcc.movements.push(amount)
//     updateUI(currentAccount)
//   }
//   inputTransferAmount.value=inputTransferTo.value='';
//   inputTransferAmount.blur();
  
// })
// btnClose.addEventListener('click',function(e)
// {
//   e.preventDefault();  
//   console.log('close');
//   if(inputCloseUsername.value===currentAccount.userName && Number(inputClosePin.value)===currentAccount.pin)
//   {
    
//     console.log('correct');
//     const index=accounts.findIndex(acc=>acc.userName===currentAccount.userName)
    

//     //delete account
//     accounts.splice(index,1)

//     //hide UI
//     containerApp.style.opacity=0;
//   }
//   inputCloseUsername.value=inputClosePin.value='';
  
// })
// let sorted=false;
// btnSort.addEventListener('click',function(e)
// {
//   e.preventDefault();
//   displayMovements(currentAccount.movements,!sorted)
//   sorted=!sorted;
// })  


// 'Your latest large movement was X movement ago'

// const latestLargeMovement=movements.findLastIndex( mov=> Math.abs(mov)>2000)
// console.log(latestLargeMovement);

// console.log(`Your latest large movement was ${movements.length-latestLargeMovement-1} movement ago`);

/////////////////////////////////////////////////

// let arr=['a','b','c','d','e']
// console.log(arr.slice(2))  //  ['c', 'd', 'e']
// console.log(arr.slice(2,4))
// console.log(arr.slice(-2));
// console.log(...arr); // a,b,c,d,e

// console.log(arr.slice()); // all array o/p ['a', 'b', 'c', 'd', 'e']

// console.log(arr.splice(2));   //['c', 'd', 'e']
// console.log(...arr); //  a,b

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
// {
//   if(movement>0)
//   {
//     console.log(`Your desposite ${movement}`);
//   } else{
//     console.log(`Your withdrawal ${Math.abs(movement)}`); 
//   }
// }  

// //forEach
// console.log('-------For Each-------');

// movements.forEach(function(movement, index)
// {
//   if(movement>0)
//     {
//       console.log(`Movement ${index+1}:Your desposite ${movement}`);
//     } else{
//       console.log(`Movement ${index+1}:Your withdrawal ${Math.abs(movement)}`); 
//     }
//   }  
// )

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
//   ['USD', 'United States dollar'],
// ]);
// currencies.forEach(function(value,key,map)
// {
// console.log(`${key}: ${value}`);
// })

// //Set
// const currenciesUnique=new Set(['USD','EUR','EUR','GRP'])
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value,key,map)
// {
//   console.log(`${key}: ${value}`);  
// })


// const checkDogs = function(dogsJulia, dogsKate)
// {
//    const dogsJuliaCorrected=dogsJulia.slice();
//    console.log(dogsJuliaCorrected);
   
//    dogsJuliaCorrected.splice(0,1)
//    console.log(dogsJuliaCorrected);
   
//    dogsJuliaCorrected.splice(-2)
//    console.log(dogsJuliaCorrected);

//   //  const x=dogsJulia.slice(1,3)

//   const dogs=dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function(dog,i)
// {
//   if(dog>=3)
//   {
//     console.log(`Dog number ${i+1} is and adult, and is ${dog} year old`);
//   } else {
//     console.log(`Dog number ${i+1} is still a puppy`);

//   }
// })
  
   
// }
// checkDogs([3,5,2,12,7], [4,1,15,8,3]);

// const movements=[200,450,-400,3000,-650,-130,70,1300]
// const eurToUsd=1.1;
// const movementTsUSD=movements.map(function(mov)
// {
//   console.log(mov);
//     return mov*eurToUsd
    
// })
// console.log(movements);
// console.log(movementTsUSD);


// const movementsUSDFor=[]

// for(const mov of movements)
//    movementsUSDFor.push(mov * eurToUsd)
//      console.log(movementsUSDFor);


// const deposite=movements.filter(function(mov)
// {
//    return mov>0
// })
// console.log(movements);
// console.log(deposite);

// const depositeFor=[]
// for(const mov of movements)
//  if(mov>0)
  
//     depositeFor.push(mov)
//     console.log(depositeFor);

//     const withdrawals=movements.filter(function(wit)
//     {
//       return wit <0
//     })
//     console.log(withdrawals);

//     const withdrawalss=movements.filter(wit=>
//     {
//       return wit <0
//     })
//     console.log("arrow",withdrawals);

//     const x=[1,2,3]
//     const arr=x=>{
//       console.log(x*2);
      
//     }
//     arr(x)
    

  //   const calcAverageHumanAge=function(ages)
  //   {
  //    const humanAges=ages.map(age=> age<=2 ? 2*age : 16+age*4)
  //     console.log(humanAges);
      
  //     const adults=humanAges.filter(age=>age>=18)
  //     console.log(adults);
      
  //     const average=adults.reduce((acc,age)=>acc+age,0)/adults.length
  //     return average
  //   }
  //   calcAverageHumanAge([5,2,4,1,15,8,3])


  //  const abx=[1,2,3,4,-1]
  //   const eurToUsd=2;
  //   const totalDeposite=abx.filter(mov=>mov>0).map(mov=>mov*eurToUsd).reduce((acc,mov)=>acc+mov,0)
  //   console.log(totalDeposite);

  // const breeds= [
  //   {
  //     breed:'German Shepherd',
  //     weight: 32,
  //     activities:['fetch','running']
  //   },
  //   {
  //     breed:'Husky',
  //     weight: 21,
  //     activities:['fetch','swimming']
  //   },
  //   {
  //     breed:'Labrador',
  //     weight: 25,
  //     activities:['fetch','swimming']
  //   },
  //   {
  //     breed:'Golden Retriever',
  //     weight: 30,
  //     activities:['fetch','swimming']
  //   }
  // ]
  // const huskyWeight=breeds.find(breed=>breed.breed==='Husky').weight
  // console.log(huskyWeight);

  // const dog=breeds.find(breed=>breed.activities.includes('fetch') && breed.activities.includes('swimming'))
  // console.log(dog);
  // // findName

  // const findName=breeds.filter(breed=>breed.activities.includes('fetch') && breed.activities.includes('swimming'))
  // const abc=findName.map(breed=>breed.breed)

  // console.log(abc);
  




 // Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 */

// const dogsJulia=[3,5,2,12,7]
// const dogsKate=[4,1,15,8,3]
// const checkDogs=function(dogsJulia,dogsKate)
// {
//   const dogsJuliaCorrected=dogsJulia.splice(1,3)
//   const all=[...dogsJuliaCorrected,...dogsKate]
//   console.log(all);
//   console.log(dogsJuliaCorrected);
//   all.forEach((d,i)=>{
//     if(d>=3)
//     {
//       console.log(`Dog number ${i+1} is an adult, and is ${d} years old`);
//     }else if (d<3)
//     {
//       console.log(`Dog number ${i+1} is still a puppy, and is ${d} years old`);
//     }
//   })
  
// }
// checkDogs(dogsJulia,dogsKate)



/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge=age=>age
.map(age=> age>=2 ?2*age : 16+age*4)
.filter(age=>age>=18)
.reduce((acc,age,i,arr)=>acc+age/arr.length,0)
const age1=calcAverageHumanAge([5,2,4,1,15,8,3])
const age2=calcAverageHumanAge([16,6,10,5,6,1,4])
console.log(age1,age2);
// console.log(calcAverageHumanAge([5,2,4,1,15,8,3]))
// console.log(calcAverageHumanAge([16,6,10,5,6,1,4]))

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/


const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

const huskyWeight=breeds.find(breed=>breed.breed==='Husky').averageWeight
console.log(huskyWeight);

const dogBothActivities=breeds.find(breed=>breed.activities.includes('running') && breed.activities.includes('fetch'))
console.log(dogBothActivities);  

const allActivities=breeds.flatMap(breed=>breed.activities)
console.log(allActivities);
const uniqueActivities=[...new Set(allActivities)]
console.log(uniqueActivities);



