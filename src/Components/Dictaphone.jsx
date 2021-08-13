import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./styles.css"

const Dictaphone = () => {
    
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }



  return (
    <div style = {{backgroundColor:transcript}} className = "mydiv">
      <h1>Hello there, change the background color of this page with your voice</h1>
      <br />
      <br />
      <h2>Microphone Status: {listening ? 'on' : 'off'}</h2>
    <div className = "start_nd_stop_buttons">
      <button onClick={SpeechRecognition.startListening}>Click to Start Recording   <i class="fas fa-microphone-alt"></i></button>
      <button onClick={SpeechRecognition.stopListening}>Stop Recording  <i class="fas fa-stop-circle"></i></button>
   </div>
      <button onClick={resetTranscript} className = "reset-btn">Reset Page <i class="fas fa-redo"></i></button> <br />
      <h2>You said: {transcript}</h2>

     
    
        <div className = "examples">
        <h3>Examples:</h3> 
              <button>Red</button>
              <button>Blue</button>
              <button>Yellow</button>
              <button>Black</button>
              <button>Orange</button>
              <button>Khaki</button>
              <button>Cyan</button>
              <button>Coral</button>
              <button>teal</button>
              <button>Thistle</button>
              <button>Violet</button>
              <button>Purple</button>
              <button>Silver</button>
        </div> 
    

    </div>
    
  );
};
export default Dictaphone;