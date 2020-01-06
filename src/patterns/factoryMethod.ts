// Factory Method Design Pattern

interface IPosition {
  x: number;
  y: number;
}
interface IVelocity {
  x: number;
  y: number;
}

// Product
abstract class Circle {
  radius: number;
  position: IPosition;
  constructor(radius: number, position: IPosition) {
    this.radius = radius;
    this.position = { ...position };
  }
  about(): void {}
}

// Concrete Product
class MovingCircle extends Circle {
  velocity: IVelocity;
  constructor(radius: number, position: IPosition, velocity: IVelocity) {
    super(radius, position);
    this.velocity = { ...velocity };
  }
  about(): void {
    console.log(
      `radius:${this.radius}\nposition.x:${this.position.x}, position.y:${this.position.y}\nvelocity.x:${this.velocity.x}, velocity.y:${this.velocity.y}\n`
    );
  }
}

// Factory
interface ICircleFactory {
  createCircle(multiplier?: number): Circle;
}

// Concrete Factory
class MovingCircleFactory implements ICircleFactory {
  createCircle(multiplier: number = 1): MovingCircle {
    const radius = Math.round(Math.random() * 10 * multiplier);
    const position = {
      x: Math.round(Math.random() * 10 * multiplier),
      y: Math.round(Math.random() * 10 * multiplier)
    };
    const velocity = {
      x: Math.round(Math.random() * 10 * multiplier),
      y: Math.round(Math.random() * 10 * multiplier)
    };
    return new MovingCircle(radius, position, velocity);
  }
}

// Concrete Factory
class StationaryCircleFactory implements ICircleFactory {
  createCircle(multiplier: number = 1): MovingCircle {
    const radius = Math.round(Math.random() * 10 * multiplier);
    const position = {
      x: Math.round(Math.random() * 10 * multiplier),
      y: Math.round(Math.random() * 10 * multiplier)
    };
    return new MovingCircle(radius, position, { x: 0, y: 0 });
  }
}

function factoryMethodMain() {
  console.log('-- MovingCircleFactory --');
  const movingCircle = new MovingCircleFactory().createCircle();
  movingCircle.about();
  console.log('-- StationaryCircleFactory --');
  const stationaryCircle = new StationaryCircleFactory().createCircle();
  stationaryCircle.about();
}

factoryMethodMain();
