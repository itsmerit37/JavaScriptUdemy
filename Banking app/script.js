'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements=function(movements)
{
  containerMovements.innerHTML='';
  movements.forEach(function (mov, i){
  const type= mov > 0 ? 'deposit' : 'withdrawal' ;
  const html=`
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${1 + i} ${type}</div>
  <div class="movements__value">${mov}€</div>
  </div> `;
containerMovements.insertAdjacentHTML('afterbegin', html)
})
}

const calcDisplayBalance=function(acc)
{
   acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0)
  labelBalance.textContent=`${acc.balance}€`
}

const calcDisplaySummary=function(acc)
{
  const income=acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0)
  labelSumIn.textContent=`${income}€`

  const out=movements.filter(mov=>mov<=0).reduce((acc,mov)=>acc+mov,0)
  labelSumOut.textContent=`${Math.abs(out)}€`

  const interest=movements.filter(mov=>mov>0).map(deposite=>(deposite*1.2)/100).reduce((acc,interest)=>acc+interest,0)
  labelSumInterest.textContent=`${interest}€`

  
}


const createUserName=function(accs){
accs.forEach(function(acc)
{
  acc.userName=acc.owner.toLowerCase().split(' ').map(name=> name[0])
.join(''); 
})
}
const updateUI=function(acc)
{
  displayMovements(acc.movements)
  calcDisplayBalance(acc)
  calcDisplaySummary(acc)
}
createUserName(accounts);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcAverageHumanAge=(ages)=>{
  const humanAges=ages.map(age=>(age<=2 ? 2*age : 16+age*4)).filter(age=>age>=18).reduce((acc,age)=>acc+age/arr.length,0)
  return average
}

const firstWithdrawal= movements.find(mov=>mov<0);
// console.log(firstWithdrawal);

const account=accounts.find(acc=>acc.owner==='Jessica Davis')
// console.log(account);

//Event handler
let currentAccount;
btnLogin.addEventListener('click',function(e)
{
  //prevent from submitting
  e.preventDefault();
  currentAccount= accounts.find(acc=>acc.userName===inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin===Number(inputLoginPin.value))
  {
    //display UI and welcome message

    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity=100;
   inputLoginUsername.value=inputLoginPin.value='';
   inputLoginPin.blur();
    updateUI(currentAccount)
   console.log('login');
   
  }
})

btnLoan.addEventListener('click',function(e)
{
   e.preventDefault();
    const amount=Math.floor(inputLoanAmount.value);
    if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*.1))
    {
      currentAccount.movements.push(amount)
      updateUI(currentAccount)
    }
    inputLoanAmount.value='';
    inputLoanAmount.blur();
})

btnTransfer.addEventListener('click',function(e)
{
  e.preventDefault();
  console.log('transfer');
  const amount=Number(inputTransferAmount.value);
  const recieverAcc=accounts.find(acc=>acc.userName===inputTransferTo.value);
  console.log(amount,recieverAcc);
  if(amount>0 && recieverAcc && currentAccount.balance>=amount && recieverAcc?.userName !== currentAccount.userName)
  {
    currentAccount.movements.push(-amount)
    recieverAcc.movements.push(amount)
    updateUI(currentAccount)
  }
  inputTransferAmount.value=inputTransferTo.value='';
  inputTransferAmount.blur();
  
})
btnClose.addEventListener('click',function(e)
{
  e.preventDefault();  
  console.log('close');
  if(inputCloseUsername.value===currentAccount.userName && Number(inputClosePin.value)===currentAccount.pin)
  {
    
    console.log('correct');
    const index=accounts.findIndex(acc=>acc.userName===currentAccount.userName)
    

    //delete account
    accounts.splice(index,1)

    //hide UI
    containerApp.style.opacity=0;
  }
  inputCloseUsername.value=inputClosePin.value='';
  
})

// 'Your latest large movement was X movement ago'

const latestLargeMovement=movements.findLastIndex( mov=> Math.abs(mov)>2000)
console.log(latestLargeMovement);

console.log(`Your latest large movement was ${movements.length-latestLargeMovement-1} movement ago`);

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






