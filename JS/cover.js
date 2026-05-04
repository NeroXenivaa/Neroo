
// Button function Cover () show IntroWelcome
const cvrBtn = document.getElementById("cvrBtn");

cvrBtn.addEventListener("click", () => {
    let introWelcome = document.getElementById("introWelcome");
    introWelcome.classList.remove("h-0");
    introWelcome.classList.add("h-[100vh]");
    // After 4s Page FadeOut
    setTimeout(() => {
        introWelcome.classList.add("h-0");
    }, 4000);
});

// Button Music Function ()
const cvrToggleMusic = document.getElementById("cvrToggleMusic");

cvrToggleMusic.addEventListener("click", () => {
    let musicD = document.getElementById("musicD");
    if (musicD.paused) {
        musicD.play();
    } else {
        musicD.pause();
    }
})

// Button function click SFX (Keywoard styles) #Sfx1 Class
let Sfx1 = document.querySelectorAll(".Sfx1");
Sfx1.forEach((el) => {
    el.addEventListener("click", () => {
        let clickSfx = new Audio("./assets/./audio/./Click.mp3");
        clickSfx.play();
    });
});