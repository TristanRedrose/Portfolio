const themeButton = document.getElementById("theme-selector");
const setTheme = document.getElementById("theme");
let theme = localStorage.getItem('theme');

if (theme !== "main-theme" || null ) {
    setTheme.className = "night-theme";
    imageSelect();
} else {
    setTheme.className = "main-theme";
    imageSelect();
}

themeButton.addEventListener('click', function(){
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

function imageSelect() {
    if (setTheme.className === "main-theme") {
        themeButton.src = "images/night-mode.png";
    } else {
        themeButton.src = "images/day.png";
    }
}