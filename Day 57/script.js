const colorInp = document.getElementById('colorInp');
const widthInp = document.getElementById('widthInp');
const heightInp = document.getElementById('heightInp');
const textInp = document.getElementById('textInp');

// const form1 = document.getElementById('form1');
const form1Btn = document.getElementById('form1Btn');
const form1Div = document.getElementById('form1Div');

form1Btn.addEventListener('click', function() {
    form1Div.style.backgroundColor = colorInp.value;
    form1Div.style.width = widthInp.value + 'px';
    form1Div.style.height = heightInp.value + 'px';
    form1Div.textContent = textInp.value;
})

// hw2
const myInfo = {
     name: 'vato',
     lastname: 'kheladze',
     born: {
        year: 2009,
        month: 'octomber',
        date: 10
     },
     work: {
        job: 'web developer'
     }
}
console.log(myInfo);