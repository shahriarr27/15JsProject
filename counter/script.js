// let decBtn = document.getElementById('decBtn');
// let incBtn = document.getElementById('incBtn');
// let resetBtn = document.getElementById('resetBtn');
// let counter = document.getElementById('count-number');
// let count = 0;

// decBtn.onclick = function(){
//   count--;
//   counter.innerHTML = count;
//   if(count<0){
//     counter.style.color = "red";
//   }
//   if(count==0){
//     counter.style.color = "black";
//   }
// }

// resetBtn.onclick = function(){
//   count = 0;
//   counter.innerHTML = count;
//   if(count==0){
//     counter.style.color = "black";
//   }
// }

// incBtn.onclick = function(){
//   count++;
//   counter.innerHTML = count;
//   if(count>0){
//     counter.style.color = "green";
//   }
//   if(count==0){
//     counter.style.color = "black";
//   }
// }


//******************************//

let counter = document.getElementById('count-number');
let btn = document.querySelectorAll('.btn');
var count = 0;
btn.forEach(function(btn){
  btn.addEventListener("click", function(e){
    var getBtn = e.currentTarget.classList;
    if(getBtn.contains('decrease')){
      count--;
    }
    if(getBtn.contains('reset')){
      count= 0;
    }
    if(getBtn.contains('increase')){
      count++;
    }
    if(count<0){
      counter.style.color = "red"
    }
    if(count>0){
      counter.style.color = "green"
    }
    if(count==0){
      counter.style.color = "black"
    }
    counter.innerHTML = count;
  })

})