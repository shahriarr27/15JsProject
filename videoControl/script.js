let ctrBtn = document.querySelector('.ctr-btn');

let video = document.getElementById('myVideo');

ctrBtn.addEventListener("click", function(){
  if(video.paused){
    video.play();
    ctrBtn.innerHTML = "Pause";
    ctrBtn.classList.remove("active");
  }
  else{
    video.pause();
    ctrBtn.innerHTML = "Play";
    ctrBtn.classList.add("active");
  }
  console.log(video.paused);
})