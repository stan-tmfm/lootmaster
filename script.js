document.addEventListener('DOMContentLoaded', function() {
    window.onload = function () {
        const loadingScreen = document.getElementById('loading-screen');
        const startMenu = document.getElementById('start-menu');
        const progressBar = document.getElementById('progress');
        const loadingPercentage = document.getElementById('loading-percentage');
        const startButton = document.getElementById('start-button');
        const gameContainer = document.getElementById('game-container');

        let loadProgress = 0;

        // Simulate loading
        const loadingInterval = setInterval(() => {
            loadProgress += 0.20; // Increase progress
            progressBar.style.width = loadProgress + '%'; // Update progress bar width
            loadingPercentage.textContent = loadProgress.toFixed(1) + '%'; // Update percentage text

            if (loadProgress >= 100) {
                clearInterval(loadingInterval); // Stop the loading interval
                onLoadingComplete(); // Call the function to handle loading complete
            }
        }, 1); // Keep the fast loading speed

        function onLoadingComplete() {
            // Fade out the loading screen
            loadingScreen.style.opacity = '0'; // Set opacity to 0 to fade out

            // Wait for the fade-out transition to complete
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.style.display = 'none'; // Hide loading screen after fade out

                // Show the start menu now, after the loading screen fades out
                startMenu.style.visibility = 'visible'; // Ensure it's visible
                startMenu.style.opacity = '1'; // Fade in the start menu
            }, { once: true });
        }

        // Add functionality to the start button
        startButton.addEventListener('click', function() {
            // Fade out the start menu
            startMenu.style.opacity = '0'; // Fade out

            // Wait for the fade-out transition to complete
            startMenu.addEventListener('transitionend', () => {
                startMenu.style.display = 'none'; // Hide the start menu
                setTimeout(() => {
                    // Show the black game container after 1 second
                    gameContainer.style.display = 'block';
                    gameContainer.style.opacity = '1';

                    // Load game data and settings
                    loadGameData();
                }, 1000); // 1-second delay
            }, { once: true });
        });

        function loadGameData() {
            gameContainer.classList.remove('hide');
            gameContainer.classList.add('show'); // This will make it visible
        }
    }
});
