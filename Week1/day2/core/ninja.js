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







//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child M5 class
// class M5 extends Vehicle {
//     constructor(color) {
//         super("BMW", "M5", color);
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }
// const m5 = new M5("Blue");
// m5.childFunction();
