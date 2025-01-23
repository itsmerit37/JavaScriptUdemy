 'use strict';


// let hasDriversLicense = false;
// const passTest = true;   

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;

// function logger() {
//     console.log('My name is Ritesh');
// }
// //calling /running / invoking function
// logger();
// logger()


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// fruitProcessor(5,0)
// console.log(fruitProcessor(5,3));

// function calAge1(birthyear)
// {
//     return birthyear-1995
    
// }
// const h1=calAge1(2025)
// console.log(h1);

// //function expression
// const Calage2=function(birthyear)
// {
//     return birthyear-1998
// }
// const age2= Calage2(2025)
// console.log(age2);

//arrow function

const Calage3=birthyear=> 2037-birthyear
const age3=Calage3(1998)
console.log(age3);

const yearUntilRetirnment=(birthyear,firstName)=>{
    const age=2037-birthyear;
    const retirnment=65-age
    return `${firstName} will be retire in ${retirnment} year`
}
console.log(yearUntilRetirnment(1991,'Ritesh'));

function calRetirnmnetAge(birthyear,firstName)
{
 return `${firstName} will be retire in ${birthyear} year`
}
const h1=calRetirnmnetAge(1980 ,'Ritesh Singh')
console.log(h1);

//object

const jonasArray=[
    'Ritesh',
    'Singh',
    2025-1995,
    'teacher',
    ['A','B','C']
]
const Ritesh={
    firstName:'Ritesh',
    lastName:'Singh',
    job:'Teacher',
    friends:['A','B','C']
}


console.log(jonasArray)
console.log(Ritesh.friends[0])

const jonas={
    firstName:'Jonas',
    year:46,
    job:'Teacher',
    driverLience:true,
    
     abc:function()
    {
       if(this.driverLience===true)
       {
        console.log(`${this.firstName} is a ${this.year}-year old ${this.job},and he has a driver's license`);
        
       }
    }
}
jonas.abc()
