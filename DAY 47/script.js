// შექმენით 2 ღილაკი და ერთი ფოტო, ხოლო
//  როდესაც პირველ რილაკზე მოხდება დაკლიკება 
//  ფოტოს width გახდეს 300, ხოლო როცა მეორე ღილაკზე
//   მოხდება დაკლიკება ფოტოს ზომა გახდეს 500

// დააკავშირეთ ჰტმლს ფაილტან ჯავასკრიპტის ფაილი 
// script თეგების გამოყენებით, აგრეთვე გამოიყენეთ alert()
//  ფუნქცია ჯავასკრიპტის ფაილში და გატესტეთ როგორ
//  იმუშავებს დაკავშირების შემდეგ]

// // შექმენით ორი ცვლადი num1, num2 ხოლო console.log()
//  გამოყენებით დაბეჭდეთ ამ ორი ცვლადის ჯამი


// დავალება 1
const img = document.getElementById('img')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.addEventListener('click', function() {
    img.style.width = '500px'
    img.style.height = '500px'
})

btn2.addEventListener('click',function() {
    img.style.width = '300px'
    img.style.height = '300px'
});

// დავალება 2
alert('site is working')


// დავალება 3
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);