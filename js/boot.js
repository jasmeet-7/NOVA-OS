document.addEventListener("DOMContentLoaded", () => {

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    if (!progressBar || !progressText) {
        alert("Missing progressBar or progressText in boot.html");
        return;
    }

    const steps = [
        "Starting NOVA...",
        "Loading Core...",
        "Loading Memory...",
        "Initializing Security...",
        "Preparing Interface...",
        "System Ready..."
    ];

    let progress = 0;
    let index = 0;

    const timer = setInterval(() => {

        if (index < steps.length) {
            progress += 20;
            progressBar.style.width = progress + "%";
            progressText.textContent = steps[index];
            index++;
        } else {
            clearInterval(timer);

            setTimeout(() => {
                window.location.href = "setup.html";
            }, 1200);
        }

    }, 800);

});
