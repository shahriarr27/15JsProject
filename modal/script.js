let modalBtn = document.querySelector('.modal-btn');
let closeBtn = document.querySelector('.close-btn');
let modal = document.querySelector('.modal');

modalBtn.addEventListener("click", function(){
  modal.classList.add('show-modal')
})
closeBtn.addEventListener("click", function(){
  modal.classList.remove('show-modal')
})