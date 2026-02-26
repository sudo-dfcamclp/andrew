// filepath: c:\xampp\htdocs\web-site\journey.html (inline script)
        const images = [
            "pixel1.png",
            "pixel2.png",
            "pixel3.png"
        ];
        let current = 0;
        const img = document.getElementById('journeyImg');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const eightbitText = document.querySelector('.eightbit-text');

        function updateView() {
            img.src = images[current];
            prevBtn.style.display = current === 0 ? 'none' : 'inline-flex';
            nextBtn.style.display = 'inline-flex';

            // Change message on last image
            if (current === images.length - 1) {
                if (eightbitText) {
                    eightbitText.textContent = "Every step in this journey is progress. Happy MonthSarry Iloveyousomuch";
                }
            } else if (eightbitText) {
                eightbitText.textContent = ""; // Clear or set your default message here
            }
        }

        prevBtn.addEventListener('click', () => {
            if (current > 0) {
                current--;
                updateView();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (current < images.length - 1) {
                current++;
                updateView();
            } else if (current === images.length - 1) {
                window.location.href = "final.html";
            }
        });

        // Initial state
        updateView();