

// Function Nav Button Active Event()
let btnNavR = document.getElementById("btnNavR");
btnNavR.addEventListener("click", () => {
    let mainPage = document.getElementById("mainPage");
    mainPage.classList.toggle("blur-[6px]");
});

// curved Desc ()
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let curve = document.getElementById("wave");
    let dept = Math.min(scroll * 0.2, 150);

    curve.setAttribute(
        "d",
        `M0,0 
            L1440,0 
            L1440,200 
            C1000,${200 - dept} 400,${200 - dept} 
            0,200 
            Z`
    );
});

// Function Nav scroll event () =>
window.addEventListener("scroll", () => {
    let navW = document.getElementById("navW");
    let navR = document.getElementById("navR");
    if (window.scrollY > 200) {
        // Hide Transition
        navW.classList.add("translate-y-[-25px]", "opacity-0");
        navR.classList.remove("translate-y-[-25px]", "opacity-0");
    } else {
        navW.classList.remove("translate-y-[-25px]", "opacity-0");
        navR.classList.add("translate-y-[-25px]", "opacity-0");
    }
});