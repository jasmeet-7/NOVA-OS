// ==========================
// NOVA OS
// Landing Page
// Powered by FlowPilott
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const wakeButton = document.getElementById("wakeButton");

    wakeButton.addEventListener("click", () => {

        wakeButton.textContent = "INITIALIZING...";
        wakeButton.disabled = true;

        setTimeout(() => {

            window.location.href = "boot.html";

        }, 1500);

    });

});s
