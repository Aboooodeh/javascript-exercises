const sumAll = function (a, b) {
  let result = 0;
  if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number")
    return "ERROR";
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
