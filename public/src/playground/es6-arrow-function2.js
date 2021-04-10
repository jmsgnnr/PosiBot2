// arguements object - no longer bound with arrow functions
// (a,b) = explicit definition
// if arguments is required, stick with es5 syntax

// const add = (a, b) => {
//   // console.log(arguments)
//   return a + b;
// };
// console.log(add(55, 1));

// this keyword is no longer bound with arrow functions
// arrow functions never bind their own this value
// instead they use the this value of the context created in
// this.cities.forEach(function (city) {
// const that = this corrects this issue

// const user = {
//   name: "James",
//   cities: ["philly", "Ny", "denver", "la"],
//   printPlacesLived() {
//     // map allows you to transform
//     return this.cities.map((city) => this.name + ' has lived in ' + city + "!");
//     }
// };
// console.log(user.printPlacesLived());
const multiplier = {
    // numbers - array of numbers to multiply 
   arr : [1, 2 , 3, 5, 6],
   multiplyBy: 2, 
   multiply () {
       return this.arr.map((num) => num * this.multiplyBy); 
   }
  }
  console.log(multiplier.multiply());
