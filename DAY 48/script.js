// დავალება 1

const pi = 3.14;
const r = 10;

console.log(pi * r * 2) //ფართობი
console.log(6,24 * 20) //სიგრძე

// დავალება 2
let num1 = 10;
let num2 = 5

console.log(num1 > num2)
console.log(num1 >= num2)
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 == num2)
console.log(num1 != num2)

// დავალება 3
const bookName = 'Godfather'; //string
const numberOfSheets = 420;   //number
console.log(`book name is ${bookName} and number of sheets is ${numberOfSheets}`);

const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    let objName = prompt('enter your name');
    let objLastName = prompt('enter your lastname')
    let objAge = prompt('enter your age')

    console.log(`user name is: ${objName}, user lastname is: ${objLastName} and user age is: ${objAge}`)
});

// დავალება 4
const mathNum1 = 2;
const mathNum2 = 5;

console.log(mathNum1 + mathNum2);
console.log(mathNum1 - mathNum2);
console.log(mathNum1 * mathNum2);
console.log(mathNum2 / mathNum1);
console.log(mathNum2 % mathNum1);