// 5. html-ის დოკუმენტში აიღეთ ერთი 
// ღილაკი, რომელსაც დაკლიკებისას შეეცვლება ფერი. ეს გააკეთეთ 
// სამნაირი js-ს გზით: inline, internal, external

//hw1
function aritmetical(str,int) {
    //string
    console.log(str + 'asd');
    
    //num
    console.log(int + 2);
    console.log(int - 2);
    console.log(int / 2);
    console.log(int * 2)
}

aritmetical('asd',20);

//hw2
const myP = document.getElementById('myp');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let userText = prompt('enter text');
    let userColor = prompt('enter text color');
    let userBGColor = prompt('enter background color');

    myP.textContent = userText;
    myP.style.color = userColor;
    myP.style.backgroundColor = userBGColor
})


//hw3
function comparisonOperations(num1,num2) {
    console.log(num1 > num2);
    console.log(num1 < num2);
    console.log(num1 >= num2);
    console.log(num1 <= num2);
    console.log(num1 == num2);
    console.log(num1 != num2);
}

comparisonOperations(10,20);


// 4. შექმენით ფუნქცია, რომელსაც გადაეცემა ელემენტი, 
// მის მონაცემთა ტიპს არ აქვს მნიშვნელობა.
// //  ფუნქციაში გამოიყენეთ parseInt, parseFloat ამ ელემენტზე 
// და დაბეჭდეთ შედეგები. ფუნქცია 
// //  გმოიძახეთ რამდენიმეჯერ და გადაეცით სხვადასხვა პარამეტრები.