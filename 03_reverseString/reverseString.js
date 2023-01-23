const reverseString = function (string) {
  const myArr = string.split("");
  let rString = "";
  for (let i = myArr.length - 1; i >= 0; i--) {
    rString += myArr[i];
  }
  return rString;
};

// Do not edit below this line
module.exports = reverseString;
