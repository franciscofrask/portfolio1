import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = ({
  scrollToSection,
  onDownloadCV
}) => {
  return <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Desarrollador</span>
            <br />
            <span className="text-white">Web Full Stack</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Hola, soy Francisco Frascona, desarrollador web Full Stack. Me enfoco en crear aplicaciones eficientes, escalables y bien diseñadas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('proyectos')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Ver Proyectos
            </Button>
            <Button onClick={onDownloadCV} variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;