// When window laoded do an alert
window.addEventListener("load", function() {
    let caption = document.querySelectorAll('figcaption')[1];
    alert(caption.innerHTML);
});
// When the mouse goes over an image three things should happen:
// The background image of the display should change to the same image being hovered over.  
// The text in the display should show the alt attribute of the image
// The image should no longer be visible – but it should still take up the same amount of space.
let images = document.querySelectorAll('img');
// let display = document.querySelector('.display');
// When the mouse leaves the image, it shoudl go bakc to old psotion
images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        display.style.backgroundImage = `url(${image.src})`;
        display.innerHTML = image.alt;
        image.style.visibility = 'hidden';
    });
    image.addEventListener('mouseout', function() {
        display.style.backgroundImage = 'none';
        display.innerHTML = '';
        image.style.visibility = 'visible';
    });
});
