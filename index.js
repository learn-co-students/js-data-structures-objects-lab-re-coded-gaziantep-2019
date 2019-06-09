let driver={name:'Sam'};
let newdriver={};

function updateDriverWithKeyAndValue(driver, key, value) {
  
 return Object.assign({},driver, { [key]: value });
  
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
  driver[key] = value;
  return driver;
  
}

function deleteFromDriverByKey(driver, key) {
  
  newdriver= delete driver.key;
  return newdriver;
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
  newdriver= delete driver[key];
  delete driver[key];
  return driver;
  
}



