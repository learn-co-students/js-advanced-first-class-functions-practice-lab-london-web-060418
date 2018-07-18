// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(x => console.log(x.name));
}

function logDriversByHometown(drivers, location) {
 drivers.forEach(x => {
   if(x.hometown === location) {
     console.log(x.name);
   }
 });
}

function driversByRevenue(drivers) {
  newObj = Object.assign([], drivers);
  return newObj.sort((a, b) => a.revenue > b.revenue);
}

function driversByRevenue(drivers) {
  newObj = Object.assign([], drivers);
  return newObj.sort((a, b) => a.revenue > b.revenue);
}

function driversByName(drivers) {
  newObj = Object.assign([], drivers);
  return newObj.sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  return drivers.reduce( ((count, value) => count += value.revenue), 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}