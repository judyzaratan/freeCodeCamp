function diffArray(arr1, arr2) {
  var newArr = [];
  function diff1 (value) {
    if(arr2.indexOf(value) < 0) {
      return value;
    }
  }
  function diff2(value) {
    if(arr1.indexOf(value) < 0) {
      return value;
    }
  }
  console.log(arr1.filter(diff1));
  // Same, same; but different.
  return arr1.filter(diff1).concat(arr2.filter(diff2));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);