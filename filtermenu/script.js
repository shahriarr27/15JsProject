let filterBtn = document.querySelectorAll('.filter-btn');

let filterCat = document.querySelectorAll('.menu-item');

//separate btns
filterBtn.forEach(function(btn){
  btn.addEventListener("click", function(e){
    //find btn filter-target attribute value
    let filterTarget = btn.dataset.filterTarget;
    //separate each menu-item
    filterCat.forEach(function(item){
      //find menu-item's data-filter attribute value
      let filterBy = item.dataset.filter;
      //find the parent of each item
      let itemCol = item.parentElement;
      //if btns value is all then show all items
      if(filterTarget == 'all'){
        itemCol.style.display="block";
      }
      //if btns value is equal to items filter value then show filtered items
      else if(filterTarget == filterBy){
        itemCol.style.display="block";
      }
      //if doesn't match with btn value hide items
      else{
        itemCol.style.display="none";
      }
    })

    //toggle btn active class
    filterBtn.forEach(function(active){
      if(active !== filterBtn){
        active.classList.remove('active');
      }
    })
    btn.classList.add('active');
  })
})

