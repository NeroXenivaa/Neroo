
// Button function Cover ()
const cvrBtn = document.getElementById("cvrBtn");

cvrBtn.addEventListener("click", () => {
    let introWelcome = document.getElementById("introWelcome");
    introWelcome.classList.remove("w-0", "h-0");
    introWelcome.classList.add("w-full", "h-screen");
})