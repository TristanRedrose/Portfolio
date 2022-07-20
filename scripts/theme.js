const themeButton = document.querySelectorAll(".theme-image");
const setTheme = document.getElementById("theme");
let theme = localStorage.getItem('theme');

if (theme !== "main-theme" || null ) {
    setTheme.className = "night-theme";
    imageSelect();
} else {
    setTheme.className = "main-theme";
    imageSelect();
}

themeButton.forEach(button => {
    button.addEventListener('click', function(){
        if (setTheme.className === "main-theme") {
            setTheme.className = "night-theme";
            imageSelect();
            localStorage.setItem('theme', 'night-theme');
        } else {
            setTheme.className = "main-theme";
            imageSelect();
            localStorage.setItem('theme', 'main-theme');
        }
    });
})

function imageSelect() {
    if (setTheme.className === "main-theme") {
        themeButton.forEach(button => {
            button.src = "images/night-mode.png";
        })
    } else {
        themeButton.forEach(button => {
            button.src = "images/day.png";
        })
    }
}