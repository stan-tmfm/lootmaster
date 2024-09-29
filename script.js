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
        }, 1); // Update every 1 millisecond for faster loading

        function onLoadingComplete() {
            // Fade out the loading screen
            loadingScreen.classList.remove('show');
            loadingScreen.classList.add('hide');

            // Wait for the fade-out transition to complete
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.style.display = 'none'; // Hide loading screen after fade out

                // Show the start menu now, after the loading screen fades out
                startMenu.style.display = 'flex'; // Show the start menu
                startMenu.classList.remove('hide'); // Remove the hide class if it's there
                startMenu.classList.add('show'); // Show with fade-in effect
            }, { once: true });
        }

        // Add functionality to the start button
        startButton.addEventListener('click', function() {
            // Fade out the start menu
            startMenu.classList.remove('show');
            startMenu.classList.add('hide');

            // Wait for the fade-out transition to complete
            startMenu.addEventListener('transitionend', () => {
                startMenu.style.display = 'none'; // Hide the start menu
                setTimeout(() => {
                    // Show the black game container after 1 second
                    gameContainer.style.display = 'block';

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
