function chunkArrayInGroups(arr, size) {
  // Break it up.
  var end = size;
  var outputArr = [];
  var start = 0; 
  while(outputArr.length < arr.length/size) {
   outputArr.push(arr.slice(start, end));
   start += size;
   end += size;
  }
  return outputArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);