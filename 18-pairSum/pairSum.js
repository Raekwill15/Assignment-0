function pairSum(nums, target) {
  // Insert code here;
  
  if (nums.length <= 1) 
    throw ("ERROR Not enough numbers in array")
  else {
    for (var x = 0; x < nums.length; x++) {
      for (var y = x+1; y < nums.length; y++) {
        if (nums[x] + nums[y] == target)
        return true
      }
   }
}
  return false
}

// Do not edit this line;
module.exports = pairSum;