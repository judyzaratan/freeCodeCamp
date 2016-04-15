function titleCase(str) {
  var arr = str.split(" ");
  var updateArr = arr.map(function(element) {
    var eleArr = element.toLowerCase().split("");
   
    eleArr[0] = eleArr[0].toUpperCase();
    var eleStr = eleArr.join("");
    return eleStr;
  });
  return updateArr.join(" ");
}

titleCase("I'm a little tea pot");