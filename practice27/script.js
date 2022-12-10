const container = document.querySelector('#container');
const myButton = document.querySelector('#myButton');

element.textContent = 'Текст внутри контейнера';

myButton.textContent = 'Применить';

myButton.addEventListener('click', function(){
    text.textContent = 'Блок создан при клике на кнопку';
})

text.addEventListener('click', function(){
    text.style.color = 'red';
})
