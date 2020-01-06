"use strict";
// Strategy Design Pattern
// Client
var Duck = /** @class */ (function () {
    function Duck(flyStrategy, quackStrategy) {
        this.flyStrategy = flyStrategy;
        this.quackStrategy = quackStrategy;
    }
    Duck.prototype.fly = function () {
        this.flyStrategy.fly();
    };
    Duck.prototype.quack = function () {
        this.quackStrategy.quack();
    };
    return Duck;
}());
// Concrete Strategy
var SimpleFly = /** @class */ (function () {
    function SimpleFly() {
    }
    SimpleFly.prototype.fly = function () {
        console.log("SimpleFly");
    };
    return SimpleFly;
}());
// Concrete Strategy
var FastFly = /** @class */ (function () {
    function FastFly() {
    }
    FastFly.prototype.fly = function () {
        console.log("FastFly");
    };
    return FastFly;
}());
// Concrete Strategy
var SimpleQuack = /** @class */ (function () {
    function SimpleQuack() {
    }
    SimpleQuack.prototype.quack = function () {
        console.log("SimpleQuack");
    };
    return SimpleQuack;
}());
// Concrete Strategy
var LoudQuack = /** @class */ (function () {
    function LoudQuack() {
    }
    LoudQuack.prototype.quack = function () {
        console.log("LoudQuack");
    };
    return LoudQuack;
}());
function strategyMain() {
    var fastAndLoudDuck = new Duck(new FastFly(), new LoudQuack());
    var simpleAndLoudDuck = new Duck(new SimpleFly(), new LoudQuack());
    var fastAndSimpleDuck = new Duck(new FastFly(), new SimpleQuack());
    console.log('Fast Fly and Loud Quack Duck:');
    fastAndLoudDuck.fly();
    fastAndLoudDuck.quack();
    console.log('Simple Fly and Loud Quack Duck:');
    simpleAndLoudDuck.fly();
    simpleAndLoudDuck.quack();
    console.log('Fast Fly and Simple Quack Duck:');
    fastAndSimpleDuck.fly();
    fastAndSimpleDuck.quack();
}
strategyMain();
