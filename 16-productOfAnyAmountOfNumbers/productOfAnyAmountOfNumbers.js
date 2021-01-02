function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var arr = Array.from(args),prod = 1
  
  for (var x = 0 ; x < arr.length; x++) {
    prod *=arr[x]
  }
  return prod
}


// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;