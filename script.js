'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnclosemodal = document.querySelector('.close-modal');
const btnsopenmodal = document.querySelectorAll('.show-modal');
console.log(btnsopenmodal);

const openmodal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsopenmodal.length; i++)
  btnsopenmodal[i].addEventListener('click', openmodal);

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnclosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);
document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'escape') ;
  if(!modal.classList.contains("hidden")){
    closemodal()
  }
});
