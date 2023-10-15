//---ARRAYS---

//pass by reference
let c = [1,2,3,4,5];
let d = c;
d.push(6);
console.log(d);
console.log(c);

//pass by value (by making a copy)
let a = [1,2,3,4,5];
let b = [].concat(a);
b.push(6);
console.log(a);
console.log(b);


//----OBJECTS----

//pass by refernce
let obj = {
    name : "Sweety",
    age : 20
}

let newobj = obj;
console.log(obj);
console.log(newobj);

//pass by value (by making a copy)
let obj1 = {
    name : "Sweety",
    age : 20
}

let obj2 = Object.assign({}, obj1); //cloning obj1 to obj2
let obj3 = {...obj1}; //another way of performing above step

obj2.age = 19;
obj3.age = 18;
console.log(obj1);
console.log(obj2);
console.log(obj3);

//The above method is shallow cloning... 
//In this method, only first layer gets cloned.
//If there's an object inside an object, it doesn't get cloned... it gets passed by reference!

let A = {
    name : "Sweety",
    age : 20,
    hobbies : {
        first : "youtube",
        second : "instagram",
        third : "eating"
    }
}

let B = Object.assign({}, A);
B.hobbies.first = "shopping";
console.log(A);
console.log(B);

//To make deeper level cloning, we must use the following syntax

let A1 = {
    name : "Sweety",
    age : 20,
    hobbies : {
        first : "youtube",
        second : "instagram",
        third : "eating"
    }
}

let B1 = JSON.parse(JSON.stringify(A1));  //new syntax - deeper cloning

B1.hobbies.first = "shopping";
console.log(A1);
console.log(B1);