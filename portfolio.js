const menuicon =document.querySelector('#menu-icon')

const navbar =document.querySelector('.navbar')
const navbg=document.querySelector('.nav-bg')
menuicon.addEventListener('click',()=>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
    navbg.classList.toggle('active')
})