document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:4000/api/v1/adoptsections/2', {
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
      document.querySelector('#dyr-i-nod').innerHTML =
        `
        <img itemprop="image" src="` +
        result.asset.url +
        `" alt="dyr i nød" id="dyr-i-nod-img" />
        <h4>` +
        result.title +
        `</h4>
        <p>` +
        result.content +
        `</p>
      `
    })
})
