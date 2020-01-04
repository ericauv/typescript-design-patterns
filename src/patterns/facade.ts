abstract class Material {
  public name: string;
  public waterAmount: number = 0;
  constructor(name: string) {
    this.name = name;
  }
}
class Plant extends Material {
  public height: number;

  constructor(name: string) {
    super(name);
    this.height = 0;
  }

  absorbWater(waterAmountToAbsorb: number) {
    this.waterAmount += waterAmountToAbsorb;
    console.log(
      `Plant(${this.name}) absorbed ${waterAmountToAbsorb} units of water. New waterAmount: ${this.waterAmount}`
    );

    if (this.waterAmount >= 100) {
      this.grow(Math.floor(this.waterAmount / 100));
      this.waterAmount = this.waterAmount % 100;
    }
  }

  grow(growthAmount: number) {
    this.height += growthAmount;
    console.log(
      `Plant(${this.name}) grew ${growthAmount} units in height. New height: ${this.height}`
    );
  }
}

class Soil extends Material {
  private minimumWaterAmount: number;

  constructor(name: string, minimumWaterAmount: number) {
    super(name);
    this.waterAmount = minimumWaterAmount;
    this.minimumWaterAmount = minimumWaterAmount;
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
  const clay = new Soil('Clay', 14);
  const system = new PlantSoilSystem('system', planty, clay);

  system.addWater(4);
  system.addWater(50);
  system.addWater(40);
  system.addWater(22);
  system.addWater(35);
  system.addWater(300);
}
facadeMain();
