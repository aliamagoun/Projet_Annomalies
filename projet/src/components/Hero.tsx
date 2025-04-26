
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="mb-4">
              <span className="inline-block text-brand-orange font-medium mb-2">bienvenue</span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark font-heading leading-tight"
              >
                Signalement des <br /> Anomalies
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl mt-2 font-bold text-brand-orange font-heading"
              >
                ENSA Béni Mellal
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#about" 
                className="button-primary text-center"
              >
                À Propos De Nous
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-brand-orange text-brand-orange rounded-md text-center 
                         transition-all duration-300 hover:bg-brand-orange/5"
              >
                Contacter-Nous
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/20 rounded-3xl transform rotate-3 scale-105"></div>
              <img 
                src="\img-ensa.jpg" 
                alt="Campus ENSA Béni Mellal" 
                className="rounded-3xl object-cover w-full aspect-[4/3] shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Signalement en ligne</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
