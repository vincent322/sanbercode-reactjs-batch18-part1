// Soal 1

class Animal {
    constructor(name, legs = 4, cold_blooded = 'false') {
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }

    get getname() {
        return this.name;
    }

    get getlegs() {
        return this.legs;
    }

    get getcold_blooded() {
        return this.cold_blooded;
    }
}
var Sheep = new Animal('Shaun');
console.log("Name = "+Sheep.getname);
console.log("Legs = "+Sheep.getlegs);
console.log("Cold Blooded = "+Sheep.getcold_blooded);


class Ape extends Animal {
    constructor(name, legs = 2) {
        super(name);
        this.legs = legs;
    }

    yell() {
        console.log('Auooo');
    }
}

class Frog extends Animal {
    constructor(name, cold_blooded = 'true') {
        super(name);
        this.cold_blooded = cold_blooded;
    }

    jump() {
        console.log('Hop Hop')
    }
}

var sungokong = new Ape('Kera Sakti');
console.log("\nName = "+sungokong.getname);
console.log("Legs = "+sungokong.getlegs);
console.log("Cold Blooded = "+sungokong.getcold_blooded);
sungokong.yell();

var kodok = new Frog('Kermit');
console.log("\nName = "+kodok.getname);
console.log("Legs = "+kodok.getlegs);
console.log("Cold Blooded = "+kodok.getcold_blooded);
kodok.jump();

// Soal 2
class Clock {
    constructor({ template }){
        this._template = template;
        this.timer;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this._template .replace('h', hours) .replace('m', mins) .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 