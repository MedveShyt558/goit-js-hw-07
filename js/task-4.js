const logform = document.querySelector(".login-form");

logform.addEventListener("submit",formSub);

function formSub(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        alert('All form fields must be filled in')
        return
    }
    const formData = {
        email,
        password
    };

    console.log(formData);
    form.reset();
}