function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var x,n=0
  for(x = 0 ; x < nums.length ; x++){
    if (nums[x] < target)
      n++
  }
  return n
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;