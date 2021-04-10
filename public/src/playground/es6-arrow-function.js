// function square(x) {
//   return x * x;
// };

// console.log(square(3));
//all => functions are anonymous , u must assign to var
// const squareArrow = (x) => {
//     return x * x 
// };

// if function only returns single expression switch to new syntax 
// we do not explicitly use return anywhere
// expression is implicitly returned 
// awaiting promises or other function calls will not work !  


// const squareArrow = (x) => x * x;
// console.log(squareArrow(8));


// Challenge !  
// use arrow functions 
 //getFirstName('Mike Smith')
 // create regular arrow function 
 // create function using shorthand syntax . 


const arrowOne = (x) => {
    return x.split(' ')[0];
};
console.log(arrowOne('Jms Gnnr'));

// implicit return
const arrowTwo = (x) => x.split(' ')[0];
console.log(arrowTwo('Jms Gnnr'));

