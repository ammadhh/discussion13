// When the page is loaded, print the default value of the textarea to the console.  Print JUST the value, no other information.
document.addEventListener('DOMContentLoaded', function() {
    let address = document.getElementById('billing')
    console.log(address.value);
});
document.querySelector('input[type=checkbox]').addEventListener('click', function() {
    // When the checkbox is checked the information from the billing field is copied into the home address field and the home element is disabled.
    let address = document.getElementById('billing')
    let home = document.getElementById('home')
    if (this.checked) {
        home.value = address.value;
        home.disabled = true;
    } else {
        home.value = '';
        home.disabled = false;
    }
});