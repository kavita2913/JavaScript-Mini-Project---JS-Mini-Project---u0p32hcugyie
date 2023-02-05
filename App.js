var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_verify);
password.addEventListener('input', pass_verify);

document.forms["form"].addEventListener("submit", function (event) {
    event.preventDefault();
    if (validated()) {
        alert("You have logged in successfully");
    }
});

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value.length < 9) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    return true;
}

function email_verify() {
    if (email.value.length >= 5) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }
}
function pass_verify() {
    if (password.value.length >= 9) {
        alert("password must be 9 numbers");
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }
}
