interface Observer {
  notify(moistureContent: number): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  unregisterObserver(observer: Observer): void;
  notifyObservers(): void;
}

class MoistureMonitor implements Subject {
  private observers: Observer[] = [];
  private moistureContent: number = 0;

  setMoistureContent(moistureContent: number): void {
    console.log(`MoistureMonitor: new moisture content is ${moistureContent}%`);
    this.moistureContent = moistureContent;
    this.notifyObservers();
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  unregisterObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    } else {
      throw new Error(
        'Unable to unregister observer: observer not registered.'
      );
    }
  }
  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.notify(this.moistureContent);
    }
  }
}

class MoistureDisplay implements Observer {
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  notify(moistureContent: number): void {
    console.log(
      `MoistureDisplay: Updating display to show moisture content: ${moistureContent}%`
    );
    // Update display logic
  }
}

class MoistureAlarm implements Observer {
  private subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  notify(moistureContent: number): void {
    if (moistureContent > 50) {
      console.log(
        `MoistureAlarm: Moisture content is too high! Sounding Alarm.`
      );
      // Sound alarm logic
    } else if (moistureContent < 30) {
      console.log(
        `MoistureAlarm: Moisture content is too low! Sounding Alarm.`
      );
      // Sound alarm logic
    }
  }
}

function observerMain(): void {
  const moistureMonitor = new MoistureMonitor();
  const moistureAlarm = new MoistureAlarm(moistureMonitor);
  const moistureDisplay = new MoistureDisplay(moistureMonitor);

  moistureMonitor.setMoistureContent(35);
  moistureMonitor.setMoistureContent(55);
  moistureMonitor.setMoistureContent(29);
}

observerMain();
