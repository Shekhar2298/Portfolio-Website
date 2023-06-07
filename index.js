const pro=document.getElementById('topic')
let colorchange=function(){
    pro.style.color='green'
}
pro.onmousemove=colorchange;

const about=document.getElementById('abtme')
let aboutcolor=function(){
    about.style.color='red'
}
about.onmouseover=aboutcolor;


document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction);


document.getElementById("myDIV").addEventListener("transitionend", myFunction);

function myFunction() {
  this.innerHTML = "transitionend event occured - The transition has completed";
  this.style.backgroundColor = "pink";
}
const introtxt=document.getElementById('txt')
let introcolor=function(){
  introtxt.style.color="green"
  introtxt.style.animationTimingFunction='red'
}

introtxt.onmousemove=introcolor