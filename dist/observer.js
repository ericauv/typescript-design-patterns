"use strict";
var MoistureMonitor = /** @class */ (function () {
    function MoistureMonitor() {
        this.observers = [];
        this.moistureContent = 0;
    }
    MoistureMonitor.prototype.setMoistureContent = function (moistureContent) {
        console.log("MoistureMonitor: new moisture content is " + moistureContent + "%");
        this.moistureContent = moistureContent;
        this.notifyObservers();
    };
    MoistureMonitor.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    MoistureMonitor.prototype.unregisterObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
        else {
            throw new Error('Unable to unregister observer: observer not registered.');
        }
    };
    MoistureMonitor.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.notify(this.moistureContent);
        }
    };
    return MoistureMonitor;
}());
var MoistureDisplay = /** @class */ (function () {
    function MoistureDisplay(subject) {
        this.subject = subject;
        subject.registerObserver(this);
    }
    MoistureDisplay.prototype.notify = function (moistureContent) {
        console.log("MoistureDisplay: Updating display to show moisture content: " + moistureContent + "%");
        // Update display logic
    };
    return MoistureDisplay;
}());
var MoistureAlarm = /** @class */ (function () {
    function MoistureAlarm(subject) {
        this.subject = subject;
        subject.registerObserver(this);
    }
    MoistureAlarm.prototype.notify = function (moistureContent) {
        if (moistureContent > 50) {
            console.log("MoistureAlarm: Moisture content is too high! Sounding Alarm.");
            // Sound alarm logic
        }
        else if (moistureContent < 30) {
            console.log("MoistureAlarm: Moisture content is too low! Sounding Alarm.");
            // Sound alarm logic
        }
    };
    return MoistureAlarm;
}());
function observerMain() {
    var moistureMonitor = new MoistureMonitor();
    var moistureAlarm = new MoistureAlarm(moistureMonitor);
    var moistureDisplay = new MoistureDisplay(moistureMonitor);
    moistureMonitor.setMoistureContent(35);
    moistureMonitor.setMoistureContent(55);
    moistureMonitor.setMoistureContent(29);
}
observerMain();
