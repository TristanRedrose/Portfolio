
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
})