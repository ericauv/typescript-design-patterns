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
var Material = /** @class */ (function () {
    function Material(name) {
        this.waterAmount = 0;
        this.name = name;
    }
    return Material;
}());
var Plant = /** @class */ (function (_super) {
    __extends(Plant, _super);
    function Plant(name) {
        var _this = _super.call(this, name) || this;
        _this.height = 0;
        return _this;
    }
    Plant.prototype.absorbWater = function (waterAmountToAbsorb) {
        this.waterAmount += waterAmountToAbsorb;
        console.log("Plant(" + this.name + ") absorbed " + waterAmountToAbsorb + " units of water. New waterAmount: " + this.waterAmount);
        if (this.waterAmount >= 100) {
            this.grow(Math.floor(this.waterAmount / 100));
            this.waterAmount = this.waterAmount % 100;
        }
    };
    Plant.prototype.grow = function (growthAmount) {
        this.height += growthAmount;
        console.log("Plant(" + this.name + ") grew " + growthAmount + " units in height. New height: " + this.height);
    };
    return Plant;
}(Material));
var Soil = /** @class */ (function (_super) {
    __extends(Soil, _super);
    function Soil(name, minimumWaterAmount) {
        var _this = _super.call(this, name) || this;
        _this.waterAmount = minimumWaterAmount;
        _this.minimumWaterAmount = minimumWaterAmount;
        return _this;
    }
    Soil.prototype.increaseWater = function (waterIncreaseAmount) {
        this.waterAmount = this.waterAmount + waterIncreaseAmount;
        console.log("Soil(" + this.name + ") increased water amount by " + waterIncreaseAmount + ". New Water Amount: " + this.waterAmount);
    };
    Soil.prototype.decreaseWater = function (waterDecreaseAmount) {
        var proposedNewWaterAmount = this.waterAmount - waterDecreaseAmount;
        this.waterAmount = Math.max(proposedNewWaterAmount, this.minimumWaterAmount);
        console.log("Soil(" + this.name + ") decreased water amount by " + waterDecreaseAmount + ". New Water Amount: " + this.waterAmount);
    };
    Soil.prototype.getMaxPossibleWaterDecrease = function () {
        return this.waterAmount - this.minimumWaterAmount;
    };
    return Soil;
}(Material));
var PlantSoilSystem = /** @class */ (function () {
    function PlantSoilSystem(name, plant, soil) {
        this.name = name;
        this.plant = plant;
        this.soil = soil;
    }
    PlantSoilSystem.prototype.addWater = function (waterAmount) {
        this.soil.increaseWater(waterAmount);
        var absorbableWaterAmount = this.soil.getMaxPossibleWaterDecrease();
        this.plant.absorbWater(absorbableWaterAmount);
        this.soil.decreaseWater(absorbableWaterAmount);
    };
    return PlantSoilSystem;
}());
function facadeMain() {
    var planty = new Plant('Planty');
    var clay = new Soil('Clay', 14);
    var system = new PlantSoilSystem('system', planty, clay);
    system.addWater(4);
    system.addWater(50);
    system.addWater(40);
    system.addWater(22);
    system.addWater(35);
    system.addWater(300);
}
facadeMain();
