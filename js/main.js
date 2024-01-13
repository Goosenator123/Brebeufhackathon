const emailInput = document.getElementById("email");


emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== "") {
        emailInput.classList.add('filled');
    } else {
        emailInput.classList.remove('filled');
    }
})