// Strategy Design Pattern

// Client
class Duck {
  flyStrategy: IFlyStrategy;
  quackStrategy: IQuackStrategy;
  constructor(flyStrategy: IFlyStrategy, quackStrategy: IQuackStrategy) {
    this.flyStrategy = flyStrategy;
    this.quackStrategy = quackStrategy;
  }
  fly() {
    this.flyStrategy.fly();
  }

  quack() {
    this.quackStrategy.quack();
  }
}

// Abstract Strategy
interface IFlyStrategy {
  fly(): void;
}

// Concrete Strategy
class SimpleFly implements IFlyStrategy {
  fly() {
    console.log(`SimpleFly`);
  }
}
// Concrete Strategy
class FastFly implements IFlyStrategy {
  fly() {
    console.log(`FastFly`);
  }
}

// Abstract Strategy
interface IQuackStrategy {
  quack(): void;
}

// Concrete Strategy
class SimpleQuack implements IQuackStrategy {
  quack() {
    console.log(`SimpleQuack`);
  }
}
// Concrete Strategy
class LoudQuack implements IQuackStrategy {
  quack() {
    console.log(`LoudQuack`);
  }
}

function strategyMain() {
  const fastAndLoudDuck = new Duck(new FastFly(), new LoudQuack());
  const simpleAndLoudDuck = new Duck(new SimpleFly(), new LoudQuack());
  const fastAndSimpleDuck = new Duck(new FastFly(), new SimpleQuack());

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
