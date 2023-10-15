//Closure
const first = () => {
    const meet = "hello!"
    const second = () => {
        const name = "sweety"
        alert(meet)
    }
    return second
}

const func = first()
func();

//Currying
const add = (a,b) => a+b;
const curriedAdd = (a) => (b) => a+b;
const addTen = curriedAdd(10);

//compose
const compose1 = (f, g) => (a) => f(g(a));
const sum1 = (num) => num+1;
compose1(sum1, sum1)(5);

//----------------------------------EXCERCISE-----------------------------------------------
//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const adder = (a, b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

//sol- 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//sol- 31

//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
add5(12)

//sol- 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a)); 
const add1 = (num) => num + 1; 
const add5_ = (num) => num + 5; 
compose(add1, add5_)(10) 

//sol - add1(add5_(a)) -> add1(add5_(10)) -> add1(15) -> 16

//What are the two elements of a pure function?

//sol- 1) Deterministic
     //2) No side effects