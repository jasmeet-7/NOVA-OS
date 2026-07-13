document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("continueButton");

    button.addEventListener("click", () => {

        const name = document.getElementById("username").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        localStorage.setItem("novaUser", name);

        window.location.href = "console.html";

    });

});
