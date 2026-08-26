import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="section section-light about-section" id="about">
      <div className="container about-container">
        <div className="about-content">
          <span className="eyebrow">ABOUT US</span>
          <h2 className="heading-large about-heading">
            We Don't Just Click<br />
            Pictures, We Capture<br />
            Feelings.
          </h2>
          <p className="about-description">
            Lumière Photo Studio is a creative space for timeless photography. 
            Whether it's your big day, a personal milestone, or a brand story — 
            we're here to make it unforgettable.
          </p>
          <a href="#about" className="btn-link about-cta">
            Know More About Us &rarr;
          </a>
        </div>
        
        <div className="about-gallery">
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" 
            alt="Camera equipment on table" 
            className="gallery-img img-1"
          />
          <img 
            src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=800&auto=format&fit=crop" 
            alt="Studio interior" 
            className="gallery-img img-2"
          />
          <img 
            src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=800&auto=format&fit=crop" 
            alt="Editorial portrait" 
            className="gallery-img img-3"
          />
          <img 
            src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=800&auto=format&fit=crop" 
            alt="Vintage camera detail" 
            className="gallery-img img-4"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
