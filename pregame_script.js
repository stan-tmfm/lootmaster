/* the entirety of this file was made by ChatGPT
   do not touch */

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress');
    const loadingPercentage = document.getElementById('loading-percentage');
    const saveSlots = document.getElementById('save-slots');
    const gameContainer = document.getElementById('game-container');
    const largeWord = document.getElementById('large-word-above-save-slots');

    let loadProgress = 0;

    // Simulate loading
    // yeah that's right the progress bar is a lie
    // cry about it
    const loadingInterval = setInterval(() => {
        loadProgress += 0.20;
        progressBar.style.width = loadProgress + '%';
        loadingPercentage.textContent = loadProgress.toFixed(1) + '%';

        if (loadProgress >= 100) {
            clearInterval(loadingInterval);
            onLoadingComplete();
        }
    }, 1);

    function onLoadingComplete() {
        loadingScreen.style.opacity = '0';
        
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';

            largeWord.classList.add('show');
            saveSlots.classList.add('show');
        }, { once: true });
    }

    const saveSlotElements = document.querySelectorAll('.save-slot');
    saveSlotElements.forEach((slot, index) => {
        slot.addEventListener('click', () => loadGameData(index + 1));
    });

    function loadGameData(slotNumber) {
        largeWord.classList.remove('show');
        saveSlots.classList.remove('show');

        largeWord.addEventListener('transitionend', () => {
            largeWord.style.display = 'none';

            saveSlots.addEventListener('transitionend', () => {
                saveSlots.style.display = 'none';

                setTimeout(() => {
                    gameContainer.style.display = 'block';
                    gameContainer.style.opacity = '1';
                    gameContainer.classList.remove('hide');
                    gameContainer.classList.add('show');

                    console.log(`Save slot ${slotNumber} successfully loaded`);
                }, 1000);
            }, { once: true });
        }, { once: true });
    }
});