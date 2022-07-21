const themeButton = document.querySelectorAll(".theme-image");
const setTheme = document.getElementById("theme");
let theme = localStorage.getItem('theme');
console.log(theme)

if (theme === "night-theme" || theme === null ) {
    setTheme.className = "night-theme";
    imageSelect();
} else {
    setTheme.className = "light-theme";
    imageSelect();
}

themeButton.forEach(button => {
    button.addEventListener('click', function(){
        if (setTheme.className === "light-theme") {
            setTheme.className = "night-theme";
            imageSelect();
            localStorage.setItem('theme', 'night-theme');
        } else {
            setTheme.className = "light-theme";
            imageSelect();
            localStorage.setItem('theme', 'light-theme');
        }
    });
})

function imageSelect() {
    if (setTheme.className === "light-theme") {
        themeButton.forEach(button => {
            button.src = "images/night-mode.png";
        })
    } else {
        themeButton.forEach(button => {
            button.src = "images/day.png";
        })
    }
}