function palindrome(str) {
  // Good luck!
  var normal = str.toLowerCase().replace(/\W+|_/g,"");
  var reverse = normal.split("").reverse().join("");
  console.log(normal + "\n" +  reverse);
  return (normal === reverse);
}



palindrome("eye");
