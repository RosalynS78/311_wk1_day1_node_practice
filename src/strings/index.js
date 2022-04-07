const split = (str, delim) => {
  // write code for strings.split
let newString = str.split(delim);
// creates new variable that splits string
return newString
}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = str.match(/..?/g); 
  // g is global will return all items that match 
  return arr;

}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split("").reverse().join("");

}

module.exports = {
  split,
  pairs,
  reverse
}