import { useState, useEffect } from 'react';
import Noise from './Noise';
import Navbar from './Navbar';
import TextType from './TextType';
import './App.css';

function App() {
  const [isInitialDone, setIsInitialDone] = useState(false);
  const [heroText, setHeroText] = useState(["Hello, I am Mohammed Anas A R."]);
  const [isLooping, setIsLooping] = useState(false);

  const handleInitialDone = () => {
    if (!isLooping) {
      setIsInitialDone(true);
      // Wait a bit after the description fades in before starting the role loop
      setTimeout(() => {
        setHeroText([
          "GenAI Intern.",
          "Final Year CSE Grad.",
          "Software Dev.",
          "Mohammed Anas A R."
        ]);
        setIsLooping(true);
      }, 1000);
    }
  };

  return (
    <div className="app-main">
      <Navbar />
      <div className="noise-background">
        <Noise
          patternSize={1}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={1}
          patternAlpha={30}
        />
      </div>
      <main className="content">
        <div className="hero-section">
          <TextType
            key={isLooping ? 'loop' : 'initial'}
            text={heroText}
            typingSpeed={50}
            pauseDuration={1200}
            showCursor={true}
            cursorCharacter="|"
            className="welcome-text"
            loop={isLooping}
            onSentenceComplete={!isLooping ? handleInitialDone : undefined}
          />
          <div className={`description-text ${isInitialDone ? 'fade-in-active' : ''}`}>
            <p>A passionate Engineer,</p>

            <p>AI ML enthusiast</p>
            <p>and everything in between the galaxy.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
