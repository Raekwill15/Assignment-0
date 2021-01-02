function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var x,n=0

  for (x=0 ; x < arr.length ; x++) {
    if(arr[x] === true || arr[x] === false || typeof arr[x] == "string")
      n++
  }
  return n
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;