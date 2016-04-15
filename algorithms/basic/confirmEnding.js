function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var arr = str.split();
  var last = arr[arr.length - 1];
  var test = "";
  if( last.length  > target.length) {
    test = last.substr(last.length - target.length, last.length - 1);
    return test === target;
  } else {
    return (arr[arr.length - 1] === target);
  }
  
}

confirmEnding("Bastian", "n");
