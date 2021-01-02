function frequencyCounter(word) {
  // Insert code here;
  var x,n,letter,num=0
  var counter = {}

  for (x = 0 ; x < word.length ; x++) {
    num = 0
    letter = word.charAt(x)
    for (n = 0 ; n <= x; n++){
      if (letter == word.charAt(n)) {
        num++
      }
    }
    counter[word.charAt(x)] = num
  }
return counter
}
// Do not edit this line;
module.exports = frequencyCounter;