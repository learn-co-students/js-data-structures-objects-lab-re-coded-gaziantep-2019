let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newValue = Object.assign({}, driver);

  newValue[key] = value;

  return newValue;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let newdriver = Object.assign({}, driver);

  delete newdriver[key];

  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){

  delete driver[key]g;

  return driver;
}