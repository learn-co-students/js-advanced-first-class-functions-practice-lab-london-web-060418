function logDriverNames(collection) {
  collection.forEach(function (elem) { console.log(elem.name) });
}

function logDriversByHometown(collection, location) {
  collection.forEach(function (elem) {
    if (elem.hometown === location) {
      console.log(elem.name)
    }
  })
}

function driversByRevenue(collection) {
  const newArray = collection.slice();
  return newArray.sort(function (a, b) { return a.revenue - b.revenue });
}

function driversByName(collection) {
  const newArray = collection.slice();
  return newArray.sort(function (a, b) { return a.name.localeCompare(b.name) });
}

function totalRevenue(collection) {
  return collection.reduce(function (agg, elem) { return agg + elem.revenue }, 0)
}

function averageRevenue(collection) {
  return totalRevenue(collection) / collection.length;
}
