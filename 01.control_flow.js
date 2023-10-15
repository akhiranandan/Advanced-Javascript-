//ternary operator
function isUserValid(bool)
{
    return bool;
}

var ans = isUserValid(false) ? "You may enter" : "Access denied!";

//switch
function luckyDraw(number)
{
    var res;
    switch (number) {
        case 1:
            res = "Better luck next time!";
            break;
        case 2:
            res = "Better luck next time!";
            break;
        case 3:
            res = "Better luck next time!";
            break;
        case 4:
            res = "congratulations! You have won!";
            break;    
        default:
            res = "Better luck next time!";
    }
    return res;
}

//----------------------------------EXCERCISE---------------------------------------------------------------

//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//solution
var experiencePoints = winBattle() ? 10 : 1;


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//ans--- you encounter a monster

//#3 return value when moveCommand("back");
//ans--- you arrived home

//#4 return value when moveCommand("right");
//ans--- you found a river

//#5 return value when moveCommand("left");
//ans--- you run into a troll

