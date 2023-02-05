const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');
const card3 = document.querySelector('#card-3');

const active2 = document.querySelector('#active-2');
const active3 = document.querySelector('#active-3');
const active1 = document.querySelector('#active-1');

active2.addEventListener('click',()=>{
    card2.classList.add('active-card');
    active2.classList.remove('disabled-swipe-btn');
    card2.classList.remove('disabled-card');

    card3.classList.add('disabled-card');
    active3.classList.add('disabled-swipe-btn');
    card3.classList.remove('active-card');

    card1.classList.add('disabled-card');
    active1.classList.add('disabled-swipe-btn');
    card1.classList.remove('active-card');

});

active3.addEventListener('click', ()=>{
    card3.classList.add('active-card');
    card3.classList.remove('disabled-card')
    active3.classList.remove('disabled-swipe-btn');


    card2.classList.add('disabled-card');
    active2.classList.add('disabled-swipe-btn');
    card2.classList.remove('active-card');

    card1.classList.add('disabled-card');
    active1.classList.add('disabled-swipe-btn');
    card1.classList.remove('active-card')

});

active1.addEventListener('click',()=>{
    card1.classList.add('active-card');
    card1.classList.remove('disabled-card');
    active1.classList.remove('disabled-swipe-btn');

    card2.classList.add('disabled-card');
    card2.classList.remove('active-card');
    active2.classList.add('disabled-swipe-btn');

    card3.classList.add('disabled-card');
    active3.classList.add('disabled-swipe-btn');
    card3.classList.remove('active-card');
    
});

