function findLongestWord(str) {
  var longestWordLength = 0;
  var wordArr = str.split(" ");
  for(var i = 0; i < wordArr.length; i++){
    if(longestWordLength < wordArr[i].length) {
      longestWordLength = wordArr[i].length;
    }
  }
  
  return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");