
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
        cvrToggleMusic.classList.remove("fa-music-note");
        cvrToggleMusic.classList.add("fa-music-note-slash");
    } else {
        musicD.pause();
        cvrToggleMusic.classList.remove("fa-music-note-slash");
        cvrToggleMusic.classList.add("fa-music-note");
    }
})