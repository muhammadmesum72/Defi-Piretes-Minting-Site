const menuBtn = document.getElementById('menu-icon')
const mobNav = document.getElementById('mob-nav')
const closeNavBtn = document.getElementById('close-nav')

function toggleNav() {
    mobNav.classList.remove('hidden')
    // if(mobNav.classList.contains('block')){
        menuBtn.classList.add('hidden')
    // }

    closeNavBtn.classList.remove('hidden')
    closeNavBtn.classList.add('block')
}

function closeNav() {
    mobNav.classList.add('hidden')
    closeNavBtn.classList.add('hidden')
    menuBtn.classList.remove('hidden')


}


menuBtn.addEventListener("click", toggleNav)
closeNavBtn.addEventListener('click', closeNav)