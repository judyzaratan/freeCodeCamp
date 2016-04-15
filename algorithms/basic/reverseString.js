function reverseString(str) {

  //native javascript functions
  //constant space
  //3n
 // return str.split("").reverse().join("");

  //loop form
  // constant space
  // time complexity n
  var result = "";
  for(var i = str.length - 1; i >= 0; i--){
    result += str[i];
  }
  return result;


  //Recursive
}

reverseString("hello");
