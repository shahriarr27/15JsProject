var reviews = [
  {
    id: 1,
    qoute: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, fuga. Door shall till explore but.",
    name: "Shahriar Ahmmed",
    desig: "Web Developer"
  },
  {
    id: 2,
    qoute: "Lits il a de mystérieux la extase a sincere, souris genoux mal gaze d'athlete. Et qu'un le éclairé souris. L'amour.",
    name: "Bill Gates",
    desig: "Software Developer"
  },
  {
    id: 3,
    qoute: "Flutter it that ebony perched in madam peering that name, of into fiery shadow my will floating get.",
    name: "John Doe",
    desig: "Digital Marketer"
  }
]

var currentRev = 0;
var qoute = document.querySelector('.qoute')
var auth = document.querySelector('.name')
var desig = document.querySelector('.desig')

var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

window.addEventListener("DOMContentLoaded", function(){
  showReview()
})

function showReview(){
  const item = reviews[currentRev];
  qoute.textContent = item.qoute;
  auth.textContent = item.name;
  desig.textContent = item.desig;
}

next.addEventListener("click", function(){
  currentRev++;
  if(currentRev > reviews.length-1){
    currentRev=0;
  }
  showReview()
})

prev.addEventListener("click", function(){
  currentRev--;
  if(currentRev < 0){
    currentRev= reviews.length-1;
  }
  showReview()
})
