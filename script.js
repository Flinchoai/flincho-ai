
// Flincho AI JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Homepage button
    const startBtn = document.querySelector("button");

    if (startBtn && startBtn.textContent.includes("Get Started")) {
        startBtn.addEventListener("click", function () {
            window.location.href = "writer.html";
        });
    }

    // AI Writer page
    const generateBtn = document.querySelector("#generateBtn");

    if (generateBtn) {
        generateBtn.addEventListener("click", function () {

            const prompt = document.querySelector("#prompt").value.trim();
            const output = document.querySelector("#output");

            if (prompt === "") {
                output.innerHTML = "Please enter what you want AI to write.";
                return;
            }

            output.innerHTML =
                "<h3>AI Response</h3><p>This is where Flincho AI will generate content after we connect the AI API.</p>";

        });
    }

});