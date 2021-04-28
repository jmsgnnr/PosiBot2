class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name} !`;
  }
  getDescription() {
    return `Hi. I am ${this.name} and I am ${this.age} years old!`;
  }
}
// allows us to get all behavior of prior class without copy and pasting code !
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  // new method
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name,age);
        this.location = location;
    }
    // override getGreetingMethod
   getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
          greeting += `I am visiting from ${this.location}.`
        }
        return greeting
    }
}

const me = new Traveler("James", 29, 'philly');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
