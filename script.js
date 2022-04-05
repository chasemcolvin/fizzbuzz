// get input from user
let answer = parseInt(prompt("Enter a number you would like to FizzBuzz to: "));

//declare var to i, our condition will loop until i > answer, incrementing by 1 every iteration. 
for (let i = 0; i <= answer; i++) {
    // if int is divisible by 3 && 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    //if int is divisible by 3 
    } else if (i % 3 == 0) {
        console.log("Fizz");
    //if int is divisible by 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}