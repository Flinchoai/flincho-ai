
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
const imageBtn = document.querySelector("#generateImageBtn");

if (imageBtn) {

    imageBtn.addEventListener("click", function () {

        const prompt = document.querySelector("#imagePrompt").value.trim();
        const result = document.querySelector("#imageResult");

        if (prompt === "") {
            result.innerHTML = "Please describe the image you want to create.";
            return;
        }

        result.innerHTML =
        "<h3>Image Prompt</h3><p>" + prompt +
        "</p><br><strong>Coming Soon:</strong> Flincho AI will generate your image here.";

    });

}
const socialBtn = document.querySelector("#generateSocialBtn");

if (socialBtn) {

    socialBtn.addEventListener("click", function () {

        const prompt = document.querySelector("#socialPrompt").value.trim();
        const output = document.querySelector("#socialOutput");

        if (prompt === "") {
            output.innerHTML = "Please enter your social media idea.";
            return;
        }

        output.innerHTML =
        "<h3>Generated Post</h3>" +
        "<p><strong>Idea:</strong> " + prompt + "</p>" +
        "<p><em>AI generation will be enabled after we connect the backend.</em></p>";

    });

}
const youtubeBtn = document.querySelector("#generateYoutubeBtn");

if (youtubeBtn) {

    youtubeBtn.addEventListener("click", function () {

        const prompt = document.querySelector("#youtubePrompt").value.trim();
        const output = document.querySelector("#youtubeOutput");

        if (prompt === "") {
            output.innerHTML = "Please enter your YouTube video topic.";
            return;
        }

        output.innerHTML =
        "<h3>YouTube SEO Preview</h3>" +
        "<p><strong>Topic:</strong> " + prompt + "</p>" +
        "<p><strong>Title:</strong> Coming soon...</p>" +
        "<p><strong>Description:</strong> AI will generate this after backend integration.</p>" +
        "<p><strong>Tags:</strong> AI will generate optimized tags.</p>";

    });

}