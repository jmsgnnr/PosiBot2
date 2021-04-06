// can always reassign , no longer used
// var base variables are function scoped 

var nameVar = 'James';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// you can reassign without using let 
// function scoped 

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet)

// cannot reassign
// function scoped 

const nameConst = 'James';
console.log('nameConst', nameConst)

// function getPetName() {
//     var petName = 'Hal';
//     return petName
// }
// getPetName();
// will not work because vars arent available outside of scope 
// console.log(petName)

//Block Scoping for let and const 
// with const and let , 
//we cannot access outside of the codeblocks they were defined in 


var fullName = 'Jms Gnnr';
// declaration allows us to access outside of function scope
// remember we cannot re-declare let when accessing
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    // var based vars are function scoped
    // this is an if statement, not a function 
    console.log(firstName);
}

console.log(firstName);