import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>HELLO</h1>

      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector("#app"));