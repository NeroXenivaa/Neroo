
// Button function Cover ()
const cvrBtn = document.getElementById("cvrBtn");

cvrBtn.addEventListener("click", () => {
    let introWelcome = document.getElementById("introWelcome");
    introWelcome.classList.remove("h-0");
    introWelcome.classList.add("h-[100vh]");
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

// Button function click SFX (Keywoard styles)
let Sfx1 = document.querySelectorAll(".Sfx1");
Sfx1.forEach((el) => {
    el.addEventListener("click", () => {
        let clickSfx = new Audio("./assets/./audio/./Click.mp3");
        clickSfx.play();
    });
});