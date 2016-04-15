function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1); //remove first element in argument array
  console.log(args);
  //loop thru arguments and filter out the values -- not sure if efficient
  function remove(value) {
     if (value === test) {
        return false;
      }
      return true;
  }

  var out = arr;
  for(var i = 0; i < args.length; i++) {
    var test = args[i];
    var out = out.filter(remove);
  }
  return out;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
