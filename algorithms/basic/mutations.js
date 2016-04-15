function mutation(arr) {
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  var word2Arr = word2.split("");
  console.log(word2Arr);
  for(var i = 0; i < word2Arr.length; i++) {
    if(word1.indexOf(word2Arr[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);