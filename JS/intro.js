// Explore Button interect
const VarCvrExBtn = document.getElementById("cvrExBtn");
const cvrPage = document.getElementById("cvrPage")
const introPage = document.getElementById("introPage");
const VarCvrTitleSetFadeOut = document.getElementById("cvrSetFadeOut1");
const VarCvrTaglineSetFadeOut = document.getElementById("cvrSetFadeOut2");
const introMusic1 = document.getElementById("introMusic1")

VarCvrExBtn.addEventListener("click", function () {
    introPage.classList.add("Active");
    VarCvrTitleSetFadeOut.classList.add("fadeOut");
    VarCvrTaglineSetFadeOut.classList.add("fadeOut");
    VarCvrExBtn.classList.add("fadeOut");
    // play music
    introMusic1.play();
    
    // set time function
    setTimeout(() => {
        cvrPage.style.display = "none";
    }, 4000);

    // set time by audio
    function trggrMusic() {
        const mscTime = introMusic1.currentTime;
        const introBase = document.getElementById("introBase");

        if (mscTime > 15.5 && mscTime < 15.6) {
            introBase.classList.add("fadeOut");
            // change title
            document.title = "Neroo - universe | Home";
        }
        const homePage = document.getElementById("homePage")
        if (mscTime > 15.5 && mscTime < 15.6) {
            homePage.style.display = "flex";
        }
        if (mscTime > 14 && mscTime < 14.1) {
            introBase.style.filter = "invert(1)";
        }
        const txtHallo = document.getElementById("txtHallo");
        if (mscTime > 8.5  && mscTime < 8.6) {
            txtHallo.style.opacity = "1";
        }
        if (mscTime > 17 && mscTime < 17.1) {
            introBase.style.display = "none";
        }
        requestAnimationFrame(trggrMusic);
    }
    trggrMusic();

    // change title
    document.title = "Neroo - universe | Intro";
});