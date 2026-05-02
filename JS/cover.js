// < Dynamic floatingg particles >
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 45 : 85;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size 8px and 2px
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        // Random position horizontal
        particle.style.left = `${Math.random() * 100}%`
        // Random animation duration between 6s and 18s
        const duration = Math.random() * 12 + 6;
        particle.style.animationDuration = `${duration}s`;
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        // Random opacity variation
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        // Random glow color
        const colors = ['rgba(139, 92, 246, 0.3)', 'rgba(192, 132, 252, 0.2)', 'rgba(255, 255, 255, 0.15)'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        particlesContainer.appendChild(particle);
    };
}

// Generate particles on load
createParticles();

// Adjust part