// sosial media ()
let ig = document.getElementById("ig");
let gh = document.getElementById("gh");
let wa = document.getElementById("wa");

ig.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/alifarknnbl/";
});
wa.addEventListener("click", () => {
    window.location.href = "https://wa.me/+62881024474785"
})

// Function Nav Button Active Event()
let btnNavR = document.getElementById("btnNavR");
btnNavR.addEventListener("click", () => {
    let navPage = document.getElementById("navPage");
    navPage.classList.toggle("backdrop-blur-[6px]");
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
        navR.classList.remove("translate-y-[-25px]", "opacity-0", "pointer-events-none");
    } else {
        navW.classList.remove("translate-y-[-25px]", "opacity-0");
        navR.classList.add("translate-y-[-25px]", "opacity-0", "pointer-events-none");
        navPage.classList.toggle("backdrop-blur-[6px]");
    }
});