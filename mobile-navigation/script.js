const imgs = document.querySelectorAll('.content')
const nav = document.querySelectorAll('nav ul li')

nav.forEach((navEl, idx) => {
    navEl.addEventListener('click', () => {
        hideContent()
        hideNav()

        navEl.classList.add('active')
        imgs[idx].classList.add('show')
    })
})

function hideContent() {
    imgs.forEach(img => img.classList.remove('show'))
}

function hideNav() {
  nav.forEach((navEl) => navEl.classList.remove("active"));
}