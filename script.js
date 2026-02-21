// 'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const closeModal=document.querySelector('.close-modal')
const btnOpenModal=document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for(let i=0;i<btnOpenModal.length;i++){
    console.log(btnOpenModal[i].addEventListener('click',function(){
        console.log("Button clicked")
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    }));
}
closeModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
