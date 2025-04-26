
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import News from '../components/News';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for staggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all staggered elements
    document.querySelectorAll('.staggered-item').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.staggered-item').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <News />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
