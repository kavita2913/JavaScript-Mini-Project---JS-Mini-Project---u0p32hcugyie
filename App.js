var email = document.forms['form']['Username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('useername_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input', username_verify);
password.addEventListener('input', pass_verify);

document.forms["form"].addEventListener("submit", function (event) {
    event.preventDefault();
    if (validated()) {
        alert("You have logged in successfully");
    }
});

function validated() {
    if (username.value.length < 9) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
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

function username_verify() {
    if (username.value.length >= 5) {
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
    }
}
function pass_verify() {
    if (password.value.length >= 9) {
        alert("password must be 9 numbers");
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }
}
