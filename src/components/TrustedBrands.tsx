import './TrustedBrands.css';

const TrustedBrands = () => {
  const brands = ['Canon', 'SONY', 'Godox', 'DJI', 'Profoto', 'FUJIFILM', 'Nikon', 'SanDisk'];
  
  return (
    <section className="trusted-brands">
      <div className="container brands-container">
        <span className="brands-label">Trusted by</span>
        <div className="brands-list">
          {brands.map((brand, index) => (
            <span key={index} className={`brand-logo brand-${brand.toLowerCase()}`}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
