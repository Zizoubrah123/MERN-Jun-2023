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
        console.log(`You name is ${ this.name } you have ${ this.health } your speed is
${this.speed} and your strength is ${this.strength}  .`);
    }

    drive() {
        this.health += 10;
        console.log(`your health now is ${this.health}`);
    }
}
const test = new Ninja("aziz", 100);
console.log(test.name);
test.sayName();
test.drive();
test.showStats();

