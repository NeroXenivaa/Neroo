
// Button function Cover ()
const cvrBtn = document.getElementById("cvrBtn");

cvrBtn.addEventListener("click", () => {
    let introWelcome = document.getElementById("introWelcome");
    introWelcome.classList.remove("h-0");
    introWelcome.classList.add("h-screen");
})