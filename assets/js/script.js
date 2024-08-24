// Function to toggle between play and pause for each video
function togglePlay(videoNumber) {
    const video = document.getElementById(`video-element-${videoNumber}`);
    const playButton = document.getElementById(`play-btn-${videoNumber}`);

    if (video.paused) {
        video.play();
        playButton.style.display = 'none'; // Hide button while video plays
    } else {
        video.pause();
        playButton.innerHTML = '▶'; // Change back to play icon when video is paused
        playButton.style.display = 'flex'; // Show button when video is paused
    }
}

// Optional: Show play button again when each video ends
document.getElementById('video-element-1').addEventListener('ended', () => {
    const playButton = document.getElementById('play-btn-1');
    playButton.innerHTML = '▶';
    playButton.style.display = 'flex'; // Show button when video ends
});

document.getElementById('video-element-2').addEventListener('ended', () => {
    const playButton = document.getElementById('play-btn-2');
    playButton.innerHTML = '▶';
    playButton.style.display = 'flex'; // Show button when video ends
});

// Pause the video when the user clicks on the video and display the play button
document.getElementById('video-element-1').addEventListener('click', () => {
    const video = document.getElementById('video-element-1');
    const playButton = document.getElementById('play-btn-1');

    if (!video.paused) {
        video.pause();
        playButton.innerHTML = '▶';
        playButton.style.display = 'flex';
    }
});

document.getElementById('video-element-2').addEventListener('click', () => {
    const video = document.getElementById('video-element-2');
    const playButton = document.getElementById('play-btn-2');

    if (!video.paused) {
        video.pause();
        playButton.innerHTML = '▶';
        playButton.style.display = 'flex';
    }
});