

// Declaring Variables
let value = "I am a string"
const fancyValue = [1,2,3,4,5,6]

//Conditionals/ Control Flow
const isValueTrue = false

if(isValueTrue) {
    console.log("The Value is true");
} else if (isValueTrue === false) {
    console.log("The value is false")
} else {
    console.log("I am not sure what this value")
}

// Functions
function whatIsTheMeaningOfLife(parameter) {
    return parameter + "is the meaning of life"
}
const result = whatIsTheMeaningOfLife("42")
console.log(result)


// Loops
const factor = function (number){
    let sum = 0

    for (let i = 1; i <= number; i++){
        console.log(i)
        if (number % i === 0){
            sum = sum + i
        }
    }
    return sum
}

console.log(factor(29))

//Extra Credit

// Arrays

// Scope