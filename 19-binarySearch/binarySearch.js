class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var mid = Math.floor(nums.length/2)
    
    if (nums[mid] == target) {
      return true
    } else if (nums[mid] > target) {
        nums = nums.slice(0 , mid)
        return this.binarySearch(nums,target)
    } else if (nums[mid] < target) {
        nums = nums.slice(mid+1)
        return this.binarySearch(nums,target)
      }
      return false
    }
  }

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;