document.addEventListener('DOMContentLoaded', (event) => {
    const envelope = document.querySelector('.envelope-wrapper');
    const letter = document.querySelector('.letter');
    const closeBtn = document.querySelector('.close-btn');
    const audio = new Audio('assets/audio/happy-birthday-to-you-piano-version-13976.mp3');
    let surpriseVid = document.getElementById("surprise_video");

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('flap');
        letter.style.animation = 'show-msg 1 1.5s ease-in-out 1s forwards normal';
        playAudio();
    });

    closeBtn.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevents envelope click
        envelope.classList.toggle('flap');
        letter.style.animation = 'hide-msg 1 1.5s ease-in-out forwards normal';
        pauseAudio();
    });

    document.querySelector(".no-btn.btn").addEventListener('click', (event) => {
        event.stopPropagation();  // Prevents envelope click
        envelope.classList.toggle('flap');
        letter.style.animation = 'hide-msg 1 1.5s ease-in-out forwards normal';
        pauseAudio();
    });

    document.querySelector(".yes-btn.btn").addEventListener('click', (event) => {
        event.stopPropagation();  // Prevents envelope click
        envelope.classList.toggle('flap');
        letter.style.animation = 'hide-msg 1 1.5s ease-in-out forwards normal';
        pauseAudio();
        setTimeout(() => {
            document.querySelector('.envelope-wrapper').style.transform = 'scale(0)';
        }, 1500);

        setTimeout(() => {
            document.querySelector('.surprise-container').style.display = 'block';
            document.querySelector('.surprise-container').style.transform = 'translate(-50%,-50%) scale(1)';
        }, 2000);
    });

    function playAudio() {
        audio.loop = true;
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
        audio.currentTime = 0;
    }

    // Surprise video functionality
    const surpriseCloseBtn = document.querySelector('.surprise-close-btn');
    surpriseCloseBtn.addEventListener('click', () => {
        surpriseVid.pause();
        surpriseVid.currentTime = 0;
        pauseAudio();
        document.querySelector('.envelope-wrapper').style.transform = 'scale(1)';
        document.querySelector('.surprise-container').style.display = 'none';
    });

    document.querySelector('.next-vid').addEventListener('click', () => {
        surpriseVid.src = "assets/My Best Friend Ahana.mp4";
        document.querySelector('.prev-vid').style.display = "block";
        document.querySelector('.next-vid').style.display = "none";
    });

    document.querySelector('.prev-vid').addEventListener('click', () => {
        surpriseVid.src = "assets/Happy Birthday Ahana.mp4";
        document.querySelector('.prev-vid').style.display = "none";
        document.querySelector('.next-vid').style.display = "block";
    });
});
