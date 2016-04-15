function sumAll(arr) {
  var low = Math.min.apply(null, arr);
  var high = Math.max.apply(null, arr);
  console.log('low/high', low, high);
  var sum = 0;
  for(var i = low; i <= high; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);