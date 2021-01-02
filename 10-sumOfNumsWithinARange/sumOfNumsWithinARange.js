function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var x,n=0
  for (x = 0; x < nums.length; x++) {
    if (nums[x] >= start && nums[x] <= end)
      n++
  }
  return n
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;