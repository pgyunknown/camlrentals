import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lumière captured our wedding beautifully. Every moment feels so real when we look at the photos.",
      name: "Ananya & Rohan",
      type: "Wedding",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      text: "The studio is so professional and the team made us feel super comfortable.",
      name: "Priya Sharma",
      type: "Portrait Session",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    },
    {
      text: "Loved their creativity and attention to detail. Highly recommended!",
      name: "Karthik N.",
      type: "Product Shoot",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section section-dark testimonials-section">
      <div className="container testimonials-container">
        <div className="testimonials-content">
          <span className="eyebrow">WHY CHOOSE US</span>
          <h2 className="heading-large testimonials-heading">
            It's not just about<br />pictures. It's about<br />you.
          </h2>
          <a href="#" className="btn-link testimonials-cta">
            See What Our Clients Say &rarr;
          </a>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <img src={item.avatar} alt={item.name} className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">{item.name}</span>
                  <span className="author-type">{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
