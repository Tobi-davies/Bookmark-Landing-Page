const featureBtn = document.querySelectorAll('.feature-list');
const featureDisplay = document.querySelectorAll('.feature-display');
const dropdown = document.querySelectorAll('.pointer');
const questionBlock = document.querySelectorAll('.question');
const form = document.querySelector('form')
const input = document.getElementById('mail')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const mobile = document.querySelector('.mobile')
const body = document.querySelector('body');

featureBtn.forEach(btn => {
  btn.addEventListener('click', showBookmark)
})

dropdown.forEach(icon => {
  icon.addEventListener('click', showAnswer)
})

form.addEventListener('submit', checkMail)

burger.addEventListener('click', shownav)

close.addEventListener('click', closenav)

function showBookmark(e){
  const key = e.target
  const keyID = e.target.dataset.id
  
  key.classList.add('feature-border')
  document.getElementById(keyID).style.display = 'block'

  featureBtn.forEach(btn => {
    if(btn !== key) {
      btn.classList.remove('feature-border')
      btn.style.transition = 'none'
    }
  })

  featureDisplay.forEach(feature => {
     if(feature.id !== keyID){
       feature.style.display = 'none'
     }
  })
    
}


function showAnswer(e) {
  const question = e.currentTarget.parentElement.parentElement;

  question.classList.toggle('show-answer')

  questionBlock.forEach(block => {
    if(block !== question) {
      block.classList.remove('show-answer')
    }
  })

  e.preventDefault();
}


function checkMail(e){
    if(!validateEmail(input.value)) {
      form.classList.add('error')
    } else {
      form.classList.remove('error')
      input.value =''
    }
    
  e.preventDefault();
}


function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function shownav(){
  mobile.classList.add('display-nav')
  body.style.position = 'fixed';
}


function closenav(){
  mobile.classList.remove('display-nav')
  body.style.position = 'unset';
}