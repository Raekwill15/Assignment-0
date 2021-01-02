function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var max=nums[0],min=nums[0],x,n
  for (x = 0 ; x < nums.length ; x++) {
    if (min > nums[x]) {
      min = nums[x]
    }
    if (max < nums[x]){
      max = nums[x]
    }
  }
return max + min
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;