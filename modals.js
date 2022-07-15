const modalButtons = document.querySelectorAll(".modal-button");
const modal = document.querySelector(".modal");
const container = document.querySelector(".modal-container");


modalButtons.forEach(button => {
    button.addEventListener('click', function(){
        if (button.dataset.id === "inkwell") {
            modal.className = "modal active";
            container.innerHTML = `
            <div id="close-button">Return...</div>
            <h3 class="title-text">Inkwell</h3>
            <div class="modal-wrapper">
                <div class="slider">
                    <div class="project-images">
                        <img class="slide-image active" src="images/inkwell/Inkwell-1.png" alt="slide-image">
                        <img class="slide-image" src="images/inkwell/Inkwell-2.png" alt="slide-image">
                        <img class="slide-image" src="images/inkwell/Inkwell-3.png" alt="slide-image">
                        <img class="slide-image" src="images/inkwell/Inkwell-4.png" alt="slide-image">
                        <img class="slide-image" src="images/inkwell/Inkwell-5.png" alt="slide-image">
                    </div>
                    <div class="picture-select">
                        <div data-id="0" class="select-button checked"></div>
                        <div data-id="1" class="select-button"></div>
                        <div data-id="2" class="select-button"></div>
                        <div data-id="3" class="select-button"></div>
                        <div data-id="4" class="select-button"></div>
                    </div>
                </div>

                <div class="left-column">
                        <h4 class="title-text">About</h4>
                    <p>Inkwell is a website that provides users with a fast and simple way to set up their personal blog. 
                        Upon registering, the user can select "My blog" in the navbar which will take the user to the blog creation page, 
                        or if the user already has a blog, he will be taken to his blog page. Upon creating their blog, the user now has 
                        acces to the "New post" button which will take the user to the create post page. New posts will inherit the category 
                        of their respective blogs as their default category, allthough the user can select a different category for each post.<br>
                        A registered user can leave a comment under every post, has access to the edit/delete modal for his 
                        comments, and has access to the edit profile modal in his profile page. Unregistered users can view 
                        created blogs and posts but cannot leave comments.
                    </p>
                </div>

                <div class="right-column">
                    <h4 class="title-text">Technologies</h4>
                    <div id="project-skills">
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Javascript</li>
                            <li>Html/Css</li>
                        </ul>
                    </div>

                    <div class="link-wrapper">
                        <div class="button-area">
                            <img class="link-icon" src="images/icons/youtube.png" alt="slide-image">
                            <a id="video" href="https://youtu.be/6xEAaOjCIP4" target="_blank">Video</a>
                        </div>
                        <div class="button-area">
                            <img class="link-icon" src="images/icons/Inkwell (2).png" id="inkwell-icon" alt="slide-image">
                            <a id="page">Page</a>
                        </div>
                        <div class="button-area">
                            <img class="link-icon" src="images/icons/github.png" alt="slide-image">
                            <a id="code" href="https://github.com/TristanRedrose/Inkwell" target="_blank">Code</a>
                        </div>
                    </div>
                </div>
            </div>
            `;    
        }
        if (button.dataset.id === "movies") {
            modal.className = "modal active";
            container.innerHTML = `
            <div id="close-button">Return...</div>
            <h3 class="title-text">MyFavMovies</h3>
            <div class="modal-wrapper">
                <div class="slider">
                    <div class="project-images">
                        <img class="slide-image active" src="images/movies/movies-1.png" alt="slide-image">
                        <img class="slide-image" src="images/movies/movies-2.png" alt="slide-image">
                        <img class="slide-image" src="images/movies/movies-3.png" alt="slide-image">
                        <img class="slide-image" src="images/movies/movies-4.png" alt="slide-image">
                        <img class="slide-image" src="images/movies/movies-5.png" alt="slide-image">
                    </div>
                    <div class="picture-select">
                        <div data-id="0" class="select-button checked"></div>
                        <div data-id="1" class="select-button"></div>
                        <div data-id="2" class="select-button"></div>
                        <div data-id="3" class="select-button"></div>
                        <div data-id="4" class="select-button"></div>
                    </div>
                </div>

                <div class="left-column">
                        <h4 class="title-text">About</h4>
                    <p>Made primarily as a test app to practice working with Angular, as well as 
                        interacting with third party api-s and developing my own back-end with Node express.
                        Uses PostgreSQL database for storing users, and their wishlisted movies. <br>
                        Upon registering the user can view a list of TMDB-s top rated movies and add 
                        their selected movies to their own personal wishlist.
                    </p>
                </div>

                <div class="right-column">
                    <h4 class="title-text">Technologies</h4>
                    <div id="project-skills">
                        <ul>
                            <li>Angular</li>
                            <li>Javascript/Typescript</li>
                            <li>Html/Css</li>
                            <li>Node Express</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>

                    <div class="link-wrapper">
                        <div class="button-area">
                            <img class="link-icon" src="images/icons/youtube.png" alt="slide-image">
                            <a id="video" href="https://youtu.be/6xEAaOjCIP4" target="_blank">Video</a>
                        </div>
                        <div class="button-area">
                            <img class="link-icon" src="images/icons/MyFav.png" id="inkwell-icon" alt="slide-image">
                            <a id="page">Page</a>
                        </div>
                        <div class="button-area">
                            <img class="link-icon" src="images/icons/github.png" alt="slide-image">
                            <a id="code" href="https://github.com/TristanRedrose/Inkwell" target="_blank">Code</a>
                        </div>
                    </div>
                </div>
            </div>
            `;    
        }
        container.className = "modal-container active";
        imageSlider();
        const closeButton = container.querySelector("#close-button");
        closeButton.addEventListener('click', closeModal)
        modal.addEventListener('click', closeModal)
    })
})

function closeModal() {
    if (modal.className === "modal active") {
        container.innerHTML=``;
        container.className = "modal-container"
        modal.className = "modal";
    }
}

function imageSlider() {
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
}
