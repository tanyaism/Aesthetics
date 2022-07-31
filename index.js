const panels=document.querySelectorAll('.panel')

panels.forEach(panel=>{
  panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(panel=>{
    panel.classList.remove('active')
  })
}

const ratings=document.querySelectorAll('.rating')
const feedback=document.querySelector('.feedback')


  feedback.addEventListener('click',e=>{
  if(e.target.parentNode.classList.contains('rating')){
    removeActive()
    e.target.parentNode.classList.add('active')
    feedback.innerHTML="♥<br><strong>Thank You</strong>"
  }
})

function removeActive(){
  for(let i=0;i<ratings.length;i++){
    ratings[i].classList.remove('active')
  }
}
