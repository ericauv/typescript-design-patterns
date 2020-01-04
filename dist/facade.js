"use strict";
var Plant = /** @class */ (function () {
    function Plant(name) {
        this.name = name;
        this.height = 0;
        this.wateringProgress = 0;
    }
    Plant.prototype.absorbWater = function (waterAmount) {
        this.wateringProgress += waterAmount;
        console.log("Plant(" + this.name + ") absorbed " + waterAmount + " units of water. New wateringProgress: " + this.wateringProgress);
        if (this.wateringProgress >= 100) {
            this.grow(Math.floor(this.wateringProgress / 100));
            this.wateringProgress = this.wateringProgress % 100;
        }
    };
    Plant.prototype.grow = function (growthAmount) {
        this.height += growthAmount;
        console.log("Plant(" + this.name + ") grew " + growthAmount + " units in height. New height: " + this.height);
    };
    return Plant;
}());
var Soil = /** @class */ (function () {
    function Soil(name, minimumWaterAmount) {
        this.name = name;
        this.minimumWaterAmount = minimumWaterAmount;
        this.waterAmount = minimumWaterAmount;
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
}());
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
    var soily = new Soil('Soily', 14);
    var system = new PlantSoilSystem('system', planty, soily);
    system.addWater(4);
    system.addWater(50);
    system.addWater(40);
    system.addWater(22);
    system.addWater(35);
    system.addWater(300);
}
facadeMain();
