// Code your solution in this file!

const logDriverNames = (drivers) => {
  drivers.forEach((driver) => {
    console.log(driver.name);
  });
};


const logDriversByHometown = (drivers, location) => {
  drivers.forEach((driver) => {
    if (driver.hometown === location){
      console.log(driver.name);
    };
  });
};

const driversByRevenue = (drivers) => {
  x = drivers.slice();
  x.sort((a, b) => {
    return a.revenue - b.revenue;
  });
  return x;
};

const driversByName = (drivers) => {
  const x = drivers.slice();
  x.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return x;
};

const totalRevenue = (drivers) => {
  x  = drivers.reduce((acc, driver) => {
      return acc + driver.revenue;
  },0);
  return x
};

const averageRevenue = (drivers) => {
  return totalRevenue(drivers) / drivers.length
}
