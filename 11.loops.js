const basket = ['apples', 'pineapples', 'oranges', 'grapes'];

const market = {
    apples : 100,
    bananas : 200,
    oranges : 50
}

//for
for(let i = 0; i < basket.length; i++)
{
    console.log(basket[i]);
}

//forEach
basket.forEach(item => {
    console.log(item); 
})

//for of
 for(item of basket) {
    console.log(item);
 }

 //for in
for(item in market) {
    console.log(item);
}


////------------------------------------------EXCERCISE---------------------------------------------------

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > max) max = arr[i];
    }
    return max;
}

function biggestNumberInArray2(arr) {
    let max = 0;
    arr.forEach(item => {
        if(item > max) 
        max = item;
    })
    return max;
}

function biggestNumberInArray3(arr) {
    let max = 0;
    for(item of arr) {
        if(item > max) 
        max = item;
    }
    return max;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
    for(item in basket) {
        if(item === lookingFor) return true;
    }
    return false;
}