"use strict";
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
// Component
var Clothing = /** @class */ (function () {
    function Clothing() {
    }
    Clothing.prototype.getDescription = function () {
        return this.description;
    };
    return Clothing;
}());
// Concrete Component
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    function Shirt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Shirt';
        return _this;
    }
    Shirt.prototype.cost = function () {
        return 25;
    };
    return Shirt;
}(Clothing));
// Concrete Component
var Pants = /** @class */ (function (_super) {
    __extends(Pants, _super);
    function Pants() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Pants';
        return _this;
    }
    Pants.prototype.cost = function () {
        return 40;
    };
    return Pants;
}(Clothing));
// Decorator
var ClothingOptions = /** @class */ (function (_super) {
    __extends(ClothingOptions, _super);
    function ClothingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClothingOptions;
}(Clothing));
// ConcreteDecorator
var Silk = /** @class */ (function (_super) {
    __extends(Silk, _super);
    function Silk(clothingToDecorate) {
        var _this = _super.call(this) || this;
        _this.decoratedClothing = clothingToDecorate;
        return _this;
    }
    Silk.prototype.getDescription = function () {
        return this.decoratedClothing.getDescription() + ", Silk";
    };
    Silk.prototype.cost = function () {
        return this.decoratedClothing.cost() + 20;
    };
    return Silk;
}(ClothingOptions));
// ConcreteDecorator
var HighThreadCount = /** @class */ (function (_super) {
    __extends(HighThreadCount, _super);
    function HighThreadCount(clothingToDecorate) {
        var _this = _super.call(this) || this;
        _this.decoratedClothing = clothingToDecorate;
        return _this;
    }
    HighThreadCount.prototype.getDescription = function () {
        return this.decoratedClothing.getDescription() + ", High Thread Count";
    };
    HighThreadCount.prototype.cost = function () {
        return this.decoratedClothing.cost() + 30;
    };
    return HighThreadCount;
}(ClothingOptions));
var pants = new Pants();
console.log(pants.cost());
console.log(pants.getDescription());
console.log('- Decorate with Silk');
pants = new Silk(pants);
console.log(pants.cost());
console.log(pants.getDescription());
console.log('- Decorate with HighThreadCount');
pants = new HighThreadCount(pants);
console.log(pants.cost());
console.log(pants.getDescription());
