
// Button function Cover ()
const cvrBtn = document.getElementById("cvrBtn");

cvrBtn.addEventListener("click", () => {
    let introWelcome = document.getElementById("introWelcome");
    introWelcome.classList.remove("h-0");
    introWelcome.classList.add("h-screen");
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