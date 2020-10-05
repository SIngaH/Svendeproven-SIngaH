document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------get token--------------------------------------- */
  let newToken = sessionStorage.getItem('newToken')
  let tokenTime = new Date(newToken)
  let current = new Date()

  if (Math.ceil((current - tokenTime) / 86400000) <= 0) {
    let tokenData = { username: 'admin', password: '1234' }
    fetch('http://localhost:4000/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenData),
    })
      .then((response) => response.json())
      .then((result) => {
        sessionStorage.setItem('theToken', result.token)
        sessionStorage.setItem('newToken', new Date(result.validUntil))
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  let myToken = sessionStorage.getItem('theToken')
  let saveUrl = sessionStorage.getItem('saveUrl')
  let postLI = document.querySelectorAll('.postLi')
  let deleteLI = document.querySelectorAll('.deleteLi')
  let postTitleContent = document.querySelector('#postForm .form-title-content')
  let postTitleContentH3 = document.querySelector(
    '#postForm .form-title-content h3'
  )
  let postVolunteers = document.querySelector('#postForm .form-volunteers')
  let postVolunteersH3 = document.querySelector('#postForm .form-volunteers h3')
  let postAnimals = document.querySelector('#postForm .form-animals')
  let postAnimalsH3 = document.querySelector('#postForm .form-animals h3')
  let endpoints = [
    'http://localhost:4000/api/v1/adoptsections/',
    'http://localhost:4000/api/v1/abouts/',
    'http://localhost:4000/api/v1/volunteers/',
    'http://localhost:4000/api/v1/animals/',
  ]
  for (let i = 0; i < postLI.length; i++) {
    postLI[i].addEventListener('click', () => {
      sessionStorage.setItem('saveUrl', endpoints[i])
      sessionStorage.setItem('index', i)
      deleteForm.style.display = 'none'
      if (i == 0) {
        postTitleContent.style.display = 'flex'
        postTitleContentH3.innerHTML = `Ændre i Adopt sektionerne`
        postVolunteers.style.display = 'none'
        postAnimals.style.display = 'none'
      } else if (i == 1) {
        postTitleContent.style.display = 'flex'
        postTitleContentH3.innerHTML = `Ændre i Abouts sektionerne`
        postVolunteers.style.display = 'none'
        postAnimals.style.display = 'none'
      } else if (i == 2) {
        postVolunteers.style.display = 'flex'
        postVolunteersH3.innerHTML = `Ændre i Volunteers sektionerne`
        postTitleContent.style.display = 'none'
        postAnimals.style.display = 'none'
      } else if (i == 3) {
        postAnimals.style.display = 'flex'
        postAnimalsH3.innerHTML = `Ændre i Animals sektionerne`
        postTitleContent.style.display = 'none'
        postVolunteers.style.display = 'none'
      }
    })
  }
  let deleteForm = document.querySelector('#deleteForm .form-delete')
  let deleteFormH3 = document.querySelector('#deleteForm .form-delete h3')

  for (let ind = 0; ind < deleteLI.length; ind++) {
    deleteLI[ind].addEventListener('click', () => {
      sessionStorage.setItem('saveUrl', endpoints[ind])
      sessionStorage.setItem('index', ind)
      postTitleContent.style.display = 'none'
      postVolunteers.style.display = 'none'
      postAnimals.style.display = 'none'
      deleteForm.style.display = 'flex'
      if (ind == 0) {
        deleteFormH3.innerHTML = `Slette i Adopt sektionerne`
      } else if (ind == 1) {
        deleteFormH3.innerHTML = `Slette i Abouts sektionerne`
      } else if (ind == 2) {
        deleteFormH3.innerHTML = `Slette i Volunteers sektionerne`
      } else if (ind == 3) {
        deleteFormH3.innerHTML = `Slette i Animals sektionerne`
      }
    })
  }
  /* ----------------------------------form validering---------------------------------- */
  let errorElement = document.querySelector(
    '.form-title-content .error-message'
  )
  let overskrift = document.querySelector(
    '.form-title-content .form__overskrift'
  )
  let textarea = document.querySelector('.form-title-content .form__comment')
  let border = 'solid 1px red'
  let borderGone = 'solid 1px #000'

  /* ----------------------------------title content---------------------------------- */
  postTitleContent.addEventListener('submit', (e) => {
    e.preventDefault()

    /*--------------------------overskrift--------------------------------- */
    if (overskrift.value === '' || overskrift.value == null) {
      errorElement.style.display = 'block'
      errorElement.innerHTML = 'Der mangler en overskrift'
      overskrift.focus()
      overskrift.style.border = border
      return false
    } else {
      overskrift.style.border = borderGone
    }

    /*-----------------------textarea-------------------------------------*/
    if (textarea.value === '' || textarea.value == null) {
      errorElement.style.display = 'block'
      errorElement.innerHTML = 'Der mangler brødtext'
      textarea.focus()
      textarea.style.border = border
      return false
    } else {
      textarea.style.border = borderGone
    }

    errorElement.style.display = 'block'

    if (postTitleContentH3.innerText.includes('Adopt')) {
      errorElement.innerHTML = 'Du har nu tilføjet til Adopt sektionerne'
    } else if (postTitleContentH3.innerText.includes('Abouts')) {
      errorElement.innerHTML = 'Du har nu tilføjet til Abouts sektionerne'
    }

    let data = {
      title: overskrift.value,
      content: textarea.value,
    }

    post(saveUrl, data)
    return false
  })

  /* ----------------------------------volunteers---------------------------------- */
  let title = document.querySelector('.form-volunteers .form__overskrift')
  let content = document.querySelector('.form-volunteers .form__comment')
  let VerrorElement = document.querySelector('.form-volunteers .error-message')
  postVolunteers.addEventListener('submit', (e) => {
    e.preventDefault()

    /*--------------------------overskrift--------------------------------- */
    if (title.value === '' || title.value == null) {
      VerrorElement.style.display = 'block'
      VerrorElement.innerHTML = 'Der mangler en overskrift'
      title.focus()
      title.style.border = border
      return false
    } else {
      title.style.border = borderGone
    }

    /*-----------------------textarea-------------------------------------*/
    if (content.value === '' || content.value == null) {
      VerrorElement.style.display = 'block'
      VerrorElement.innerHTML = 'Der mangler brødtext'
      content.focus()
      content.style.border = border
      return false
    } else {
      content.style.border = borderGone
    }

    VerrorElement.style.display = 'block'
    VerrorElement.innerHTML = 'Du har nu tilføjet til Volunteers sektionerne'

    let data = {
      title: title.value,
      content: content.value,
      extra: null,
    }

    post(saveUrl, data)
    return false
  })

  /* ----------------------------------animals---------------------------------- */
  let Atitle = document.querySelector('.form-animals .form__overskrift')
  let Acontent = document.querySelector('.form-animals .form__comment')
  let age = document.querySelector('.form-animals .form__age')
  let AerrorElement = document.querySelector('.form-animals .error-message')

  postAnimals.addEventListener('submit', (e) => {
    e.preventDefault()

    /*--------------------------overskrift--------------------------------- */
    if (Atitle.value === '' || Atitle.value == null) {
      AerrorElement.style.display = 'block'
      AerrorElement.innerHTML = 'Der mangler en overskrift'
      Atitle.focus()
      Atitle.style.border = border
      return false
    } else {
      Atitle.style.border = borderGone
    }

    /*--------------------------Age--------------------------------- */
    if (age.value === '' || age.value == null) {
      AerrorElement.style.display = 'block'
      AerrorElement.innerHTML = 'Der mangler en alder'
      age.focus()
      age.style.border = border
      return false
    } else {
      age.style.border = borderGone
    }
    if (isNaN(age.value)) {
      AerrorElement.style.display = 'block'
      AerrorElement.innerHTML = 'Alderen skal skrives i tal'
      age.focus()
      age.style.border = border
      return false
    } else {
      age.style.border = borderGone
    }

    /*-----------------------textarea-------------------------------------*/
    if (Acontent.value === '' || Acontent.value == null) {
      AerrorElement.style.display = 'block'
      AerrorElement.innerHTML = 'Der mangler brødtext'
      Acontent.focus()
      Acontent.style.border = border
      return false
    } else {
      Acontent.style.border = borderGone
    }

    AerrorElement.style.display = 'block'
    AerrorElement.innerHTML = 'Du har nu tilføjet til Animals sektionerne'

    let data = {
      title: Atitle.value,
      content: Acontent.value,
      age: age.value,
      extra: null,
    }

    post(saveUrl, data)
    return false
  })

  /*---------------------form validering - delete-----------------------*/
  /*---------------------title and content-----------------------*/

  let DelerrorElement = document.querySelector(
    '#deleteForm .form-delete .error-message'
  )
  let number = document.querySelector('#deleteForm .form-delete .form__number')
  deleteForm.addEventListener('submit', (e) => {
    e.preventDefault()

    /*-----------------------number-------------------------------------*/

    if (number.value === '' || number.value == null) {
      DelerrorElement.style.display = 'block'
      DelerrorElement.innerHTML = 'Hvilken sektion vil du slette?'
      number.focus()
      number.style.border = border
      return false
    } else {
      number.style.border = borderGone
    }
    if (isNaN(number.value)) {
      AerrorElement.style.display = 'block'
      AerrorElement.innerHTML = 'Alderen skal skrives i tal'
      number.focus()
      number.style.border = border
      return false
    } else {
      number.style.border = borderGone
    }

    DelerrorElement.style.display = 'block'

    sessionStorage.setItem('saveNumber', number.value)
    deleter(saveUrl, number.value)
    return false
  })
  /* ------------------- fetch post og delete ------------------------- */

  function post(url, fetchData) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: myToken,
        Authorization: 'Bearer ' + myToken,
      },
      body: JSON.stringify(fetchData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  function deleter(url, number) {
    fetch(url + number, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        token: myToken,
        Authorization: 'Bearer ' + myToken,
        username: 'admin',
        password: '1234',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
})
