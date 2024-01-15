const registerForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
        alert('All fields must be provided.')

        return;
    }

    const userCredentials = {
        email: email,
        password: password,
    }

    console.log(userCredentials);

    registerForm.reset();
};

registerForm.addEventListener('submit', handleSubmit);
