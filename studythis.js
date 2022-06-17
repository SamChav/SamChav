/* fizzBuzzArray takes a number n as input. As output, fizzBuzzArray returns an array of n numbers following special rules.

Output array should start at number 1. And should contain n numbers.

Special rules. If the number is only divisible by three, don't add the number to the return array. Instead, add 'fizz'. If the number is only divisible by five, don't add the number to the return array either. Instead, add 'buzz'. If the number is divisible by both three AND five, don't add the number to the return array. Instead, add 'fizzBuzz'.*/

function returnPyramid(num) {
var results = []
var str = ''

  for (var i = 0; i < num; i++){
    str += '#'
    results.push(str)
  }
  return results
}


var output = returnPyramid(2);
console.log(output)