import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section section-light contact-section" id="contact">
      <div className="container contact-container">
        
        {/* Left Column */}
        <div className="contact-info">
          <span className="eyebrow">LET'S CONNECT</span>
          <h2 className="heading-large contact-heading">
            Have a Story?<br />Let's Capture It.
          </h2>
          <p className="contact-description">
            We'd love to hear from you. Let's create something beautiful together.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <Phone size={18} strokeWidth={1.5} />
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <Mail size={18} strokeWidth={1.5} />
              <span>hello@lumiere.studio</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} strokeWidth={1.5} />
              <span>Bangalore, India</span>
            </div>
          </div>
          
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Center Column */}
        <div className="contact-gallery">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop" 
            alt="Studio setup" 
            className="contact-img img-left"
          />
          <img 
            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=400&auto=format&fit=crop" 
            alt="Studio interior" 
            className="contact-img img-right"
          />
        </div>

        {/* Right Column */}
        <div className="contact-form-wrapper">
          <h3 className="form-heading">Send Us a Message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
            </div>
            <input type="tel" placeholder="Phone Number" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea" rows={4}></textarea>
            <button type="submit" className="btn-primary form-submit">
              Send Message &rarr;
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
