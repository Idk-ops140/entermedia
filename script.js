// script.js

// Display the alert box when the page loads
window.onload = function() {
    document.getElementById('alertBox').style.display = 'block';
};

// Close the alert box
function closeAlert() {
    document.getElementById('alertBox').style.display = 'none';
}

// Show the upload form when clicking "Upload"
document.getElementById('uploadBtn').onclick = function() {
    document.getElementById('uploadForm').style.display = 'block';
};

// Handle the video upload
document.getElementById('videoUploadForm').onsubmit = function(event) {
    event.preventDefault();
    
    const videoTitle = document.getElementById('videoTitle').value;
    const videoDesc = document.getElementById('videoDesc').value;
    const videoFile = document.getElementById('videoFile').files[0];

    // Basic validation
    if (!videoFile) {
        alert('Please select a video file.');
        return;
    }

    // Create video element
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    const video = document.createElement('video');
    video.controls = true;
    video.src = URL.createObjectURL(videoFile);

    const title = document.createElement('h3');
    title.textContent = videoTitle;

    const description = document.createElement('p');
    description.textContent = videoDesc;

    videoContainer.appendChild(title);
    videoContainer.appendChild(video);
    videoContainer.appendChild(description);

    document.getElementById('videoList').appendChild(videoContainer);

    // Clear the form
    document.getElementById('videoUploadForm').reset();
    document.getElementById('uploadForm').style.display = 'none';
};
