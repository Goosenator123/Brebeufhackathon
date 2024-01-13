function checkPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    console.log(password, confirmPassword);

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    } else {
        return true;
    }
}