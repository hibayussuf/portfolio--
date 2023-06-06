let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');




menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}











let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');




Window.onscroll = () =>{
    sections.foreach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height);{

            navLinks.foreach(linksa =>{
                linksa.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })



        }
        
    })
    

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



    menuIcon.classList.toggle('remove');
    navbar.classList.toggle('remove');


};




ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });






const typed = new Typed('.multiple-text',{
    strings:['Front End Developer', 'Web Developer'],
    typedSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true,



});
function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }
  