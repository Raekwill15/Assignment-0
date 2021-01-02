function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var x,n=0
  for (x = 0 ; x < nums.length; x++) {
    if(nums[x] == x)
      n++;
  }
  return n;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;