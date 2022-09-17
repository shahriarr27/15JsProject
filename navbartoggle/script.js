let toggleBtn = document.querySelector('.toggle-btn');

let navbar = document.querySelector('.navbar');

toggleBtn.addEventListener("click", function(){
  // if(navbar.classList.contains('navbar-collapse')){
  //   navbar.classList.remove('navbar-collapse')
  // }
  // else{
  //   navbar.classList.add('navbar-collapse')
  // }
  navbar.classList.toggle('navbar-collapse')
})