// const btn = document.querySelector('.btn-mobile-nav')
// btn.addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('welcome')
//     if (btn.classList.contains('main-nav-link')) {
//         headerEl.classList.toggle("nav-open")

//     })



    const btn = document.querySelector('.btn-mobile-nav')
    const headerEl = document.querySelector('.header')
    btn.addEventListener('click', function () {
      headerEl.classList.toggle("nav-open")
    })
    