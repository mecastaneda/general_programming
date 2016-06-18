/**
 * Here we have a constructor function Building, that has its
 * methods and properties, also there is a nested contructor function
 * Elevator. The building creates two elevators which work independently,
 * as each elevator is a public property of the building, it automatically
 * exposes the elevator's public API.
 */

function Building(stories, rmsPerStorie) {
  this.stories = stories;
  this.rmsPerStorie = rmsPerStorie;
  this.elevatorRegular = new Elevator(stories);
  this.elevatorLight = new Elevator(stories);

  function Elevator(max) {
    var current = 0;
    this.max = max;

    this.getCurrent = function() {
      return current;
    };

    this.goToFloor = function(floor) {
      if(floor > max || floor < 0) return;
      current = floor;
    };

    this.call = function(current) {
      if(current > max || current < 0) return;
      current = floor;
    };
  }
}

// Usage
var empire = new Building(30, 10);

empire.elevatorLight.call(3);
empire.elevatorRegular.call(2);
empire.elevatorLight.goToFloor(4);
console.log('Regular elevator floor', empire.elevatorRegular.getCurrent());
