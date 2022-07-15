// Write a function that takes an array of numbers
// returns a new array of the same length with either "fizz", or "Buzz"
// strings instead of numbers. The function should
// return "Fizz" in case the number is even and "Buzz" in case the number is odd.
// Examples:
// fizzBuzz([2,5,3,1,4]) // return ['Fizz', 'Buzz', 'Buzz', 'Buzz', 'Fizz']
// fizzBuzz([1,0,2,5]) // return ['Buzz', 'Fizz', 'Fizz', 'Buzz']

function fizzBuzz(arr) {
  return arr.map((ele) => {
    if (ele % 2 === 0) {
       return'fizz'
     } 
    //  else {
      return 'buzz'
    // }
  })
}

const fizzBuzz2 = (arr) => arr.map((ele) => (ele % 2 === 0 ? 'fizz' : 'buzz'))

console.log(fizzBuzz2([2, 5, 3, 1, 4]))

const fizz = (arr) => {
let oddEven = []

  arr.forEach((item) => {
    if (item % 2 === 0) {
      oddEven.push('fizz')
    }
    // else{
    oddEven.push('buzz')

    // }
  })
  return oddEven
}


Write a function that takes an array of numbers and returns a new array of 
the same length with either "Fizz", "Buzz", or "FizzBuzz" strings 
instead of numbers. The function should return "Fizz" in case 
the number is dividable by 2, "Buzz" in case the number is dividable by 3, 
"FizzBuzz" in case the number is not dividable by both 2 and 3, and 
returns the number itself if it is not dividable by either 2 or 3.
// 9:17
fizzBuzzFizzBuzz([0, 1, 2, 3, 5, 6]) 
//return ['FizzBuzz', 1, 'Fizz', 'Buzz', 5, 'FizzBuzz']