//STEP 1
function halfNumber(number) {
  console.log(`Half of ${number} is ${number / 2}.`)
}

//STEP 2
function squareNumber(number) {
  console.log(`The result of squaring the number ${number} is ${number * number}.`)
}

//STEP 3
function percentOf(number, wholeValue) {
  let percentage = (number / wholeValue) * 100
  console.log(`${number} is ${percentage}% of ${wholeValue}`)
}

//STEP 4
function findModulus(firstNumber, secondNumber) {
  let answer = firstNumber % secondNumber
  console.log(`${answer} is the modulus of ${firstNumber} and ${secondNumber}`)
}

//STEP 5
function sumApplication() {
  let args = window.prompt("Enter all values separated by commas")
  let integerArguments = args.split(",").map((number) => (
    parseInt(number)
  ))
  sumNumbers(integerArguments)
}

function sumNumbers(numbers) {

  let sumOfNumbers = 0
  let stringOfNumbers = ''
  numbers.forEach((number) => {
    sumOfNumbers += number
    stringOfNumbers += `${number}, `
  })

  console.log(`${sumOfNumbers} is the total of ${stringOfNumbers}`)
}
