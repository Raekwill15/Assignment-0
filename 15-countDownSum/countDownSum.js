class MySolution {
  countDownSum(num) {
    // Insert code here;
    var nextNum = num-1
    if (nextNum > 0) {
      return num + this.countDownSum(nextNum)
    } else
        return 1
  }
}

 

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;