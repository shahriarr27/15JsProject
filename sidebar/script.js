let toggleBtn = document.querySelector('.toggle-btn');
let closeBtn = document.querySelector('.close-btn');
let navbar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click", function(){
  navbar.classList.toggle('active')
})
closeBtn.addEventListener("click", function(){
  navbar.classList.toggle('active')
})