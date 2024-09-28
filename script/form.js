document.querySelector('.login-form').onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById('textpassword').value;
    const email = document.getElementById('textgmail').value;

    if (name && email) {
        alert('Successful');
        document.getElementById('textpassword').value = '';
        document.getElementById('textgmail').value = '';
    } else {
        alert('Iltimos, barcha maydonlarni to\'ldiring.');
    }
};
document.getElementById('openss').onclick = function() {
    const email = document.getElementById('textgmails').value;

    if (email) {
        const selectedLang = this.value;
        alert(translations[selectedLang]);
        document.getElementById('textgmails').value = '';
    } else {
        alert('Iltimos, barcha maydonlarni to\'ldiring.');
    }
};

document.querySelector('#submitbtn').onclick = function(event) {
    event.preventDefault();

    const name = document.getElementById('mailinput').value;
    const email = document.getElementById('textpasswordss').value;
    const radioInput = document.querySelector('input[name="options"]:checked');

    if (name && email && radioInput) {
        alert('Successful');
        document.getElementById('mailinput').value = '';
        document.getElementById('textpasswordss').value = '';
        radioInput.checked = false; 
    } else {
        alert('Iltimos, barcha maydonlarni to\'ldiring.');
    }
};