import IWindow from "./i-window";

declare const window : IWindow;

const Recognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new Recognition();

const start = document.getElementById("start");

const result = document.getElementById("result");
const msg = document.createElement("p");

recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = true;

recognition.onresult = (event) => {
    const textInfo = event.results[event.results.length - 1][0];

    if (textInfo != undefined) {
        const message : string  = textInfo?.transcript;
        msg.textContent = message;
        result?.appendChild(msg);
    }
}

start?.addEventListener('click', () => {
    recognition.start();
});

