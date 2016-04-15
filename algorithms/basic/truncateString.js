function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length >= num) {
    if(num <= 3) {
      return str.slice(0, num) + "...";
    }
    if(num === str.length) {
      return str;
    }
    return str.slice(0, num - 3) + "...";
  }
  if(str.length < num) {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);