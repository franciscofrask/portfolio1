import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Sistema de Stock',
    description: 'Aplicación completa de gestión de stock para empresas. Incluye módulos de clientes, proveedores, almacenes, ventas y presupuestos. Ideal para controlar inventario en tiempo real.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MySQL', 'Mantine'],
    image: 'https://api.microlink.io/?url=https://sistemas-lilac.vercel.app/stock/inventario&screenshot=true&meta=false&embed=screenshot.url',
    demoUrl: "https://sistemas-lilac.vercel.app/stock/inventario",
    repoUrl: 'https://github.com/franciscofrask/sistemas',
  },
  {
    id: 2,
    title: 'StudyRoom',
    description: 'Plataforma colaborativa tipo Stack Overflow donde usuarios pueden hacer preguntas técnicas y recibir respuestas de la comunidad. Fomenta el aprendizaje entre programadores y entusiastas.',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
    demoUrl: null,
    repoUrl: 'https://github.com/franciscofrask/StudyRooms',
  },
  {
    id: 3,
    title: 'Control de Gastos',
    description: 'Aplicación frontend para registrar y visualizar gastos personales. Permite organizar finanzas de forma simple e intuitiva. Uno de mis primeros proyectos.',
    technologies: ['React', 'CSS', 'Bootstrap'],
    image: 'https://api.microlink.io/?url=https://control-gastos-rust.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    demoUrl: 'https://control-gastos-rust.vercel.app/',
    repoUrl: 'https://github.com/franciscofrask/ControlDeGastos',
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="glass-effect rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
  >
    <img 
      className="w-full h-48 object-cover"
      alt={`Proyecto ${project.title}`}
      src={project.image}
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        <Button
          onClick={() => {
            if (project.demoUrl) window.open(project.demoUrl, '_blank');
          }}
          size="sm"
          className="flex-1"
          disabled={!project.demoUrl}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </Button>
        <Button
          onClick={() => window.open(project.repoUrl, '_blank')}
          size="sm"
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          <Github className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="proyectos" className="section-padding px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Proyectos Destacados</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes que demuestran mi experiencia y creatividad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
