//Using ForEach
const arr = [1,12,2,5];

const double = [];

const Multiply = arr.forEach((nums) => {
    double.push(nums*2);
});
console.log("Foreach", double);

//Map
const MapArray = arr.map((num) => {
    return num*2;
});
console.log("Map", MapArray);

//filter
const FilterArray = arr.filter((num) => {
    return num > 2;
})
console.log("Filter", FilterArray);

//Reduce
 const reduceArray = arr.reduce((acc, num) => {
    return acc+num;
 }, 0);
 //0 is the starting number of accumulator
 console.log("Reduce", reduceArray);

 //ALL THESE THREE METHODS ARE SO IMPORTANT!!!!!!!

 //----------------------------------EXCERCISE----------------------------------------------
 // Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  //sol-

  
  const newarray = [];
  const excel = array.forEach((obj) => {
     newarray.push(obj.username+"!");
  })
  console.log(newarray);

  //Create an array using map that has all the usernames with a "? to each of the usernames
  //sol-
const Maparr = array.map((obj) => {
    return obj.username+"?";
})
  console.log(Maparr);

  //Filter the array to only include users who are on team: red
  //sol-
  const filtarr = array.filter((obj) => {
   return obj.team === "red";
  })
  console.log(filtarr);

  //Find out the total score of all users using reduce
  //sol-
const totalscore = array.reduce((acc, obj) => {
    return acc+obj.score;
}, 0)
console.log(totalscore);

  // (1), what is the value of i? 
  //sol- INDEX OF THE ARRAY

  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })
  //sol-
  const arrayNum1 = [1, 2, 4, 5, 8, 9];
  const newArray1 = arrayNum1.map((num, i) => {
      return num * 2;
  })

  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
