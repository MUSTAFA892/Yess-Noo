import React, { useRef } from 'react';
import '../styles.css';

const YesPage = () => {
  // Use useRef to directly reference the audio element
  const audioRef = useRef(null);

  // Function to play the audio on button click
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Playback prevented:', error);
      });
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Yeeyy ! Finally</h1>
      </div>
      <div className="gif_container">
        <img
          src="https://i.postimg.cc/wTDG30TB/yes.gif"
          alt="Cute animated illustration"
        />
      </div>
      <button className="btn" id="yesButton" onClick={playAudio}>
        Let's Fix a Date
      </button>

      {/* Audio element to play the song */}
      <audio ref={audioRef}>
        <source src="src/pink+white.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default YesPage;
