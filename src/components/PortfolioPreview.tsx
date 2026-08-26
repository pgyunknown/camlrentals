import './PortfolioPreview.css';

const PortfolioPreview = () => {
  const portfolioItems = [
    { title: 'Portraits', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
    { title: 'Weddings', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop' },
    { title: 'Fashion', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop' },
    { title: 'Products', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop' },
    { title: 'Events', img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop' },
    { title: 'Maternity', img: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section className="section section-dark portfolio-section" id="portfolio">
      <div className="container portfolio-container">
        <div className="portfolio-header">
          <div>
            <span className="eyebrow">PORTFOLIO</span>
            <h2 className="heading-large">
              A Glimpse of<br />Our Work
            </h2>
          </div>
          <a href="#portfolio" className="btn-link portfolio-cta">
            View Full Portfolio &rarr;
          </a>
        </div>
      </div>
      
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-card">
            <img src={item.img} alt={item.title} className="portfolio-img" />
            <div className="portfolio-overlay"></div>
            <h3 className="portfolio-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPreview;
