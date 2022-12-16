const viewMore = document.getElementById('view-more')
const humurgerMenu = document.getElementById('humurger-menu')
const blogs = document.getElementsByClassName('blog')


viewMore.addEventListener('click', function (e) {
    e.preventDefault()
    for (let blog of blogs) {
        blog.classList.remove('hidden')
    }
})

humurgerMenu.addEventListener('click', function () {
    const navElements = document.getElementById('nav-elements')
    navElements.classList.toggle('hide')
})