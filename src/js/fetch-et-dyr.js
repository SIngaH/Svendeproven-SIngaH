document.addEventListener('DOMContentLoaded', () => {
  let params = new URLSearchParams(document.location.search)
  let id = params.get('id')
  let main = document.querySelector('main')
  fetch('http://localhost:4000/api/v1/animals/' + id, {
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
      let d = new Date(result.createdAt)
      function days_passed(dt) {
        let current = new Date()
        let previous = new Date(dt.getTime())

        return Math.ceil((current - previous + 1) / 86400000)
      }
      main.innerHTML =
        `<article>
        <img itemprop="image" src="` +
        result.asset.url +
        `" alt="` +
        result.name +
        `">
        <h3>` +
        result.name +
        `</h3>
        <div class="et-dyr-text">
                <p>Været på internatet i ` +
        days_passed(d) +
        ` dage</p>
                <p>` +
        result.name +
        ` is ` +
        result.age +
        ` years old</p>
                <p>` +
        result.description +
        `</p>
            </div>
        </article>
        `
    })
    .catch((error) => {
      console.error('Error:', error)
    })
})
