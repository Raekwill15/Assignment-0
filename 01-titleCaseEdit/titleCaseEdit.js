function titleCaseEdit(title) {
  // Insert code here;
  var newTitle
  const words = title.split(" ")
  
  console.log(words)
  for( var x = 0; x<words.length; x++) {
    words[x] = words[x].charAt(0).toUpperCase() + words[x].slice(1)
  }

  newTitle = words.join(" ")
  return newTitle
}

// Do not edit this line;
module.exports = titleCaseEdit;