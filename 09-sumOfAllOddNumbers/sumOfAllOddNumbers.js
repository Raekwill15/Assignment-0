function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var x,n=0
  for (x = 0; x < nums.length; x++) {
    if (nums[x]%2 != 0) 
      n++
  }
  return n
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;