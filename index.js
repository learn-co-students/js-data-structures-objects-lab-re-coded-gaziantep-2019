// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key ,value){
  return Object.assign({},obj,{[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key ,value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(driver, key){
  const copyOfDrivers = Object.assign({},driver);
  delete copyOfDrivers[key];
  return copyOfDrivers;
}

function destructivelyDeleteFromDriverByKey(obj, key){
   delete obj[key];
  return obj;
}