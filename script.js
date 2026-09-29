/* =========================================================
   DR TECNOLOGIA
   SCRIPT.JS
========================================================= */


/* =========================================================
   HEADER AO ROLAR
========================================================= */

const header = document.getElementById("header");

function updateHeader() {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   ANIMAÇÃO DOS ELEMENTOS AO ENTRAREM NA TELA
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const menu =
    document.getElementById("menu");

if (menuToggle && menu) {

    menuToggle.addEventListener(
        "click",
        () => {

            menu.classList.toggle("open");

        }
    );


    const menuLinks =
        document.querySelectorAll(".menu-link");

    menuLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove("open");

            }
        );

    });

}


/* =========================================================
   LINK ATIVO DO MENU
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navLinks =
    document.querySelectorAll(".menu-link");

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveMenu
);

updateActiveMenu();


/* =========================================================
   FECHAR MENU AO CLICAR FORA
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (!menu || !menuToggle) {
            return;
        }

        const clickedInsideMenu =
            menu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            menu.classList.remove("open");

        }

    }
);