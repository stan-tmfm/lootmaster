document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress');
    const loadingPercentage = document.getElementById('loading-percentage');
    const saveSlots = document.getElementById('save-slots');
    const gameContainer = document.getElementById('game-container');
    const gameTitle = document.getElementById('game-title');

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
    }, 1); // Fast loading speed

    function onLoadingComplete() {
        // Fade out the loading screen
        loadingScreen.style.opacity = '0'; // Set opacity to 0 to fade out

        // Wait for the fade-out transition to complete
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none'; // Hide loading screen after fade out

            // Show the save slots and Lootmaster title after the loading screen fades out
            gameTitle.classList.add('show'); // Show Lootmaster title
            saveSlots.classList.add('show'); // Show save slots
        }, { once: true });
    }

    // Add click events to save slots
    const saveSlotElements = document.querySelectorAll('.save-slot');
    saveSlotElements.forEach((slot, index) => {
        slot.addEventListener('click', () => loadGameData(index + 1));
    });

    function loadGameData(slotNumber) {
        // Fade out the save slots and Lootmaster title
        gameTitle.classList.remove('show'); // Hide Lootmaster title
        saveSlots.classList.remove('show'); // Hide save slots

        // Wait for the fade-out transition to complete (save slots and title)
        gameTitle.addEventListener('transitionend', () => {
            gameTitle.style.display = 'none'; // Hide the title after fade out

            // After both fade-outs, hide save slots and proceed with game logic
            saveSlots.addEventListener('transitionend', () => {
                saveSlots.style.display = 'none'; // Hide the save slots

                // Show the game container after a delay
                setTimeout(() => {
                    gameContainer.style.display = 'block';
                    gameContainer.style.opacity = '1';
                    gameContainer.classList.remove('hide');
                    gameContainer.classList.add('show');

                    // Load and display game data (e.g., based on slotNumber)
                    console.log(`Loading game data from Save Slot ${slotNumber}`);
                }, 1000); // 1-second delay to let fade-out transition finish
            }, { once: true });
        }, { once: true });
    }
});
