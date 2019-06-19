// Your code goes here
let introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('mouseenter', smokeOut, {once : true});

let body = document.querySelector('body')

let image = document.querySelectorAll('img');
image[0].addEventListener('dblclick', runAway);

let introP = document.querySelector('.intro p');
window.addEventListener('scroll', changeColor);

let home = document.querySelector('.home');

home.addEventListener('click',e=>{home.style.color="purple"});

for(let i=1;i<4;i++){
  image[i].addEventListener('click',e=>{e.stopPropagation(); explode(e.target)}, {once : true});
}

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
  })
})

let buttons = document.querySelectorAll('.btn');
buttons.forEach(link=>{
  link.addEventListener('click', e=>{
    e.stopPropagation();
    if(home.style.fontStyle!=='italic'){
      home.style.fontStyle = 'italic';
    } else{
      home.style.fontStyle = 'normal';
    }
  })
})


function smokeOut(){
 
  let count = 0;
  let ani = setInterval(()=>{animate(this)},33);

  function animate(e){
    let deg = count * (45/120);
    let pos = count * (-200/120);
    let opa = 1 - (count * (1/120));
    let blur = count * (20/120);
    if(count === 120){
      clearInterval(ani);
    } else{
      count++;
      e.style.transform = `rotate(${deg}deg) translateY(${pos}px)`  
      e.style.opacity = `${opa}`;
      e.style.filter= `blur(${blur}px)`;
    }

  }
}

function runAway(){
  let count = 0;
  let ani = setInterval(()=>{animate(this)},16);

  function animate(e){
    let pos = count * (1200/60);
    if(count === 120){
      clearInterval(ani);
    } else{
      count++;
      e.style.transform = `translateX(${pos}px)`  
    }

  }
}

function changeColor(){
  body.style.backgroundColor= `hsl(${window.scrollY},100%, 50%)`;
}

function explode(e){
  
  let count = 0;
  let ani = setInterval(()=>{animate(e)},16);

  function animate(e){
    let opa = 1 - (count * (1/60));
    if(count === 60){
      e.style.display = 'none';
      clearInterval(ani);
    } else{
      count++;
      e.style.opacity = `${opa}`;
      e.style.transform = `scale(${count * 5})`;
    }
  }
}