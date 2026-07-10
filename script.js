
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
const sendBtn = document.querySelector("#sendBtn");

if (sendBtn) {
    sendBtn.addEventListener("click", function () {

        const input = document.querySelector("#chatInput");
        const chatBox = document.querySelector("#chatBox");

        if (input.value.trim() === "") return;

        chatBox.innerHTML +=
            "<p><strong>You:</strong> " + input.value + "</p>";

        chatBox.innerHTML +=
            "<p><strong>Flincho AI:</strong> AI chat will work after we connect the AI service.</p>";

        input.value = "";

        chatBox.scrollTop = chatBox.scrollHeight;
    });
}