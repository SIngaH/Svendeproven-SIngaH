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

  post(email.value, name.value)
  errorElement.style.display = 'block'
  return false
})

function post(theEmail, theName) {
  let data = { name: theName, email: theEmail }
  fetch('http://localhost:4000/api/v1/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkQy9QMmVlZnpJbFguRTJ2VXFqb0JLZU05dGg2djc5NkpDbzBKQnN5cmtJd090NXJ4WUEuVnEiLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoifSwiaWF0IjoxNjAxMzc1MDg1LCJleHAiOjE2MDEzNzg2ODV9.54PkfDXdSo4pM5LV72c0gaHjL81rnFV4jvvPcEbPIjE',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkdXlKQjU5OHpqQ0VpQno2cUY0UDlLLlhrUGRESXd5ajJjd1FXU1lRczNIbHY1TUZsbUxJTlciLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoifSwiaWF0IjoxNTg5NzQzNDI4LCJleHAiOjE1ODk3NDcwMjh9.RQlQN6Aj8Ypvso2B81fPLfGZ9Vj9YelqHLT9KKGFxqE',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)

      errorElement.innerHTML = 'Du er nu tilmeldt til vores nyhedsbrev'
      changeUrl()
    })
    .catch((error) => {
      console.error('Error:', error)
      //jeg får nogle gange error hvis jeg tilføjer noget to gange
      errorElement.innerHTML = 'Du er allerede tilmeldt til vores nyhedsbrev'
    })
}
function changeUrl() {
  console.log(window.location.href)
  window.location.href = '/kvitteringsside.html'
}
