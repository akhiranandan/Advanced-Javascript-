//ES2020
let college = {
    course : {
        subjects : 6,
        labs : 3,
        lecturers : 12
    }
}

let school = {
    syllabus : {
        maths : 10,
        science : 10,
        english : 10
    }
}

//normal method
if(school.course && school.course.lecturers) {
    let fee = school.course.lecturers
    console.log(fee);
} else {
    let fee = undefined
    console.log(fee);
}


//Optional Coalescing Operator ?.
let fee = school?.course?.lecturers
console.log(fee)
//If we want to grab something that is not present
let a = school?.syllabus?.social || 'no social'
console.log(a);
//rather than using the '||' operator, the more effective way is using the nullish coalescing operator '??'

//Nullish coalescing Operator ??
let b = school?.syllabus?.social ?? 'no social'
console.log(b);

//ES2021
let str = "He is the best of the best"
let ns = str.replaceAll("best", "worst")
console.log(ns);


////------------------------------------------EXCERCISE---------------------------------------------------

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n 
//sol- BigInts are calculated with other BigInts - 3n+4n+1n


// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

//optional chaining
 if(andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log('fight!')
 } else {
    console.log('walk away...')
 }

// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') //false
console.log(null ?? 'hellooo') //hellooo
console.log(null || 'hellooo') //hellooo
console.log((false || null) ?? 'hellooo') //hellooo
console.log(null ?? (false || 'hellooo')) //hellooo

