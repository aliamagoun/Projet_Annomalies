
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const newsItems = [
    {
      id: 1,
      title: "Actualités de l'ENSA",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=500&h=300&fit=crop",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "12 Mars"
    },
    {
      id: 2,
      title: "Actualités de l'ENSA",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500&h=300&fit=crop",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "10 Mars"
    },
    {
      id: 3,
      title: "Actualités de l'ENSA",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&h=300&fit=crop",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "5 Mars"
    },
    {
      id: 4,
      title: "Actualités de l'ENSA",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=500&h=300&fit=crop",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "1 Mars"
    },
    {
      id: 5,
      title: "Actualités de l'ENSA",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=500&h=300&fit=crop",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "28 Fév"
    },
    {
      id: 6,
      title: "Actualités de l'ENSA",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "22 Fév"
    }
  ];

  return (
    <section id="actualites" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="section-title">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">ACTUALITÉS</h2>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="news-card overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-medium py-1 px-2 rounded">
                  {item.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-brand-dark">{item.title}</h3>
                <p className="text-sm text-brand-gray mb-4">{item.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-brand-orange hover:text-brand-orange/80 transition-colors"
                >
                  <span>Lire plus</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-block px-8 py-3 border border-brand-orange text-brand-orange font-medium rounded-md
                     hover:bg-brand-orange hover:text-white transition-all duration-300"
          >
            Voir plus
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
