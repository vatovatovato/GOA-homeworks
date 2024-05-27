// hw1
function infoJoin(name,lastname,age,livePlace,hobby) {
    return `hello my name is ${name} ${lastname}. im ${age} years old, i live in ${livePlace} and my hobby is ${hobby}`;
}

let myInformation = infoJoin('vato','kheladze',14,'tbilisi','playing guitar')
console.log(myInformation);

// hw 2
function ageCheck(age) {
    console.log(age > 18);
    console.log(age < 18);
    console.log(age == 18);
    // add other comparisons
    console.log(age != 18);
    console.log(age === 18);
    console.log(age < 16);
}

ageCheck(14);

// hw 3
const alertBtn = document.getElementById('alert-btn');

alertBtn.addEventListener('click', function() {
    alert('clicked')
});

/*
html-ში აიღეთ ერთი ღილაკი და პარაგრაფი. ღილაკის 
დაკლიკებაზე უნდა გაეშვას ფუნქცია სახელად colorChanger - 
პარაგრაფის ტექსტის ფერი უნდა გახდეს მწვანე.

ვებგვერდზე აიღეთ რამდენიმე p თეგი და მათში ჩაწერეთ 
ტექსტი. საიტის ჩატვირთვისთანავე უნდა გაეშვას ნქცია, 
რომელიც ყველა პარაგრაფის ტექსტის ფერს შეცვლის.*/


// hw 4
const colorChangerP = document.getElementById('color-changer-p');
const colorChangerBtn = document.getElementById('color-changer-btn');

colorChangerBtn.addEventListener('click', function() {
    colorChangerP.style.color = 'green';
});


// hw 5
const container = document.getElementById('container');

function startChanger() {
    container.style.color = 'yellow'
}

startChanger()