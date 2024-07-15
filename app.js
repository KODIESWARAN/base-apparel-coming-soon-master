 const form = document.querySelector("#form");
 const email = document.getElementById("email");
 const iconError = document.querySelector(".error");
 const span = document.querySelector(".msg");

 

 form.addEventListener("submit",  e => {
    e.preventDefault();
    

    if (!validateEmail(email.value)) {
        span.textContent= "Please enter a valid email";
        iconError.classList.remove("hidden");
    } else {
        span.textContent = " ";
        iconError.classList.add("hidden");
    }
 }
 );

const validateEmail = function (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    return emailRegex.test(email);
 }