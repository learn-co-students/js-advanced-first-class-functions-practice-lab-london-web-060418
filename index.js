// Code your solution in this file!
const logDriverNames = function (array) {
  array.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function (array, location) {
  array.forEach(function (driver) {
    if (driver.hometown === location)
      console.log(driver.name)
  })
}

const driversByRevenue = function (array) {
  return array.slice().sort(function (a, b){
    return a.revenue - b.revenue
  })
}

const driversByName = function (array) {
  return array.slice().sort(function (a, b){
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function (array) {
  let totalRevenue = 0
  array.forEach(function (driver) {
    totalRevenue += driver.revenue
  })
  return totalRevenue
}

const averageRevenue = function (array) {
  return (totalRevenue(array) / array.length)
}
