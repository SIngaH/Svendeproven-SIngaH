document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:4000/api/v1/animals', {
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
      document.querySelector('.hvor-mange-dyr').innerHTML =
        result.length + ' dyr'
      result.forEach((dyr) => {
        let d = new Date(dyr.createdAt)
        function days_passed(previous) {
          let current = new Date()
          return Math.ceil((current - previous) / 86400000)
        }

        document.querySelector('#dyr-hos-os').innerHTML +=
          `
            <section id="et-dyr">
            <a href="et-dyr.html?id=` +
          dyr.id +
          `">
                <img itemprop="image"
                src="` +
          dyr.asset.url +
          `"
                alt="` +
          dyr.name +
          `"
                class="dyr-hos-os-img"
                />
                <div class="dyr-text">
                    <h5>` +
          dyr.name +
          `</h5>
                    <p>` +
          dyr.description +
          `</p>
                    <p class="et-dyr__grey">Været på internatet i ` +
          days_passed(d) +
          ` dage</p>
                </div>
            </a>
            </section>`
      })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
})
