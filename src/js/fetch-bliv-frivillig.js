document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:4000/api/v1/volunteers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkQy9QMmVlZnpJbFguRTJ2VXFqb0JLZU05dGg2djc5NkpDbzBKQnN5cmtJd090NXJ4WUEuVnEiLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE5OjI1OjM0LjQwNFoifSwiaWF0IjoxNjAxMzc1MDg1LCJleHAiOjE2MDEzNzg2ODV9.54PkfDXdSo4pM5LV72c0gaHjL81rnFV4jvvPcEbPIjE',
    },
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      let insertHere = document.querySelector('.bliv-frivillig-sectioner')
      let theLength = result.length
      let procent = 100 / theLength

      if (screen.width > 643) {
        insertHere.style.gridTemplateColumns =
          `repeat(` + theLength + `, ` + procent + `%)`
      } else {
        insertHere.style.gridTemplateRows =
          `repeat(` + theLength + `, ` + procent + `%)`
        insertHere.style.gridTemplateColumns = '100%'
      }
      result.forEach((res, index) => {
        let i = index + 1
        insertHere.innerHTML +=
          `
          <section>
            <h3><a href="frivillig.html?number=` +
          i +
          `">` +
          res.title +
          `</a></h3>
            <img itemprop="image" src="` +
          res.asset.url +
          `" alt="volunteer" />
            <p class="content">` +
          res.content +
          `</p>
            <p class="extra">` +
          res.extra +
          `</p>
          </section>
          `
        let extraElement = document.querySelectorAll('.extra')
        if (res.extra == null || res.extra == undefined || res.extra == '') {
          extraElement[index].style.display = 'none'
        }
        //use .content to add padding on the ones whitout extra
      })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
})
