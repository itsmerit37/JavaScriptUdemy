'use strict';

const bookings=[];

const createBooking=function(fightNum,numPassengers=1,price=199*numPassengers)
{
    const booking={
        fightNum,numPassengers,price
    }
//console.log(booking);
// bookings.push(booking)
}
createBooking('LH123')
createBooking('LH123',2,800)
createBooking('LH123',6)


const flight='LH234'
const Ritesh={
    name:'Ritesh Singh',
    passport:1234321234
}
// const checkIn=function(fightNum, passenger){
//   fightNum='LH999'
//   passenger.name='Mr. '+ passenger.name;

//   if(passenger.passport===1234321234)
//   {
//     alert('Check in')
//   }else{
//     alert('Wrong passpport')
//   }
// }
// checkIn(flight,Ritesh)
// console.log(flight);
// console.log(Ritesh);

//Is the same as doing...

// const fightNum=flight;
// const passenger=Ritesh;

// const newPassport=function(person)
// {
//     person.passport=Math.trunc(Math.random()*100000)
// }
// newPassport(Ritesh)
// checkIn(flight,Ritesh)

const oneWord=function(str)
{
    return str.replace(/ /g,'').toLowerCase();
}
const upperFirstWord=function(str)
{
    const[first,...others]=str.split(' ');
    
    return [first.toUpperCase(), ...others].join(' ')
}
const transformer=function(str,fn)
{
    // console.log(`Origin: ${str}`);
    // console.log(`Tran Origin: ${fn(str)}`);
    // console.log(`Tran by: ${fn.name}`);

    
}
transformer('JavaScript is best!', upperFirstWord)

const high5=function()
{
    //console.log('hi');
    
}
// document.body.addEventListener('click',high5);
//['a','b','c','d'].forEach(high5); // 4 time hi will print

const greet=function(greeting)
{
    return function(name)
    {
    //console.log(`${greeting} ${name}`);
    }
    
}
const greetHey=greet('hey');
greetHey('Ritesh')
greetHey('Singh')

const greetArr=greeting=>name=>{
    //console.log(`hi ${greeting} ${name}`);
}
greetArr('hh')('XYZ')

const lufthasa={
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book(fightNum,name){
        //console.log(`${name} booked a seat on ${this.airline} fight ${this.iataCode}${fightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${fightNum}`, name})
        
    }
}
lufthasa.book(239,'Ritesh Singh')
lufthasa.book(240,'Ritesh Singh from Ayodhya')
//console.log(lufthasa);

const swiss={
    airline:'Lufthansa euro swiss',
    iataCode:'SW',
    bookings:[],
}

const eurowing={
    airline:'Lufthansa euro',
    iataCode:'EW',
    bookings:[],
}
const book=lufthasa.book;

// does not work
// book(23,'ABC')


// book.call(eurowing,23,'ABC')
// console.log(eurowing);

const bookEW=book.bind(eurowing)
const bookLu=book.bind(lufthasa)
const bookEu=book.bind(eurowing)

bookEW(23,"Ritesh Singh Flying")

const sameFlight=book.bind(eurowing,'234')
sameFlight('Jonas')
sameFlight('Singh')

//with event Listeners

lufthasa.planes=300
lufthasa.buyPlane=function()
{
  //  console.log(this);
    this.planes++
   // console.log(this.planes);
    
}
// document.querySelector('.buy').addEventListener('click',lufthasa.buyPlane.bind(lufthasa));

//partial application

const addTax=(rate,value)=>value+value*rate;
//console.log(addTax(.1,200));

//bind(x,y)--- here x always point to this

const addVat=addTax.bind(null,.3)
console.log(addVat(100));

const addTaxF=function(rate)
{
    return function(value)
    {
        return value+value*rate;
    }
}
const addVat2=addTaxF(.3)
//console.log(addVat(100));

const poll={
    question:'What is your favourite language?',
    options:['0:Java Script','1:Python','2:Rust','3:c++'],
    answer:new Array(4).fill(0),
     registerNewAnswer()
     {
       const answer=Number(
        prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`
   )
    ) ;    
      // console.log(answer);    
       //Register Answer
       typeof answer==='number' && answer<this.answer.length && this.answer[answer]++
       this.displayResult()
       this.displayResult('string')            
     } ,
     displayResult(type= 'array')
     {
        if(type=== 'array')
        {
            console.log(this.answer);
            
        } else if (type=== 'string')
        {
          //console.log(`Poll results are ${this.answer.join(', ')}`);
          
        }
     }   
    }
    //poll.registerNewAnswer()
    
    document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

    poll.displayResult.call(
        {
            answer:[5,2,3]
        },
        'string'
    );

    const runOnce=function()
    {
        console.log('This will never run again');
        
    }
    runOnce();


    (function ()
    {
        console.log('this will never run again 2');
        
    }
    )();

   // () if fn name is not define

    (()=>
    {
        console.log('this will never run again 3');

    })();

    const secureBooking=function()
    {
        let passengerCount=0;
        return function ()
        {
            passengerCount ++
            console.log(`${passengerCount} passengers`);
            
        }
    }
    const booker=secureBooking();
    booker()
    booker()
    booker()


    

