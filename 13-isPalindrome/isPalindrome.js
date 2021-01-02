function isPalindrome(word) {
  // Insert code here;
  var wordarr = word.split("")
  var x , backword = "" 
  for (x = word.length-1; x >= 0; x--) {
    backword = backword.concat("" , wordarr[x])
  }
  
  if (backword == word)
    return true
    else
    return false
}

// Do not edit this line;
module.exports = isPalindrome;