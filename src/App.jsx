import Particles from './Particles';
import './App.css';

function App() {
  return (
    <div className="app-main">
      <div className="particles-background">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={2000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={5}
          cameraDistance={20}
          sizeRandomness={1}
        />
      </div>
      <main className="content">
        <h1>Welcome</h1>
      </main>
    </div>
  );
}

export default App;
