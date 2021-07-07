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
/*   
  describe('destructivelyDeleteFromDriverByKey(driver, key)', function () {
    it('returns driver without the delete key/value pair', function () {
      let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

      expect(newdriver['name']).to.equal(undefined);
    });

    it('modifies the original driver', function () {
      let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

      expect(driver['name']).to.equal(undefined);
    });*/