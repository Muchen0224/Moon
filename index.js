let starts = document.getElementById('starts'); 
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind'); 
let mountains_front = document.getElementById('mountains_front'); 
let text = document.getElementById('text');
let btn = document.getElementsByClassName('btn')[0];
let header = document.querySelector('header')

console.log(text,btn)

window.addEventListener('scroll',() => {
  let value = window.scrollY;
  starts.style.left = `${value*0.25}px`;
  moon.style.top = `${value*1.05}px`;
  mountains_behind.style.top = `${value*0.5}px`;
  mountains_front.style.top = `${value*0}px`;
  text.style.marginRight = `${value*4}px`;
  text.style.marginTop = `${value*1.5}px`;
  btn.style.marginTop = `${value*1.5}px`;
  header.style.top = `${value*0.5}px`;
})



