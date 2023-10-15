//flat() method
const array = [1,2,3,4,5];
array.flat();

const array1 = [1,2,3,4,[5,6,7]];
array1.flat();

const array2 = [1,[2,[3,4]],5];
array2.flat();

const array3 = [1,[2,[3,4]],5];
array3.flat(2);

const park = ['😀', ['🥰'], [['😘']], [[[[[['🤡']]]]]]];
park.flat(50); //we can pick any random number greater than depth

const names = ['Ram', 'Jam',,,,,,,,,,,,'pam']
console.log(names); //this gives empty spaces also
names.flat(); //this clears empty space and gives only values

//flatMap() method
const mixture = park.flatMap((emoji) => emoji + '😇')

 //trimStart() and trimEnd()
 const email1 = '      akhiranandanp89548@gmail.com';
 const email2 = 'pallepogu.nandan@iiitg.ac.in              ';
 console.log(email1.trimStart());
 console.log(email2.trimEnd());

 //from entries
const users = [['Zack', 24], ['Vikram', 45], ['Bejoy', 32]];
Object.fromEntries(users);
  
//try and catch
try {
    'Hero ' + 'Honda'
} catch (error){
    console.log('You messed up! ' + error);
}

try {
    hero + 'Honda'
} catch (error) {
    console.log('You messed up! ' + error);
}

/////------------------------------------------EXCERCISE---------------------------------------------------
// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const arra = [[1],[2],[3],[[[4]]],[[[5]]]]
//sol- 
arra.flat(10);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//sol-
console.log(greeting.flatMap(x => x.join(' '))) 

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//sol-
console.log(greeting.flatMap(x => x.join(' ')).join(' '));

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//sol-
trapped.flat(Infinity);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
//sol-
console.log(userEmail3.trimStart().trimEnd());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const userid = { user1: 18273, user2: 92833, user3: 90315 }
//sol-

const newuser = Object.entries(userid);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//sol-
Updateduserid = newuser.map((user) => {
    return [user[0], user[1]*2];
})

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
Object.fromEntries(Updateduserid);