// parent Vehicle class
class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`You name is ${ this.name }.`);
    }

    showStats() {
        console.log(`name: ${ this.name } health: ${ this.health } speed: ${this.speed} strength: ${this.strength}.`);
    }

    healthUpdate() {
        return this.health += 10;
    }
}

// sensei class

class Sensei  extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom= 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }
    // simple function in the child class

    speakWisdom() {
        console.log(`What one programmer can do in one month, two programmers can do in two months.`);
    }

}
const test = new Ninja("aziz", 100);
console.log(test.name);
test.sayName();
test.healthUpdate();
test.showStats();

const superSensei = new Sensei("guts");
superSensei.showStats();
superSensei.healthUpdate() 
superSensei.speakWisdom();
console.log(superSensei.wisdom);


