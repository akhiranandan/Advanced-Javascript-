//Destructuring
const obj1 = {
    player : "William",
    age : 37,
    city : "California"
}

const {player, age} = obj1;
let {city} = obj1;

//Object properties
const name = "Priti";

const obj2 = {
    [name] :"hero",
    [1+2] : "gege"
}

//Template Strings
const title = "Georgia";
const old = 30;
const pet = "dog";

const greet = `Hey ${title} you seem to be ${old}`;

//Arrow functions
function add(a, b)
{
    return a+b;
}

const add = (a,b) => a+b;

//----------------------------------EXCERCISE---------------------------------------------
// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';
//sol
let a = 'test';
const b = true;
const c = 789;

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age1 = person.age;
var eyeColor = person.eyeColor;
//sol
const{firstName, lastName, age1, eyeColor} = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};
//sol
var okObj = {
    a,
    b,
    c
  };

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//sol
var message = `Hello ${firstName} have I met you before? I think we met in  ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
//sol
const isUserValid = (age = 10) => age;

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
//sol
const whereAmI = (username, location) => 
{
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}