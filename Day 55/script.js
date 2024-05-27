// hw 1
let num1 = prompt();
let num2 = prompt();

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// hw2
const form = document.getElementById('form');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    console.log('user password: ' + form.elements.form-text.value);
    console.log('user email: ' + form.elements.em.value);

});

const contentP = document.getElementById('content-p');
const text = document.getElementById('text');
const textColor = document.getElementById('text-color');
const colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', function() {
    //ვამატებ ესეთ ფუნქციას რომ თუ რომელიმე ინფუთი არიქნება ბოლომდე შევსებული, მაშინ ამოაგდოს გამაფრთხილებელი ჩარჩო
    if(text.value == '') {
        alert('შეიტანეთ ტექსტი')
    }
    else if(textColor.value == '') {
        alert('შეიტანეთ ფერი')
    }
    else {
        contentP.textContent = text.value;
        contentP.style.color = textColor.value;
    }
});