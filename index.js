// Code your solution in this file!
// logDriverNames() — Receives an array of driver objects and logs the
// name attribute of each driver to the console.

const logDriverNames = function (array) {
    array.forEach(function (object){
      console.log(object.name);
    })
}

// logDriversByHometown() — Receives an array of driver objects as the
// first argument and a location as the second argument. The function
// logs to the console the name attribute of each driver whose
// hometown matches the string passed in as the 'location' argument.

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (object){
    if (object.hometown === location) {
      console.log(object.name);
    }
  })
}

// driversByRevenue() — Receives an array of driver objects and returns
// a new array of driver objects sorted by their revenue attribute
// from lowest to highest.

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.revenue - second.revenue;
  })
}

// driversByName() — Receives an array of driver objects and returns a
// new array of driver objects sorted by their name attribute from A to Z.
// Here, you may have to use the String.prototype.localeCompare() method.

const driversByName = function (drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.name.localeCompare(second.name);
  })
}

// totalRevenue() — Receives an array of driver objects and returns
// the sum of the revenue earned by each driver.

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
}

// averageRevenue() — Receives an array of driver objects and returns 
// the average revenue earned by each driver.

const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length ;
}
