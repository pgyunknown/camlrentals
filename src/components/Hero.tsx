import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2574&auto=format&fit=crop" 
          alt="Cinematic fashion photography" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content-wrapper">
        <div className="hero-content">
          <span className="eyebrow fade-in">Capturing Stories</span>
          <h1 className="heading-large fade-in" style={{ animationDelay: '0.2s' }}>
            Timeless<br />Moments
          </h1>
          <p className="hero-description fade-in" style={{ animationDelay: '0.4s' }}>
            Portraits. Stories. Emotions.<br />
            Captured beautifully.
          </p>
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="btn-primary hero-btn">
              Book a Session &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator fade-in" style={{ animationDelay: '1s' }}>
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
