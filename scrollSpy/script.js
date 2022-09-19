let navbar = document.querySelector('.navbar-wrapper');
let preloader = document.querySelector('.preloader');

let navHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', function(){
  let scrollHeight = window.scrollY;

  if(scrollHeight>navHeight){
    navbar.classList.add('sticky-nav');
  }
  else{
    navbar.classList.remove('sticky-nav');
  }
})

//preloader
window.addEventListener('load', function(){
  preloader.classList.add('hide-preloader')
})


//navbar collapse
let toggleBtn = document.querySelector('.toggle-btn');
let navbarContainer = document.querySelector('.links-container');
let navbarCol = document.querySelector('.navbar');


toggleBtn.addEventListener('click',function(){
  let navbarHeight = navbarCol.getBoundingClientRect().height;
  let containerHeight = navbarContainer.getBoundingClientRect().height;

  navbarContainer.classList.toggle('navbar-collapse');
  
  if(containerHeight === 0){
   navbarContainer.style.height = `${navbarHeight}px`;
  }
  else{
    navbarContainer.style.height = 0;
  }
})


//scroll to section

const links = document.querySelectorAll('.nav-links');

links.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetedId = link.getAttribute('href').slice(1);
    const section = document.getElementById(targetedId);

    const secPos = section.offsetTop;
    console.log(secPos);
    window.scrollTo({
      left: 0,
      top: secPos - navHeight,
    });
    navbarContainer.style.height=0;
  })
})