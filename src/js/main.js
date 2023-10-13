const nav = document.getElementById('nav');
const navlink = document.getElementById('navlink');

function navtoggle() {
    navlink.classList.toggle('py-4');
    navlink.classList.toggle('h-0');
    navlink.classList.add('bg-white');
}

window.onscroll = function() {
    if(window.pageYOffset > 85) {
        nav.classList.add('bg-white');
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('bg-white');
        nav.classList.remove('shadow');
    }
}