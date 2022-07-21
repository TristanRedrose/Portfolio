document.addEventListener('scroll', function() {
    const stickyBar = document.querySelector(".sticky-navbar");
    const navBar= document.querySelector(".navbar")
    const height = navBar.offsetHeight - 1;

    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );

    if (distanceFromTop >= height) {
        stickyBar.className = "sticky-navbar active";
    } else {
        if (stickyBar.className === "sticky-navbar active") {
            stickyBar.className = "sticky-navbar";
        }
    }  
});

const educationLinks = document.querySelectorAll('.education-link');
const projectLinks = document.querySelectorAll('.project-link');
const contactLinks = document.querySelectorAll('.contact-link');
const topLink = document.getElementById('topLink')

educationLinks.forEach(link => {
    link.addEventListener('click', function(){
        let elem = document.getElementById('education');
        elem.scrollIntoView();
    })
})

projectLinks.forEach(link => {
    link.addEventListener('click', function(){
        let elem = document.getElementById('projects');
        elem.scrollIntoView();
    })
})

contactLinks.forEach(link => {
    link.addEventListener('click', function(){
        let elem = document.getElementById('contact');
        elem.scrollIntoView();
    })
})

topLink.addEventListener('click', function(){
    window.scrollTo(0,0);
})