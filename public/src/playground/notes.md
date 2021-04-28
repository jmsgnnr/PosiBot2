//Twitter notes

<DashboardPage />
<Header />
<ProfileWidget />
<Trends />
<Trend />
<Tweet />

// think about ui in reuseable chunks

<PosiBotV2 />
 <Header />
 <Action />
 <Options />
 <Option />
<AddOption />




// when working with class based component create an Uppercase named class, lets reader know its a class and not an object 



// the constructor function is the function that gets called when we make a new instance with all the arguments we passed in.
// we lose access to data without it, which is why we must define constructor 
// we must use es6 def syntax 
// we want to customize individual instance of class (Xmple)
// classes are like blueprints
// constructor functions are the only functions called implicitly and where we define functions ! 

// in es6 we have access to function defaults anywhere we define an arguments list . 
// template strings `Hi, i am, ${this.arg1}` are easier to read

// set up constructor function and created new method ! 

class Xmple {
constructor(arg1, arg2){
    this.arg1 = arg1
  
}
}

const newData = new Xmple();

// we set defaults after arg names .
(arg1 = 'whatever')

// subclass
// where we override constructor function to manipulate data (add)
// super refers to parent class
// super calls parent constructor function and we must provide the data from function
// this allows defaults to be used without repeating code .
// tweaks subclass to mod data

//!'' remember to flip falsy vals 

class NewSub extends Xmple {
constructor(arg1, arg2, newArg3){
    super(arg1, arg2)
    this.newArg3= newArg3
}
newMethod(){
    return !!this.newArg3;
}

}
console.log(arg1.newMethod())