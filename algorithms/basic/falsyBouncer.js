function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isFalsy(value) {
    if(value) {
      return true;
    }
    return false;
  }
  return arr.filter(isFalsy);
}

bouncer([7, "ate", "", false, 9]);