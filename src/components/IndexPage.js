// components/IndexPage.js
import React from 'react';
import '../styles.css';

const IndexPage = () => {
  const nextPage = () => {
    window.location.href = '/yes';
  };

  const moveButton = () => {
    const button = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Do you wanna go out with me?</h1>
      </div>
      <div className="gif_container">
        <img
          src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" onClick={nextPage}>
          Yes
        </button>
        <button
          className="btn"
          id="noButton"
          onMouseOver={moveButton}
          onClick={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
