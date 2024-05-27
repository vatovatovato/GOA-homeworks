//  1.html-ში შექმენით სამი პარაგრაფი. შემდეგ დაამატეთ ერთი ღილაკი, რომელზე დაკლიკებისას გაეშვება შემდეგი ფუნქცია:
//  პირველის ტექსტი დაიწეროს მეორეში, მეორესი - მესამეში და მესამე პარაგრაფის ტექსტი კი პირველი.

//  2.html-ში შექმენით ერთი პარაგრაფი და სამი ღილაკი. პირველ ღილაკს დაუწერეთ -1, მეორეს reset და მესამეს +1. 
// მათი ფუნქციონალიც შესაბამისი იქნება. პირველზე დაკლიკებისას p-ში არსებულ რიცხვს დააკლდეს ერთი, მეორეზე დაკლიკებისას 
// განულდეს, ხოლო მესამეზე დაკლიკებისას მოემატოს ერთი.

//  3.html-ში შექმენით სამი პარაგრაფი და სამი  ღილაკი. პირველ ღილაკზე დაკლიკებისას პარაგრაფების ტექსტის ფერი უნდა გახდეს
//  მწვანე, მეორეზე წითელი და მესამეზე ყვითელი.
//  4. შექმენით ობიექტი სახელად carInfo. მისი კუთვნილებები უნდა იყოს Brand, model, year, color, engine.  ასევე უნდა გქონდეთ
//  მეთოდი, რომელიც ყველა მოწოდებულ ინფორმაციას ერთ დიდ წინადადებაში გამოიტანს.

//  5. შექმენით რამდენიმე ობიექტი თქვენი საყვარელი ფილმების შესახებ. თითოეულში უნდა იყოს name, genre, release year კუთვნილებები.

//  6. შექმენით ობიექტი სახელად calculator. მასში ჩააშენეთ მიმატების, გამოკლების, გამრავლების, გაყოფის და ხარისხის მეთოდები. რაც 
// მთავარია, საბოლოო შედეგი უნდა დაიბეჭდოს კონსოლში.


// hw 1
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {

let p1Text = 'asdasdasd';
p1.textContent = p1Text;
p2.textContent = p1Text;
p3.textContent = p1Text;
});


// hw 2
const waveringP = document.getElementById('wavering-p');
const plusBtn = document.getElementById('plus-btn');
const deduBtn = document.getElementById('dedu-btn');
const resetBtn = document.getElementById('reset-btn');
let num1 = 1;
let num2 = 0;

plusBtn.addEventListener('click', function() {
    waveringP.textContent = num2 += 1
});

deduBtn.addEventListener('click', function() {
    waveringP.textContent = num2 -= 1;
})

resetBtn.addEventListener('click', function() {
    // aq vamateb iset logikas romelic 0 is shemtxvevashi amoagdebs rom
    // kontenti ukve daresetebulia.
    if(waveringP.textContent == 0) {
        alert('it was already reseted')
    }
    else {
    waveringP.textContent = 0;
    }

});

// hw3
const colorP1 = document.getElementById('colorP1');
const colorP2 = document.getElementById('colorP2');
const colorP3 = document.getElementById('colorP3');

const colorBtn1 = document.getElementById('colorBtn1');
const colorBtn2 = document.getElementById('colorBtn2');
const colorBtn3 = document.getElementById('colorBtn3');

colorBtn1.addEventListener('click', function() {
    colorP1.style.color = 'green';
})

colorBtn2.addEventListener('click', function() {
    colorP2.style.color = 'red';
})

colorBtn3.addEventListener('click', function() {
    colorP3.style.color = 'yellow'
});

// hw4
const carInfo = {
    brand: 'BMW',
    model:'e34',
    year: 1988,
    color: 'black',
    engine:'S38 straight-six',
    method() {
        console.log(`this is ${carInfo.brand} ${carInfo.model} ${carInfo.color}, came out in ${carInfo.year}, engine is: ${carInfo.engine}`)
    }

}

carInfo.method();


// hw5
const movie1 = {
   name: 'Harry potter',
   genre: 'fantastic',
   releaseDate: '2001-2010'
}

const movie2 = {
    name: 'The Godfather I',
    genre: 'Gangster',
    releaseDate: 1972
}

const movie3 = {
    name: 'ცისფერი მთები ანუ დაუჯერებელი ამბავი',
    genre: 'mkhatvruli filmi',
    releaseDate: 1984
};

// hw6
const calculator = {
    plus: 5 + 10,
    deduc: 10 -5,
    mult: 5 * 10,
    divis: 10 / 5
}

console.log(calculator);