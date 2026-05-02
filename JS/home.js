const contacts = document.querySelectorAll(".sticky");

contacts.forEach((contact) => {
  const bg = contact.querySelector(".bg");

  contact.addEventListener("mousemove", (e) => {
    const rect = contact.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    bg.style.transform = `translate(${distanceX * 0.5}px, ${distanceY * 0.5}px)`;
  });

  contact.addEventListener("mouseleave", () => {
    bg.style.transform = `translate(0, 0)`;
  });
});