import ISpeechRecognition from "./i-speech-recognition";

interface ISpeechRecognitionConstructor {
    new () : ISpeechRecognition;
}

interface IWindow extends Window {
    SpeechRecognition : ISpeechRecognitionConstructor;
    webkitSpeechRecognition : ISpeechRecognitionConstructor;
}

export default IWindow;