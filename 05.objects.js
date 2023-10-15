//reference type
const object1 = {value : 10};
const object2 = object1;
const object3 = {value : 10};
//object1 and object3 are different
//object1 and object2 are same

//context
const object4 = {
    a : function() {
        console.log(this);
    }
}

//instantiation
class Player {
    constructor(name, sport, city) { 
        this.name = name;
        this.sport = sport;
        this.city = city;
    }
    introduce() {
        console.log(`Hello! I'm ${this.name} and I'm a ${this.sport} player, I'm from ${this.city}`);
    }
}

class Country extends Player {
    constructor(name, sport, city) {
        super(name, sport, city);
    }
    where() {
        console.log(`I am good at ${this.sport}`);
    }
}

const player1 = new Country("Jack", "Cricket", "London");
