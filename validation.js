 loginForm = document.getElementById("login-form");
 loginButton = document.getElementById("form-submit");
 loginErrorMsg = document.getElementById("error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
     username = loginForm.username.value;
     password = loginForm.password.value;

    if (username === "user" && password === "123456") {
        alert("Log In Successful");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})