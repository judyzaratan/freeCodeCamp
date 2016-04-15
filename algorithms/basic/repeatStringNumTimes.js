function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num <= 0) {
    return "";
  }
  var repeatStr = "";
  for (var i = 0; i < num; i++){
    repeatStr += str;
  }
  return repeatStr;
}

repeatStringNumTimes("abc", 3);