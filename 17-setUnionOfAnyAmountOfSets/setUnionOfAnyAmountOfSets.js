function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var x,uSet = new Set()

  for (x of args) {
    for (var y of x){
      uSet.add(y)
    }
  }
  return uSet
}


// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;