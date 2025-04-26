import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // ✅ correct syntax
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="section-title">
            <span className="inline-block text-sm font-medium text-brand-orange mb-2">Notre Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-heading">À PROPOS DE NOUS</h2>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="mt-8 text-lg text-brand-dark/80 leading-relaxed"
          >
            Notre plateforme permet aux étudiants et au personnel de signaler facilement toute 
            anomalie ou problème au sein de l'ENSA BM. Vous pouvez suivre en temps réel l'avancement 
            de votre signalement et être notifié à chaque étape du traitement jusqu'à la résolution des 
            démarches en cours. Notre objectif est de garantir un établissement bien équipé, propice à 
            un environnement d'apprentissage optimal.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[ 
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Signalement Rapide",
                description: "Signalez tout problème en quelques clics seulement"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Suivi en Temps Réel",
                description: "Suivez l'état de vos signalements à chaque étape"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Communauté Active",
                description: "Participez à l'amélioration de votre établissement"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow-soft hover:shadow-md transition-all duration-300 flex flex-col items-center"
              >
                <div className="text-brand-orange mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-brand-gray">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
