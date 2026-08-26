import './RentalPreview.css';

const RentalPreview = () => {
  const products = [
    {
      id: 1,
      name: 'Sony A7 III',
      category: 'Full Frame Mirrorless Camera',
      price: '₹2,000',
      img: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Canon 50mm f/1.8',
      category: 'Prime Lens',
      price: '₹500',
      img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Godox SL60W',
      category: 'LED Video Light',
      price: '₹800',
      img: 'https://images.unsplash.com/photo-1589801258579-18e091f4ca26?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'DJI Ronin SC',
      category: 'Gimbal Stabilizer',
      price: '₹1,000',
      img: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=400&auto=format&fit=crop',
    }
  ];

  return (
    <section className="section section-light rental-section" id="rental">
      <div className="container rental-container">
        <div className="rental-content">
          <span className="eyebrow">RENTAL</span>
          <h2 className="heading-large rental-heading">
            Pro Gear.<br />For Your Vision.
          </h2>
          <p className="rental-description">
            High-end cameras, lenses, and lighting equipment available for rent.
          </p>
          
          <ul className="rental-features">
            <li>Well Maintained</li>
            <li>Affordable Rates</li>
            <li>Hassle-Free Booking</li>
          </ul>
          
          <a href="#rental" className="btn-link rental-cta">
            Explore Rental Gear &rarr;
          </a>
        </div>
        
        <div className="rental-grid">
          {products.map(product => (
            <div key={product.id} className="rental-card">
              <div className="rental-img-wrapper">
                <img src={product.img} alt={product.name} className="rental-img" />
              </div>
              <h3 className="rental-product-name">{product.name}</h3>
              <p className="rental-product-category">{product.category}</p>
              <p className="rental-product-price">
                <span className="price-value">{product.price}</span> / day
              </p>
              <button className="rental-card-btn">View Details &rarr;</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalPreview;
