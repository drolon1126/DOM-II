// Your code goes here
let introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('mouseenter', smokeOut, {once : true});

let introImage = document.querySelector('.intro img');
introImage.addEventListener('dblclick', runAway)


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