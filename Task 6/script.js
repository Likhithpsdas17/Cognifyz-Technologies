document.getElementById("registrationForm").onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name === "" || email === "") {
        document.getElementById("errorMessage").innerText = "Please fill in all fields.";
    } else {
        document.getElementById("errorMessage").innerText = "Form Submitted Successfully!";
    }
};