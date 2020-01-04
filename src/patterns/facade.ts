class Plant {
  public name: string;
  public height: number;
  private wateringProgress: number;

  constructor(name: string) {
    this.name = name;
    this.height = 0;
    this.wateringProgress = 0;
  }

  absorbWater(waterAmount: number) {
    this.wateringProgress += waterAmount;
    console.log(
      `Plant(${this.name}) absorbed ${waterAmount} units of water. New wateringProgress: ${this.wateringProgress}`
    );

    if (this.wateringProgress >= 100) {
      this.grow(Math.floor(this.wateringProgress / 100));
      this.wateringProgress = this.wateringProgress % 100;
    }
  }

  grow(growthAmount: number) {
    this.height += growthAmount;
    console.log(
      `Plant(${this.name}) grew ${growthAmount} units in height. New height: ${this.height}`
    );
  }
}

class Soil {
  public name: string;
  private minimumWaterAmount: number;
  public waterAmount: number;

  constructor(name: string, minimumWaterAmount: number) {
    this.name = name;
    this.minimumWaterAmount = minimumWaterAmount;
    this.waterAmount = minimumWaterAmount;
  }

  increaseWater(waterIncreaseAmount: number): void {
    this.waterAmount = this.waterAmount + waterIncreaseAmount;
    console.log(
      `Soil(${this.name}) increased water amount by ${waterIncreaseAmount}. New Water Amount: ${this.waterAmount}`
    );
  }

  decreaseWater(waterDecreaseAmount: number): void {
    const proposedNewWaterAmount = this.waterAmount - waterDecreaseAmount;

    this.waterAmount = Math.max(
      proposedNewWaterAmount,
      this.minimumWaterAmount
    );
    console.log(
      `Soil(${this.name}) decreased water amount by ${waterDecreaseAmount}. New Water Amount: ${this.waterAmount}`
    );
  }
  getMaxPossibleWaterDecrease(): number {
    return this.waterAmount - this.minimumWaterAmount;
  }
}

class PlantSoilSystem {
  public name: string;
  public plant: Plant;
  public soil: Soil;

  constructor(name: string, plant: Plant, soil: Soil) {
    this.name = name;
    this.plant = plant;
    this.soil = soil;
  }

  addWater(waterAmount: number) {
    this.soil.increaseWater(waterAmount);
    const absorbableWaterAmount = this.soil.getMaxPossibleWaterDecrease();
    this.plant.absorbWater(absorbableWaterAmount);
    this.soil.decreaseWater(absorbableWaterAmount);
  }
}

function facadeMain() {
  const planty = new Plant('Planty');
  const soily = new Soil('Soily', 14);
  const system = new PlantSoilSystem('system', planty, soily);

  system.addWater(4);
  system.addWater(50);
  system.addWater(40);
  system.addWater(22);
  system.addWater(35);
  system.addWater(300);
}
facadeMain();
