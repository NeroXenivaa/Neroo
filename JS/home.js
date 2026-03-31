
// curved Desc
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    let curve = document.getElementById("wave");

    let dept = Math.min(scroll *0.2, 150);

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

