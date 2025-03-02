function validateSignUp() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm-password").value;
    let age = document.getElementById("signup-age").value;
    let phone = document.getElementById("signup-phone").value;
    let address = document.getElementById("signup-address").value;
    let valid = true;

    document.querySelectorAll(".error").forEach(element => element.innerText = "");

    if (username.trim() === "") {
        document.getElementById("signup-username-error").innerText = "Username is required";
        valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("signup-email-error").innerText = "Invalid email format";
        valid = false;
    }
    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
        document.getElementById("signup-password-error").innerText = "Password must include special & numeric characters";
        valid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById("signup-confirm-password-error").innerText = "Passwords do not match";
        valid = false;
    }
    if (age < 18 || age > 100 || isNaN(age)) {
        document.getElementById("signup-age-error").innerText = "Age must be between 18 and 100";
        valid = false;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("signup-phone-error").innerText = "Invalid phone number";
        valid = false;
    }
    if (address.trim() === "") {
        document.getElementById("signup-address-error").innerText = "Address is required";
        valid = false;
    }
    
    if (valid) {
        console.log("Sign Up Data:", { username, email, password, age, phone, address });
        alert("Sign Up Successful!");
    }
}