document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');

    if (startButton) {
        // --- Magnetic Button Effect ---
        startButton.addEventListener('mousemove', (e) => {
            const rect = startButton.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Move the button towards the cursor
            startButton.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            startButton.children[0].style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`; // Move text less
        });

        startButton.addEventListener('mouseleave', () => {
            // Reset button and text position
            startButton.style.transform = '';
            startButton.children[0].style.transform = '';
        });
    }
});