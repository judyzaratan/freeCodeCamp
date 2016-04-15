function factorialize(num) {
  var factorial = 1;
  for(var i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

factorialize(5);