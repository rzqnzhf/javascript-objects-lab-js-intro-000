function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var y = key;
  var x = Object.assign({}, object);
  delete x[y];
  return x;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
