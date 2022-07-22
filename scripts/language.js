let language = {
    eng: {
        welcome1: "Welcome, my name is ",
        welcome2:"and i am a budding web developer",
        education: "Education and certificates",
        edu_text1: "Natural sciences and mathematics with a greater focus on mathematics.",
        edu_text2: "An introduction to the intellectual enterprises of computer science and the art of programming.",
        edu_text3: "Design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.",
        experience:"Experience",
        exp_text1:"Some of the ",
        exp_colortext:"technologies ",
        exp_text2:"i am familliar with:",
        projects:"Featured projects",
        proj1:"A website that provides users with a fast and simple way to set up their personal blog.",
        proj2:"A web application that allows users to browse popular movies and add them to their personal wishlist.",
        modal_button:"See more...",
        contact:"Contact",
        project_link:"Projects",
        education_link:"Education",
        contact_link:"Contact",
        top_link:"Back"
    },

    hr: {
        welcome1: "Pozdrav, moje ime je ",
        welcome2: "web developer u razvoju.",
        education: "Obrazovanje i certifikati",
        edu_text1: "Prirodne znanosti i matematika, s većim fokusom na matematiku.",
        edu_text2: "Uvod u intelektualni poduhvat informatičke znanosti i umijeće programiranja.",
        edu_text3: "Dizajn i implementacija web aplikacija koristeći Python, JavaScript, i SQL pomoću frameworkova kao Django, React, i Bootstrap.",
        experience:"Iskustvo",
        exp_text1:"Neke od ",
        exp_colortext:"tehnologija ",
        exp_text2:"sa kojima sam upoznat:",
        projects:"Istaknuti projekti",
        proj1:"Stranica koja omogučuje korisnicima brz i jednostavan način kreiranja vlastitog bloga.",
        proj2:"Web aplikacija za pregled liste popularnih filmove i dodavanje filmova na svoju listu želja",
        modal_button:"Vidi više...",
        contact:"Kontakt",
        project_link:"Projekti",
        education_link:"Obrazovanje",
        contact_link:"Kontakt",
        top_link:"Natrag"
    }
}

const languageButtons = document.querySelectorAll(".language");

function changeLanguage() {

    let languageSetting = localStorage.getItem("language");
    let lng = language.eng;

    if (window.location.hash === "#hr" || languageSetting === "hrvatski") {
        lng = language.hr

        languageButtons.forEach(button => {
            button.innerText = "hr";
        });
    } else {
        languageButtons.forEach(button => {
            button.innerText = "eng";
        })
    };

    welcome1.innerText = lng.welcome1;
    welcome2.innerText = lng.welcome2;
    educ.innerText = lng.education;
    edu_text1.innerText = lng.edu_text1;
    edu_text2.innerText = language.hr.edu_text2;
    edu_text3.innerText = lng.edu_text3;
    experience.innerText = lng.experience;
    exp_text1.innerText = lng.exp_text1;
    exp_colortext.innerText = lng.exp_colortext;
    exp_text2.innerText = lng.exp_text2;
    proj.innerText = lng.projects;
    proj1.innerText = lng.proj1;
    proj2.innerText = lng.proj2;
    contact_title.innerText = lng.contact;

    const modalButtons = document.querySelectorAll(".modal-link");
    modalButtons.forEach(element => {
        element.innerText = lng.modal_button;
    });

    const projectLinks = document.querySelectorAll(".project-link");
    projectLinks.forEach(link => {
        link.innerText = lng.project_link;
    });

    const educationLinks = document.querySelectorAll(".education-link");
    educationLinks.forEach(link => {
        link.innerText = lng.education_link;
    });

    const contactLinks = document.querySelectorAll(".contact-link");
    contactLinks.forEach(link => {
        link.innerText = lng.contact_link;
    });

    topLink.innerText = lng.top_link;
};

function setLanguage() {
    changeLanguage();
    languageButtons.forEach(button => {
        button.addEventListener('click', function(){
            if (button.innerText === "eng") {
                window.location.hash = "#hr";
                localStorage.setItem("language", "hrvatski");
                changeLanguage();
            } else {
                window.location.hash = "#eng";
                localStorage.setItem("language", "english");
                changeLanguage();
            }
        })
    })
};

setLanguage();




