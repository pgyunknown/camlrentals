import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import AboutPreview from './components/AboutPreview';
import PortfolioPreview from './components/PortfolioPreview';
import RentalPreview from './components/RentalPreview';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <AboutPreview />
        <PortfolioPreview />
        <RentalPreview />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
