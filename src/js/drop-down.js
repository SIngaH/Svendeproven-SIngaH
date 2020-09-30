let dropDown = document.querySelector('#drop-down')
let navUl = document.querySelector('#nav ul')
console.log(dropDown)
console.log(navUl)
dropDown.addEventListener('click', () => {
  if (navUl.style.display === 'block') {
    navUl.style.display = 'none'
  } else {
    dropDown.style.transform = 'rotate(0deg)'
    navUl.style.display = 'block'
  }
})
