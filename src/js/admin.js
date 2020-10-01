let form = document.querySelector('.form')
let errorElement = document.querySelector('.error-message')
let name = document.querySelector('.form__name')
let password = document.querySelector('.form_password')
let border = 'solid 1px red'
let borderGone = 'solid 1px #000'

form.addEventListener('submit', (e) => {
  e.preventDefault()

  /*--------------------------Name--------------------------------- */
  if (name.value === '' || name.value == null) {
    errorElement.style.display = 'block'
    errorElement.innerHTML = 'Du skal give et navn'
    name.focus()
    name.style.border = border
    return false
  } else {
    name.style.border = borderGone
  }

  /*----------------Password-----------------------*/
  if (password.value === '' || password.value == null) {
    errorElement.style.display = 'block'
    errorElement.innerHTML = 'Du skal give en adgangskode'
    password.focus()
    password.style.border = border
    return false
  } else {
    password.style.border = borderGone
  }
  getting(name.value, password.value)

  function getting(theName, thePassword) {
    fetch('http://localhost:4000/api/v1/users/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkQy9QMmVlZnpJbFguRTJ2VXFqb0JLZU05dGg2djc5NkpDbzBKQnN5cmtJd090NXJ4WUEuVnEiLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoifSwiaWF0IjoxNjAxMzc1MDg1LCJleHAiOjE2MDEzNzg2ODV9.54PkfDXdSo4pM5LV72c0gaHjL81rnFV4jvvPcEbPIjE',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (result) {
        if (result.username != theName) {
          errorElement.innerHTML = 'Brugernavnet er forkert'
        } else if (result.password != thePassword) {
          errorElement.innerHTML = 'Adgangskoden er forkert'
        } else if (
          result.username == theName ||
          result.password == thePassword
        ) {
          changeUrl()
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  function changeUrl() {
    window.location.href = '/administration.html'
  }
})
