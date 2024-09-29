window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const startMenu = document.getElementById('start-menu');
    const progressBar = document.getElementById('progress');
    const loadingPercentage = document.getElementById('loading-percentage');

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
}

function onLoadingComplete() {
    const loadingScreen = document.getElementById('loading-screen');
    const startMenu = document.getElementById('start-menu');

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
