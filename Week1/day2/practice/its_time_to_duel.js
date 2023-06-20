class Card {
    constructor(name,cost=3) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost,  power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power
        console.log(target);
    }
}

class Effect  extends Card {
    constructor(name,cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        target.cost -= this.cost
        if (this.stat == "resilience" )
            target.res += this.magnitude
        if (this.stat == "power")
            target.power += this.magnitude
            console.log(target);
            return target
    }
    
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("black Belt Ninja", 4, 5, 4)

const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3","resilience",3)
const Unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2","resilience",-2)
const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2","power",2)

HardAlgorithm.play(redBeltNinja);
Unhandled.play(redBeltNinja)
PairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)