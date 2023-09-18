window.addEventListener('load', function() {
    setTimeout(function() {   
        newsletter.style.opacity = 1;
    }, 7500);
});

subscribeInput.addEventListener('click', () => {
    
    subscribeVideo.style.display = 'flex';
    subscribeVideo.style.animation = 'fadein 1s';
    
    first.style.opacity = 0;
    
    setTimeout(function() {
        thanks.style.display = "flex";
        thanks.style.animation = "fadein 1s";
    }, 5000);
});