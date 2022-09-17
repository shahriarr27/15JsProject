var colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

let btn = document.getElementById('btn');
let colorCode = document.getElementById('color-code');

btn.onclick = function(){
  
  let hexcolor = "#";
  for(i=0; i<6; i++){
    hexcolor += colors[randomNumber()];
  }
  colorCode.innerHTML = hexcolor;
  document.body.style.backgroundColor = hexcolor;
}



function randomNumber(){
  return Math.floor(Math.random()* colors.length);
}