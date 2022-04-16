// function carousel(turns) {
//     while (turns <=10) {
//         console.log(turns)
//         turns++
//     }
// }console.log(carousel(1))
// function carousel(turns){
//     for (turns = 1; turns <= 10; turns++){
//         console.log(turns)
//     }
// } carousel();
// function oddOrEven(number) {
//     for (let i = number; i<= 10; i++){
//         if (i % 2 === 0) {
//             console.log(`${i} is even`);
//         } else {
//             console.log(`${i} is odd`);
//         }
//     }
// } oddOrEven();
// function pickANumber(number) {
//     if (number > 100) {
//         return "Choose another number!"
//     } else if(number >= 50) {
//         return "Number accepted!"
//     } else {
//         return "Choose another number!"
//     }
// } console.log(pickANumber())
// function multiplicationTable(userNumber) {
//     let table = ' '
//     for (x = 1; x <= userNumber; x++) {
//         for (y = 1; y <= userNumber; y++) {
//             table += (x * y) + ' ';
//         }
//         table += '\n'
//     }
// }multiplicationTable(5)

// Square the given number x
// function square1(x) {
//   return Math.pow(x, 2)
// }
//   // Square the given number x
//   const square2 = x => Math.pow(x,2) // TODO: complete the function code
  
//   console.log(square1(0)); // Must show 0
//   console.log(square1(2)); // Must show 4
//   console.log(square1(5)); // Must show 25
  
//   console.log(square2(0)); // Must show 0
//   console.log(square2(2)); // Must show 4
//   console.log(square2(5)); // Must show 25
// TODO: write the min() function
// function min(num1, num2) {
//   // if (num1 - num2 >= 0) {
//     return num1 - num2 >= 0 ? num2 : num1;
//   // } else {
//   //   return num1
//   // }
// }
// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1
// function calculate(num1, operator, num2) {
//   if (operator === '+') {
//     return num1 + num2
//   }else if(operator === '-') {
//     return num1 - num2
//   }else if(operator === '*') {
//     return num1 * num2
//   }else if(operator === '/') {
//     return num1 / num2
//   }
// }

// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); 
function circumference(radius) {
  return 2 * radius * Math.PI
}
function area(radius) {
  return Math.PI * Math.pow(radius, 2)
}
console.log(area(2))
console.log(circumference(4))