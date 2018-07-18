// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(element){
    console.log(element.name)
  });
}

function logDriversByHometown(array, location){
  array.forEach(function(element){
    if (element.hometown === location){
      console.log(element.name)
    }
  });
};

function driversByRevenue(array){
  newArr = [].concat(array)
  newArr = newArr.sort(function(a, b){
    return a.revenue - b.revenue
  });
  return newArr
};

function driversByName(array){
  newArr = [].concat(array)
  newArr = newArr.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
  return newArr
};

function totalRevenue(array){
  let totalSum = 0
  return array.reduce(function(acc, currentValue){
    return acc + currentValue.revenue;
  }, totalSum)
};

function averageRevenue(array){
  let totalSum = 0
  totalRevenue = array.reduce(function(acc, currentValue){
    return acc + currentValue.revenue;
  }, totalSum)
  return totalRevenue / array.length
}
