import { useState, useEffect } from 'react';
import Noise from './Noise';
import BubbleMenu from './BubbleMenu';
import Navbar from './Navbar';
import TextType from './TextType';
import WorkIcon from './WorkIcon';
import './App.css';

const experiences = [
  {
    title: "GenAI Research Intern",
    location: "Trivandrum, Kerala",
    company: "Acsia Technologies",
    duration: "Sep 2025 – Present",
    description: "Pioneered research on Lila GenAI, enhancing system reliability and productivity. Integrated Guardrails for adversarial protection while collaborating on cutting-edge AI applications for the Research Center."
  },
  {
    title: "AI/ML Intern",
    location: "Thiruvananthapuram, Kerala",
    company: "iCore Pioneer Business Solutions",
    duration: "Dec 2024 – Jan 2025",
    description: "Developed real-time sports analytics systems using CNN and TrackNet for precision ball tracking. Implemented Hawk-Eye inspired logic for automated decision-making and validated models with large-scale datasets."
  },
  {
    title: "IT Intern",
    location: "Trivandrum, Kerala",
    company: "Corporation of Thiruvanthapuram",
    duration: "Dec 2024 – Jan 2025",
    description: "Led the end-to-end development of SHE SPACE, a government booking platform, delivering a fully-functional prototype in seven days. The project was successfully inaugurated and integrated into state IT infrastructure."
  },
  {
    title: "Student Intern",
    location: "Trivandrum, Kerala",
    company: "ICT Academy of Kerala",
    duration: "Jul 2024 – Aug 2024",
    description: "Engineered a scalable E-Learning Hub using the MERN stack and AWS cloud services. Optimized course management and student tracking through custom REST APIs and cloud-native hosting."
  }
];

function App() {
  const [isInitialDone, setIsInitialDone] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [heroText, setHeroText] = useState(["hello, Anzu here."]);
  const [isLooping, setIsLooping] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleTyped = () => {
    if (!isLooping) {
      setIsInitialDone(true);
      // Enable scroll after the description text has completely faded in
      setTimeout(() => {
        setCanScroll(true);
      }, 1000);
    }
  };

  const handleAllDone = () => {
    if (!isLooping) {
      setHeroText([
        "GenAI Intern.",
        "Final Year CSE Grad.",
        "Software Dev.",
        "Mohammed Anas A R."
      ]);
      setIsLooping(true);
    }
  };

  return (
    <div className={`app-main ${canScroll ? 'allow-scroll' : ''} ${isNavOpen ? 'nav-is-open' : ''}`}>
      <div className={isNavOpen ? 'content-hidden' : ''}>
        <Navbar />
      </div>
      <BubbleMenu
        logo={<span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.05em' }}>ANZU</span>}
        useFixedPosition={true}
        onMenuClick={(isOpen) => setIsNavOpen(isOpen)}
      />
      <div className="noise-background">
        <Noise
          patternSize={1}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={1}
          patternAlpha={30}
        />
      </div>
      <main className={`content ${isNavOpen ? 'content-hidden' : ''}`}>
        <section className="hero-section">
          <TextType
            key={isLooping ? 'loop' : 'initial'}
            text={heroText}
            typingSpeed={50}
            pauseDuration={isLooping ? 1200 : 2000}
            showCursor={true}
            cursorCharacter="|"
            className="welcome-text"
            loop={isLooping}
            deleteLast={!isLooping}
            onTypingComplete={!isLooping ? handleTyped : undefined}
            onAllDone={!isLooping ? handleAllDone : undefined}
          />
          <div className={`description-text ${isInitialDone ? 'fade-in-active' : ''}`}>
            <p>passionate engineer,</p>
            <p>AI ML enthusiast</p>
            <p>and everything in between the galaxy.</p>
          </div>
        </section>

        <section className="experience-section">
          <div className="experience-header-row">
            <h2 className="experience-title">Experience</h2>
            <WorkIcon className="experience-header-icon" />
          </div>
          <div className="divider-main"></div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <div className="exp-role-info">
                    <h3>{exp.title}</h3>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>
                <div className="exp-content">
                  <p className="exp-description">{exp.description}</p>
                </div>
                <div className="item-divider thick"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
