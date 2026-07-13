// ==========================
// NOVA OS
// Boot Sequence
// Powered by FlowPilott
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    const steps = [
        "Starting NOVA...",
        "Loading Core...",
        "Loading Memory...",
        "Initializing Security...",
        "Preparing Interface...",
        "System Ready..."
    ];

    let progress = 0;
    let step = 0;

    const boot = setInterval(() => {

        progress += 20;

        progressBar.style.width = progress + "%";

        progressText.textContent = steps[step];

        step++;

        if (progress >= 100) {

            clearInterval(boot);

            setTimeout(() => {

                window.location.href = "setup.html";

            }, 1200);

        }

    }, 800);

});
