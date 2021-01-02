function countOfAllBooleans(arr) {
  // Insert code here;
  var n = 0

  for (var x = 0 ; x < arr.length ; x++)  {
    if  (arr[x] === true || arr[x] === false) {
     n++;
   }
  }
  return n
}

// Do not edit this line;
module.exports = countOfAllBooleans;