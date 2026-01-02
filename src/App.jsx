import Noise from './Noise';
import Navbar from './Navbar';
import TextType from './TextType';
import './App.css';

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <div className="noise-background">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      <main className="content">
        <TextType
          text={["Hello, I am Mohammed Anas A R"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="welcome-text"
        />
      </main>
    </div>
  );
}

export default App;
