
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from './img/images';
import './App.css';

function App() {
  const [slide, setSlide] = useState(1);
  const length = images.length;

  const handlePrev = () => {
    setSlide((slide) => (slide <= 1 ? length : slide - 1));
  };

  const handleNext = () => {
    setSlide((slide) => (slide >= length ? 1 : slide + 1));
  };

  return (
    <div
      className="App"
      style={{ "backgroundImage": `url("${images[slide - 1].url}")` }}
    >
      <div className="slider-container">
        {length > 0 &&
          images.map((image) => (
            <div
              key={image.id}
              className={`slide${slide === image.id ? ' active' : ''}`}
              style={{
                "backgroundImage": `url("${image.url}")`,
              }}
            ></div>
          ))}
        <button className="arrow left-arrow" onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="arrow right-arrow" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default App;