// Code your solution in this file!




const logDriverNames=function (array){
  array.forEach(function (x){
    console.log( x.name)
  }) 
}

const logDriversByHometown= function(array,location){
  array.forEach(function (driver) {
    if (driver.hometown===location) {
      console.log(driver.name)
    }
  })
}


const driversByRevenue= function(array){
  return array.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};


const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};