document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:4000/api/v1/abouts', {
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
      result.forEach((res) => {
        document.querySelector('.section1').innerHTML +=
          `
          <section id="` +
          res.id +
          `">
            <h2>` +
          res.title +
          `</h2>
            <p>` +
          res.content +
          `</p>
          </section>
          `
      })
    })
})
