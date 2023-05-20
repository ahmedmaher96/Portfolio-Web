// Setting Up
let title = document.getElementById("title")
let hill1 = document.getElementById("hill1")
let hill4 = document.getElementById("hill4")
let hill5 = document.getElementById("hill5")
let leaf = document.getElementById("leaf")
let menuToggle = document.querySelector('.menuToggle')
let rotMenu = document.querySelector('.rotMenu')

// Parallex using scrolling
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (value < 750) {
        title.style.marginTop = value * 2.5 + 'px'
        leaf.style.top = value * -1.5 + 'px'
        leaf.style.left = value * 1.5 + 'px'
        hill5.style.left = value * 1.5 + 'px'
        hill4.style.left = value * -1.5 + 'px'
        hill1.style.top = value * 1 + 'px'
    }
})

// Portfolio Toggle
menuToggle.onclick = function(){
    rotMenu.classList.toggle('active')
}
