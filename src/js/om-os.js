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
/*
  <section>
    <h2>Om os</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      saepe quos consectetur obcaecati cupiditate consequuntur deserunt, dolores
      ipsa quisquam vero.
    </p>
  </section>
  <section>
    <h2>Dyr & mennesker</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel veritatis
      vero ad provident pariatur assumenda inventore voluptate ut. Accusamus
      esse a expedita neque natus non ipsum, consectetur autem laboriosam
      temporibus.
    </p>
    <p class="section1__second-p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel veritatis
      vero ad provident pariatur assumenda inventore voluptate ut. Accusamus
      esse a expedita neque natus non ipsum, consectetur autem laboriosam
      temporibus.
    </p>
  </section>
  <section class="section1__mad-og-forbrug">
    <h2>Mad & forbrug</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestias
      tenetur, illum error eum minima tempora non a architecto possimus
      inventore vero et voluptate? Ducimus harum laboriosam non nesciunt nam!
    </p>
    <p class="section1__second-p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel veritatis
      vero ad provident pariatur assumenda inventore voluptate ut. Accusamus
      esse a expedita neque natus non ipsum, consectetur autem laboriosam
      temporibus.
    </p>
  </section>
*/
