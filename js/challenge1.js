// When page challenge1.html is loaded, style the h1 to be Dark purple using javascript
// document.querySelector('h1').style.color = 'DarkPurple';
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').style.color = 'Purple';
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').style.color = 'Purple';
    document.addEventListener('dblclick', function() {
        alert(new Date());
    });
});
// If the visitor clicks on the input for “Check to toggle the email” field, modify the page so that the email field is available when the input is checked and not available when it is unchecked.
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[type=checkbox]').addEventListener('click', function() {
        document.querySelector('#emailBox').classList.toggle('hidden');
    });
});