let showBtn = document.querySelectorAll('.toggle-btn');
let titleBtn = document.querySelectorAll('.toggle-title');
let accordions = document.querySelectorAll('.accordion-item');

//via selector inside the element

accordions.forEach(function(accordion){
  let btn = accordion.querySelector('.toggle-btn');
  let titleBtn = accordion.querySelector('.toggle-title');
  btn.addEventListener("click", function(){

    accordions.forEach(function(item){
      let btn2 = item.querySelector('.toggle-btn');
      if(item !== accordion){
        item.classList.remove('show');
        btn2.innerHTML= "&plus;";
      }
    })

    accordion.classList.toggle('show');
    if(accordion.classList.contains('show')){
      btn.innerHTML = "&minus;";
    }
    else{
      btn.innerHTML = "&plus;";
    }
  })

  //toggle by title
  titleBtn.addEventListener("click", function(){

    accordions.forEach(function(item){
      let btn2 = item.querySelector('.toggle-btn');
      if(item !== accordion){
        item.classList.remove('show');
        btn2.innerHTML= "&plus;";
      }
    })

    accordion.classList.toggle('show');
    if(accordion.classList.contains('show')){
      btn.innerHTML = "&minus;";
    }
    else{
      btn.innerHTML = "&plus;";
    }
  })
})

//via traversing elements

// showBtn.forEach(function(btn){
//   btn.addEventListener("click", function(e){
//     let item = e.currentTarget.parentElement.parentElement;
//     item.classList.toggle('show');
//   })
// })

