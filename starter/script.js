'use strict';

// console.log(this);

// const calAge=function(birthyear)
// {
//     console.log(2037-birthyear);
//     console.log(this);      
// }
// calAge(1991)

// const calAgeArrow=birthyear=>
// {
//     console.log(2037-birthyear);
//     console.log(this);      
// }
// calAgeArrow(1995)


const jonas={
    firstName:"Jonas",
    birthyear:1995,
    calAge:function()
        {
            // console.log(this)
            // console.log(2040-this.birthyear)
      
        },
        greet:()=>
             console.log(`Hey ${this.firstName}`)
            
}
jonas.greet() // undefined as arrow not allowed this

//object ref 

const jessica={
    firstName:"Jessica",
    lastName:"William",
    age:27,
}

function marryPerson(originalPerson,newLastName) {
originalPerson.lastName=newLastName;
return originalPerson;
    
}
const marriedJessica=marryPerson(jessica,'Davis');
// marriedJessica.lastName='Davis'
// const marriedJessica=jessica;
// marriedJessica.lastName='Davis'
// console.log(('before:',jessica));
// console.log('after:',marriedJessica);

const jessica2={
    firstName:"Jessica",
    lastName:"William",
    age:27,
    family:['Alice','Bob']
};
const jessicaCopy={...jessica2};
jessicaCopy.lastName='Davis'

// console.log(jessica2,jessicaCopy);
jessica2.family.push('Singh')
// console.log('Before',jessica2)
// console.log('After:',jessicaCopy);

const cloneJessica=structuredClone(jessica2)
cloneJessica.family.push('SinghH')
console.log('Original:' ,jessica2);
console.log("clone", cloneJessica);



