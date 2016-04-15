function rot13(str) { // LBH QVQ VG!
  var workingCharCodeArr = [];
  for(var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      if(str.charCodeAt(i) - 13 < 65) {
        workingCharCodeArr.push(str.charCodeAt(i) + 13);
      } else {
        workingCharCodeArr.push(str.charCodeAt(i) - 13);
      }
    } else {
      workingCharCodeArr.push(str.charCodeAt(i));
    }
  }
  console.log(String.fromCharCode.apply(this, workingCharCodeArr));
  return String.fromCharCode.apply(this, workingCharCodeArr);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
