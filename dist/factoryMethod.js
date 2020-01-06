"use strict";
// Factory Method Design Pattern
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Product
var Circle = /** @class */ (function () {
    function Circle(radius, position) {
        this.radius = radius;
        this.position = __assign({}, position);
    }
    Circle.prototype.about = function () { };
    return Circle;
}());
// Concrete Product
var MovingCircle = /** @class */ (function (_super) {
    __extends(MovingCircle, _super);
    function MovingCircle(radius, position, velocity) {
        var _this = _super.call(this, radius, position) || this;
        _this.velocity = __assign({}, velocity);
        return _this;
    }
    MovingCircle.prototype.about = function () {
        console.log("radius:" + this.radius + "\nposition.x:" + this.position.x + ", position.y:" + this.position.y + "\nvelocity.x:" + this.velocity.x + ", velocity.y:" + this.velocity.y + "\n");
    };
    return MovingCircle;
}(Circle));
// Concrete Factory
var MovingCircleFactory = /** @class */ (function () {
    function MovingCircleFactory() {
    }
    MovingCircleFactory.prototype.createCircle = function (multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        var radius = Math.round(Math.random() * 10 * multiplier);
        var position = {
            x: Math.round(Math.random() * 10 * multiplier),
            y: Math.round(Math.random() * 10 * multiplier)
        };
        var velocity = {
            x: Math.round(Math.random() * 10 * multiplier),
            y: Math.round(Math.random() * 10 * multiplier)
        };
        return new MovingCircle(radius, position, velocity);
    };
    return MovingCircleFactory;
}());
// Concrete Factory
var StationaryCircleFactory = /** @class */ (function () {
    function StationaryCircleFactory() {
    }
    StationaryCircleFactory.prototype.createCircle = function (multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        var radius = Math.round(Math.random() * 10 * multiplier);
        var position = {
            x: Math.round(Math.random() * 10 * multiplier),
            y: Math.round(Math.random() * 10 * multiplier)
        };
        return new MovingCircle(radius, position, { x: 0, y: 0 });
    };
    return StationaryCircleFactory;
}());
function factoryMethodMain() {
    console.log('-- MovingCircleFactory --');
    var movingCircle = new MovingCircleFactory().createCircle();
    movingCircle.about();
    console.log('-- StationaryCircleFactory --');
    var stationaryCircle = new StationaryCircleFactory().createCircle();
    stationaryCircle.about();
}
factoryMethodMain();
