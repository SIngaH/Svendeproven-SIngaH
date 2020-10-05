let params = new URLSearchParams(document.location.search)
let afmeld = params.get('afmeld')
let headline = document.querySelector('.tilmeld_afmeld')
if (afmeld == 'true') {
  headline.innerHTML = `Her for neden kan du afmelde nyhedsbrevet`
}
let form = document.querySelector('.form')
let errorElement = document.querySelector('.error-message')
let name = document.querySelector('.form__name')
let email = document.querySelector('.form__email')
let border = 'solid 1px red'
let borderGone = 'solid 1px #000'

form.addEventListener('submit', (e) => {
  e.preventDefault()
  /*--------------------------Name--------------------------------- */
  if (name.value === '' || name.value == null) {
    errorElement.style.display = 'block'
    errorElement.innerHTML = 'Du skal give os et navn'
    name.focus()
    name.style.border = border
    return false
  } else {
    name.style.border = borderGone
  }
  /*--------------------------Email--------------------------------- */
  const se = /\S+@\S+\.\S+/
  if (email.value === '' || email.value == null) {
    errorElement.style.display = 'block'
    errorElement.innerHTML = 'Du skal give os en email adresse'
    email.focus()
    email.style.border = border
    return false
  } else {
    email.style.border = borderGone
  }
  if (se.test(email.value) == false) {
    errorElement.style.display = 'block'
    errorElement.innerHTML = 'Du skal give os en gyldig email adresse'
    email.focus()
    email.style.border = border
    return false
  } else {
    email.style.border = borderGone
  }

  deleteThis(email.value, name.value)
  errorElement.style.display = 'block'
  return false
})

function deleteThis(theEmail, theName) {
  let data = { name: theName, email: theEmail }
  fetch('http://localhost:4000/api/v1/subscribers/' + theEmail, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkQy9QMmVlZnpJbFguRTJ2VXFqb0JLZU05dGg2djc5NkpDbzBKQnN5cmtJd090NXJ4WUEuVnEiLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoifSwiaWF0IjoxNjAxMzc1MDg1LCJleHAiOjE2MDEzNzg2ODV9.54PkfDXdSo4pM5LV72c0gaHjL81rnFV4jvvPcEbPIjE',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
      errorElement.innerHTML =
        'Nu er du ikke længere tilmeldt til cores nyhesbrev'
    })
    .catch((error) => {
      console.error('Error:', error)
      console.log('Den siger error men den sletter brugeren')
      errorElement.innerHTML =
        'Nu er du ikke længere tilmeldt til cores nyhesbrev'
    })
}
