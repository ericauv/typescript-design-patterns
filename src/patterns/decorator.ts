// Component
abstract class Clothing {
  public description!: string;
  public getDescription(): string {
    return this.description;
  }
  public abstract cost(): number;
}

// Concrete Component
class Shirt extends Clothing {
  public description = 'Shirt';
  public cost(): number {
    return 25;
  }
}

// Concrete Component
class Pants extends Clothing {
  public description = 'Pants';
  public cost(): number {
    return 40;
  }
}

// Decorator
abstract class ClothingOptions extends Clothing {
  decoratedClothing!: Clothing; // Reference to Component that it is decorating
  public abstract getDescription(): string;
  public abstract cost(): number; // Replace operation in Component
}

// ConcreteDecorator
class Silk extends ClothingOptions {
  constructor(clothingToDecorate: Clothing) {
    super();
    this.decoratedClothing = clothingToDecorate;
  }
  public getDescription(): string {
    return `${this.decoratedClothing.getDescription()}, Silk`;
  }
  public cost(): number {
    return this.decoratedClothing.cost() + 20;
  }
}

// ConcreteDecorator
class HighThreadCount extends ClothingOptions {
  constructor(clothingToDecorate: Clothing) {
    super();
    this.decoratedClothing = clothingToDecorate;
  }
  public getDescription(): string {
    return `${this.decoratedClothing.getDescription()}, High Thread Count`;
  }
  public cost(): number {
    return this.decoratedClothing.cost() + 30;
  }
}

let pants = new Pants();
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
