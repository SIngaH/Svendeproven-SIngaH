document.addEventListener('DOMContentLoaded', () => {
  let postLI = document.querySelectorAll('.postLi')
  let deleteLI = document.querySelectorAll('.deleteLi')
  let saveUrl = sessionStorage.getItem('saveUrl')
  let currentIndex = sessionStorage.getItem('index')
  let postTitleContent = document.querySelector('#postForm .form-title-content')
  let postTitleContentH3 = document.querySelector(
    '#postForm .form-title-content h3'
  )
  let postVolunteers = document.querySelector('#postForm .form-volunteers')
  let postVolunteersH3 = document.querySelector('#postForm .form-volunteers h3')
  let postAnimals = document.querySelector('#postForm .form-animals')
  let postAnimalsH3 = document.querySelector('#postForm .form-animals h3')
  let endpoints = [
    'http://localhost:4000/api/v1/adoptsections',
    'http://localhost:4000/api/v1/abouts',
    'http://localhost:4000/api/v1/volunteers',
    'http://localhost:4000/api/v1/animals',
  ]
  for (let i = 0; i < postLI.length; i++) {
    postLI[i].addEventListener('click', () => {
      sessionStorage.setItem('saveUrl', endpoints[i])
      sessionStorage.setItem('index', i)
      deleteTitleContent.style.display = 'none'
      deleteVolunteers.style.display = 'none'
      deleteAnimals.style.display = 'none'
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

  let deleteTitleContentH3 = document.querySelector(
    '#deleteForm .form-title-content h3'
  )
  let deleteTitleContent = document.querySelector(
    '#deleteForm .form-title-content'
  )
  let deleteVolunteers = document.querySelector('#deleteForm .form-volunteers')
  let deleteVolunteersH3 = document.querySelector(
    '#deleteForm .form-volunteers h3'
  )
  let deleteAnimals = document.querySelector('#deleteForm .form-animals')
  let deleteAnimalsH3 = document.querySelector('#deleteForm .form-animals h3')

  for (let ind = 0; ind < deleteLI.length; ind++) {
    deleteLI[ind].addEventListener('click', () => {
      sessionStorage.setItem('saveUrl', endpoints[ind])
      sessionStorage.setItem('index', ind)
      postTitleContent.style.display = 'none'
      postVolunteers.style.display = 'none'
      postAnimals.style.display = 'none'
      if (ind == 0) {
        deleteTitleContent.style.display = 'flex'
        deleteTitleContentH3.innerHTML = `Slette i Adopt sektionerne`
        deleteVolunteers.style.display = 'none'
        deleteAnimals.style.display = 'none'
      } else if (ind == 1) {
        deleteTitleContent.style.display = 'flex'
        deleteTitleContentH3.innerHTML = `Slette i Abouts sektionerne`
        deleteVolunteers.style.display = 'none'
        deleteAnimals.style.display = 'none'
      } else if (ind == 2) {
        deleteVolunteers.style.display = 'flex'
        deleteVolunteersH3.innerHTML = `Slette i Volunteers sektionerne`
        deleteTitleContent.style.display = 'none'
        deleteAnimals.style.display = 'none'
      } else if (ind == 3) {
        deleteAnimals.style.display = 'flex'
        deleteAnimalsH3.innerHTML = `Slette i Animals sektionerne`
        deleteTitleContent.style.display = 'none'
        deleteVolunteers.style.display = 'none'
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

    let theIndex = currentIndex++
    let data = {
      title: overskrift.value,
      content: textarea.value,
      AssetId: theIndex,
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

    let theIndex = currentIndex++
    let data = {
      title: title.value,
      content: content.value,
      extra: null,
      AssetId: theIndex,
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

    let theIndex = currentIndex++
    let data = {
      title: Atitle.value,
      content: Acontent.value,
      age: age.value,
      extra: null,
      AssetId: theIndex,
    }

    post(saveUrl, data)
    return false
  })
  /* ------------------- fetch post og delete ------------------------- */
  function post(url, data) {
    console.log(url)
    console.log(data)
  }

  function deleter(url, data) {
    console.log(url)
    console.log(data)
  }
})
