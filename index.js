










let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}

activeMenu();
window.addEventListener("scroll",activeMenu);


// sticy nabar

const header = document.querySelectorAll('header');
window.addEventListener('scroll',function() {
    header.classList.toggle("sticky",this.window.scrollY > 50)
    
})
