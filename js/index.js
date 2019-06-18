// Your code goes here
let introHeader = document.querySelector('.intro h2');
console.log(introHeader);
introHeader.addEventListener('mouseover', smokeOut);

function smokeOut(){
  // index++, deg = index * (45/120), pos = index * (-200/120), blur= index*(20/120)
  //this.style.transform = `rotate(${deg}deg) translateY(${pos}px)`  
  //this.style.opacity = `${}`;
  //this.style.filter= `blur(${blur}px)`;
  // every 17 frames 120 times
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