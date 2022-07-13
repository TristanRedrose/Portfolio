const pictureSelectors = document.querySelectorAll(".select-button")
const slides = document.querySelectorAll(".slide-image");

pictureSelectors.forEach(button => {
    button.addEventListener('click', function(){
        pictureSelectors.forEach(selector => {
            if (selector.className === "select-button checked") {
                selector.className = "select-button";
            }
        })
        slides.forEach((slide,index) => {
            if (slide.className === "slide-image active") {
                slide.className = "slide-image";
            }
            if (parseInt(button.dataset.id) === index) {
                slide.className = "slide-image active";
                button.className = "select-button checked";
            }
        })
    })
});