
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contáctame' },
    { id: 'social', label: 'Redes' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    toast({
      title: '🚧 Esta función no está implementada aún',
      description: '¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt 🚀',
    });
  };

  const handleProjectDemo = (projectTitle) => {
    toast({
      title: '🚧 Esta función no está implementada aún',
      description: `¡El demo para ${projectTitle} estará disponible pronto! 🚀`,
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 Formulario en construcción',
      description: 'Esta función estará lista pronto. ¡Gracias por tu interés! 🚀',
    });
  };

  return (
    <>
      <Helmet>
        <title>Francisco Frascona - Desarrollador Web Full Stack</title>
        <meta
          name="description"
          content="Portfolio profesional de Francisco Frascona, desarrollador web especializado en React, Next.js, JavaScript, Node.js y MySQL. Creando soluciones web modernas y eficientes."
        />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar
          menuItems={menuItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <main>
          <Hero scrollToSection={scrollToSection} onDownloadCV={handleDownloadCV} />
          <About />
          <Projects onProjectDemo={handleProjectDemo} />
          <Skills />
          <Contact onContactSubmit={handleContactSubmit} />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;