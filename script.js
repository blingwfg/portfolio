
const toTop = document.querySelector('#to-top')
window.onscroll = function(){
    const header = document.querySelector('header')
    
    const fixNav = header.offsetTop;
    
    // console.log(window.scrollY);
    if(window.scrollY >  fixNav){
        header.classList.add('nav-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('nav-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}


const random = document.querySelector('.random')

setInterval(() => {
    let animate= ['bounce', 'spin','bounce', 'spin']

    animate.map(m => {
    random.classList.contains(`animate-${m}`) ? random.classList.remove(`animate-${m}`) : random.classList.add(`animate-${animate[Math.floor(Math.random() * animate.length)]}`)

    })

    


}, 3000);
const humberger = document.querySelector('#humberger')
const navmenu = document.querySelector('.nav-menu')

humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active')
    navmenu.classList.toggle('hidden')
})

window.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target != navmenu && e.target != humberger){
        humberger.classList.remove('humberger-active')
        navmenu.classList.add('hidden')
    }
})


const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')
darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark')
        localStorage.theme = 'dark'
    }else{
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
    
  }