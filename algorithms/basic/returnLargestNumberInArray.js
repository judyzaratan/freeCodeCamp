function largestOfFour(arr) {
  // You can do this!
  var largestArr = arr.map(function(element){
    var largest = 0;
    for(var i = 0 ; i < element.length; i++) {
      if(element[i] > largest) {
        largest = element[i];
      }
    }
    return largest;
  });
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
