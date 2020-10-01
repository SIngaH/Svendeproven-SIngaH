let dropDown = document.querySelector('#drop-down')
let navUl = document.querySelector('#nav ul')
dropDown.addEventListener('click', () => {
  if (navUl.style.display === 'block') {
    navUl.style.display = 'none'
    dropDown.style.transform = 'rotate(-90deg)'
  } else {
    dropDown.style.transform = 'rotate(0deg)'
    navUl.style.display = 'block'
  }
})
