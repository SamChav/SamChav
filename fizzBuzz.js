function fizzBuzzArray(input) {

  for (var i = 1; i <= input; i++) {
  
    if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else if (i % 15 === 0) {
      console.log('fizzBuzz')
    } else {
      console.log(i)
    }
  }
    }

    console.log(fizzBuzzArray(100))