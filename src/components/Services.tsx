import { Camera, Image, Users, Video, Lightbulb, PenTool, Clock, Star } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesList = [
    { icon: <Camera strokeWidth={1} size={32} />, title: 'Portrait', subtitle: 'Photography' },
    { icon: <Users strokeWidth={1} size={32} />, title: 'Wedding', subtitle: 'Photography' },
    { icon: <Video strokeWidth={1} size={32} />, title: 'Event', subtitle: 'Coverage' },
    { icon: <Image strokeWidth={1} size={32} />, title: 'Product', subtitle: 'Photography' },
    { icon: <Lightbulb strokeWidth={1} size={32} />, title: 'Studio', subtitle: 'Rental' },
    { icon: <PenTool strokeWidth={1} size={32} />, title: 'Editing', subtitle: '& Retouching' }
  ];

  const featuresList = [
    { icon: <Users size={20} />, title: 'Professional Team' },
    { icon: <Camera size={20} />, title: 'Premium Equipment' },
    { icon: <Star size={20} />, title: 'Personalized Experience' },
    { icon: <Clock size={20} />, title: 'Timely Delivery' }
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <span className="eyebrow">SERVICES</span>
        <h2 className="heading-large services-heading">What We Offer</h2>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-text">
                <span className="service-title">{service.title}</span><br />
                <span className="service-subtitle">{service.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="features-strip">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <span className="feature-title">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
