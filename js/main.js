
document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const topnav = document.querySelector(".topnav");
    const desktopSize = window.matchMedia("(min-width: 90rem)");

    const elements = [
        { name: hamburger, prop: "is_active" },
        { name: document.querySelector(".hero"), prop: "is_black" },
        { name: document.querySelector(".hero__header"), prop: "is_hidden" },
        { name: topnav, prop: "is_hidden" }
    ]

    const toggleProperty = function () {
        for (const obj of elements) {
            obj.name.classList.toggle(obj.prop);
        }
    }

    function throttle(fn, delay) {
        let isThr = false;

        return function (...args) {
            if (!isThr) {
                fn.apply(this, args);
                isThr = true;

                setTimeout(() => {
                    isThr = false;
                }, delay);
            }
        };
    }

    //prevents small/medium screen black design on larger screens 
    if (!desktopSize.matches) {
        if (hamburger) {
            hamburger.addEventListener("click", toggleProperty);
        }
    }
    
    //throttle function to avoid performance issues on window resize
    window.addEventListener("resize", throttle(() => {

        if (desktopSize.matches) {
            if (topnav.classList.contains("text_preset_5")) {
                topnav.classList.replace("text_preset_5", "text_preset_6");
            }
        } else {
            if (topnav.classList.contains("text_preset_6")) {
                topnav.classList.replace("text_preset_6", "text_preset_5");
            }
        }
    }), 300);
})