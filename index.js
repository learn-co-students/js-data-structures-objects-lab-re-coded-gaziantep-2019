// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({},driver,{[key] : value});
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.name = 'Sam';
  driver.address = '12 Broadway';
  return driver;
}
function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver);
  delete newDriver.name;
  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  let anotherDrivers = driver;
  delete anotherDrivers.name ;
  return anotherDrivers;
}
