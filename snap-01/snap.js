//Function #1 take two numbers as arguments and return a new value after a mathematical operation (addition,subtraction,
// multiplication, etc)which operation is your choice.


function multiplyTwoNumbers(number1,number2) {
    console.log("first Number", number1)
    console.log("second Number", number2)
    const result = number1 * number2;
    return result
}
let firstNumber= 20
let secondNumber = 5
let result = multiplyTwoNumbers(firstNumber, secondNumber)
console.log(result)


//Function #2
//Take two strings as arguments and return a value that has them concatenated

const value = "A string"
"I am " + value+ " " + "isnt Javascript fun"

function combineTwoStrings(string1, string2){
    return string1 + string2

}

console.log(combineTwoStrings("Javascript is to carpet as","java is to car"))











