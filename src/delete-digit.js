const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const isNegative = str[0] === "-";
  const digits = isNegative ? str.slice(1) : str;

  let max = -Infinity;

  for (let i = 0; i < digits.length; i++) {
    const candidateDigits = digits.slice(0, i) + digits.slice(i + 1);
    const candidateStr = isNegative ? `-${candidateDigits}` : candidateDigits;
    const value = Number(candidateStr);
    if (value > max) max = value;
  }

  return max === -Infinity ? 0 : max;
}

module.exports = {
  deleteDigit,
};
